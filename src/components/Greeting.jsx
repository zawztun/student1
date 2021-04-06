import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props){
        super(props) 
        this.state={
            isSignIn:false
        }
    }

    render() {
        let name = 'zaw tun'
        return (
            this.state.isSignIn ? 
            <div> Welcome {name}</div>
            : <div>Welcome Guess</div>
        )
    }
}

export default Greeting
