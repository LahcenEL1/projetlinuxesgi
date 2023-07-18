import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewUsers.css';

interface User {
    _id: string;
    username: string;
    email: string;
    // Add other properties as needed
}

const ViewUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="view-users">
            <h2>Users</h2>
            {users.map((user) => (
                <div key={user._id} className="user">
                    <p>ID: {user._id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewUsers;
