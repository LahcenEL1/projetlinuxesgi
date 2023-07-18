import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
    // Add other fields as needed
});

export default mongoose.model('Comment', CommentSchema);
