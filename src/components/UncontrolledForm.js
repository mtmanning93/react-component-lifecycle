import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCat = React.createRef();
        this.inputComment = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCat.current.value)
        console.log(this.inputComment.current.value)
    }

    render() {
            return (
                <div>
                    <h2>Pleae fill out the form below:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="id-name">Your Name:</label>
                            <input
                                id="id-name"
                                name="name"
                                type="text"
                                ref={this.inputName}
                                defaultValue="John Smith"
                            />
                        </div>
                        <div>
                        <label htmlFor="id-cat">Query Category:</label>
                            <select id="id-cat" name="category" ref={this.inputCat}>
                                <option value="website">Website issue</option>
                                <option value="order">Order issue</option>
                                <option value="general">General inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="id-comments">Comments:</label>
                            <textarea id="id-comments" name="comments" ref={this.inputComment} />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
    }
}

export default UncontrolledForm