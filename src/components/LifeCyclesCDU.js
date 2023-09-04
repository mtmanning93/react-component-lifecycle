import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {

    constructor(props) {
        console.log("Constructor updated")
        super(props)
        
        this.state = {
            greeting: "Hello!"
        }
    }

    updateGreeting = () => {
        console.log("updateGreeting called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye!" : "Hello!"
            }
        })
    }

    componentDidUpdate() {
        console.log("Component updated")
    }

    render() {
        console.log("render method called")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
            </div>
        )
  }
}

export default LifeCyclesCDU