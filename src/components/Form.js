import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {username: '', 
        comment:'', 
        topics:''
                        
        }
    }
    onFormSubmit =(e) =>{
        e.preventDefault()
        console.log(this.state)}
    
    render() {
        const {username,topic, comment} = this.state;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>UserName</label>
                    <input type = 'text' value = {username} onChange = {e =>{this.setState({username: e.target.value})}}/>
                    <br/>
                    <label>Comments</label> 
                    <input type = 'text' value = {comment} onChange = {e =>{this.setState({comment: e.target.value})}}/>
                    <br/>
                    <label>Topics</label>
                    <input type = 'options' value = {topic} onChange = {e =>{this.setState({topic: e.target.value})}}/>
                   <br/> 
                   <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
