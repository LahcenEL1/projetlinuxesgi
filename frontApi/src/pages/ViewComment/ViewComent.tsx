import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import './ViewComment.css';

interface Comment {
    _id: string;
    content: string;
    author: {
        _id: string;
    };
    articleId: string;
    // Ajoutez d'autres propriétés si nécessaire
}

const ViewComment: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get('http://localhost:3000/comments');
                setComments(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchComments();
    }, []);

    return (
        <Container maxWidth="sm" className="view-comment">
            <Typography variant="h4" align="center" gutterBottom>Comments</Typography>
            <List>
                {comments.map((comment) => (
                    <ListItem key={comment._id}>
                        <ListItemText primary={comment.content} secondary={`Author ID: ${comment.author._id}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ViewComment;
