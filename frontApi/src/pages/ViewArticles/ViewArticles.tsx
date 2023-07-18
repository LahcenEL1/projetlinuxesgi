import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewArticle.css';

interface Article {
    _id: string;
    title: string;
    content: string;
    author: {
        _id: string;
        username: string;
        email: string;
        password: string;
        __v: number;
    };
    // Add other properties as needed
}

const ViewArticles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/articles');
                setArticles(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="view-articles">
            <h2>Articles</h2>
            {articles.map((article) => (
                <div key={article._id} className="article">
                    <p>ID: {article._id}</p>
                    <p>Title: {article.title}</p>
                    <p>Content: {article.content}</p>
                    <p>Author ID: {article.author._id}</p>
                    <p>Author Username: {article.author.username}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewArticles;
