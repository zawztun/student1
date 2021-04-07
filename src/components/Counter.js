import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)

    this.state = {count: 0}
    }

    // increment(){
    //     this.setState({count: this.state.count + 1})
    // }
    increment(){
        this.setState(prev => ({count: prev.count + 1}))
    }

    decrement () {
        this.setState(prev =>({count: prev.count -1}))
    }

    render() {
        return (
            <div>
              <p> Count: {this.state.count}</p>  
                <button onClick = {()=>this.increment()}>Increment</button>
                <br/>
                <button onClick = {()=>this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
