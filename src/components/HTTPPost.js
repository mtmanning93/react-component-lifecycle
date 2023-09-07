import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            apiResponse: null
        }
    }

    postToAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Hello World',
            body: 'It Works',
            userID: 123,
        }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

    render() {
        const {apiResponse} = this.state
        return (
            <div>
                <button onClick={this.postToAPI}>
                    Create Post
                </button>
                {
                    apiResponse
                    ? (<div>
                        <h1>{apiResponse.title}</h1>
                        <p>post id: {apiResponse.id}</p>
                        <p>{apiResponse.body}</p>
                        <p>user ID: {apiResponse.userID}</p>
                    </div>)
                    : (<p>Please click the button above</p>)
                }
            </div>
        )
    }
}

export default HTTPPost