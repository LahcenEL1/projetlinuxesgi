import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import userRoutes from './routes/user';
import articleRoutes from './routes/articles';
import commentRoutes from './routes/comment';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User, Article and Comment API',
            version: '1.0.0',
            description: 'A simple Express API for users, articles and comments',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const app = express();

mongoose.connect('mongodb+srv://lahcen:lahcenesgi@cluster0.f6bg3rk.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);
app.use('/comments', commentRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
