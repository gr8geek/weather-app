import React from 'react'
export default class Wether extends React.Component{
    render(){
        console.log(this.props.isEmpty)
        if(this.props.temp!=undefined)
        {
        return(
            <div><br></br>
            Weather data Rendered on Screen
            <div><p>Temprature: {this.props.temp}</p></div>
            <div><p>Humidity:{this.props.humidity}</p></div>
            <div><p>City:{this.props.city}</p></div>
            <div><p>Country:{this.props.country}</p></div>
            <div><p>Weather:{this.props.description}</p></div>

            </div>
        )
        }
        return(<div>Do Something</div>)
    }
}