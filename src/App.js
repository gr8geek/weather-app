import React from 'react';
//import './App.css';
import Titles from './components/Titles.js'
import Form from './components/Form.js'
import Wether from './components/Wether.js'
import 'bootstrap/dist/css/bootstrap.min.css'
const API_KEY = ""
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      temprature:undefined,
      city:undefined,
      city:undefined,
      description:undefined,
      error: "Make sure that city names are valid",
      isEmpty: true,
    }
    this.getWether = this.getWether.bind(this)
  }
  async getWether(e){
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const data = await api_call.json();
    if(city){
    console.log(data)
    this.setState({
      temprature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      descripton:data.weather[0].description,
      error:"",
      isEmpty:false,
    })
  }
  }
  render(){
    return(
      <div>
        <Titles/>
        <Form getWether={this.getWether}/>
        <Wether temp={this.state.temprature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.description}/>
      </div>
    )
  }
}

export default App;
