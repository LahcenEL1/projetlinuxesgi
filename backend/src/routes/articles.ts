import express from 'express';
import Article from '../models/article';

const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
    const articles = await Article.find().populate('author');
    res.json(articles);
});

// Create a new article
router.post('/', async (req, res) => {
    const newArticle = new Article(req.body);
    try {
        const savedArticle = await newArticle.save();
        res.json(savedArticle);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});

export default router;
