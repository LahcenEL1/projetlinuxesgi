import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Container, Typography } from '@mui/material';
import './CreateComment.css';

const CreateComment: React.FC = () => {
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [articleId, setArticleId] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/comments', {
                content,
                author,
                articleId
            });

            setContent("");
            setAuthor("");
            setArticleId("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm" className="create-comment">
            <Typography variant="h4" align="center" gutterBottom>Create Comment</Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Content" 
                    variant="outlined" 
                    fullWidth 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    margin="normal"
                />
                <TextField 
                    label="Author ID" 
                    variant="outlined" 
                    fullWidth 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    margin="normal"
                />
                <TextField 
                    label="Article ID" 
                    variant="outlined" 
                    fullWidth 
                    value={articleId} 
                    onChange={(e) => setArticleId(e.target.value)} 
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </Container>
    );
};

export default CreateComment;
