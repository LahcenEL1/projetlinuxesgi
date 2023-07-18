import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';

const CreateUser: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/users', {
                username,
                email,
                password,
            });

            console.log(response.data);
            alert('User created successfully');
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the user');
        }
    };

    return (
        <div className="create-user">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;
