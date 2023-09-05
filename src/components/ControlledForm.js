import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            category: "website",
            comments: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSelection = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        // A simple way to prevent form from refrshing page on submit
    }

    render() {
            return (
                <div>
                    <h2>Pleae fill out the form below:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="id-name">Your Name:</label>
                            <input
                                onChange={this.handleNameChange}
                                value={this.state.name}
                                id="id-name"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div>
                        <label htmlFor="id-cat">Query Category:</label>
                            <select onChange={this.handleSelection} id="id-cat" name="category">
                                <option value="website">Website issue</option>
                                <option value="order">Order issue</option>
                                <option value="general">General inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="id-comments">Comments:</label>
                            <textarea onChange={this.handleComments} id="id-comments" name="comments" />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
    }
}

export default ControlledForm