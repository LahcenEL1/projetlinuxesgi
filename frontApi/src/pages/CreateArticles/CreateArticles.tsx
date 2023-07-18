import React, { useState } from 'react';
import axios from 'axios';
import './CreateArticle.css';

const CreateArticle: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/articles', {
                title,
                content,
                author,
            });

            console.log(response.data);
            alert('Article created successfully');
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the article');
        }
    };

    return (
        <div className="create-article">
            <h2>Create Article</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Author ID:
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Create Article</button>
            </form>
        </div>
    );
};

export default CreateArticle;
