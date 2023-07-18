import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Add other fields as needed
});

export default mongoose.model('Article', ArticleSchema);
