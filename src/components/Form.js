import React from 'react';

export default class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getWether} >
                <input type="text" name="city" placeholder="City"></input>
                <br/>
                <button>Get The Weather</button>
            </form>
        )
    }
}