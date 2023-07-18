import express from 'express';
import User from '../models/user'

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Create a new user
router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
});

export default router;
