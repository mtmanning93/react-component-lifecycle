import React, {useState} from 'react'

function ControlledFormHooks() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, category, comments)
    }
    return (
        <div>
            <h2>Pleae fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={
                            (event) => setName(event.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                <label htmlFor="id-cat">Query Category:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} id="id-cat" name="category">
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea value={comments} onChange={(e) => setComments(e.target.value)} id="id-comments" name="comments" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks