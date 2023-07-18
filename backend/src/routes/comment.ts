import express from 'express';
import Comment from '../models/comment';

const router = express.Router();

// Get all comments
router.get('/', async (req, res) => {
    const comments = await Comment.find().populate('author').populate('article');
    res.json(comments);
});

// Create a new comment
router.post('/', async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const savedComment = await newComment.save();
        res.json(savedComment);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});

export default router;
