import React, {useState, useEffect} from 'react'
import axios from 'axios';

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Hello World',
            body: 'It Works',
            userID: 123,
        }
        ).then(response => {
            setPostMessage(response.status === 201
                ? `Success! Title: ${response.data.title}`
                : 'Failed'
            )
        })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/99')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data)
                ? response.data
                : [response.data]
            setPosts(data)
        })
        .catch(error => {
            setError(error.message)
        })
    }, [])

    return (
        <div>
            <button onClick={postToAPI}>
                Create Post
            </button>
            <p>{postMessage}</p>
            <h2>Posts:</h2>
            {
                posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id}. {post.title}</h2>
                            <h4>By User ID {post.userID}</h4>
                            <p>{post.body}</p>
                            <hr />                            
                        </div>
                    ))
                ) : (
                    error
                    ? <p>{error}</p>
                    : <h4>Loading posts...</h4>
                )
            }
        </div>
    )
}

export default HTTPHooks