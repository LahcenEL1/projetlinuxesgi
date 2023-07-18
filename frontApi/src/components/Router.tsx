import React from 'react';
import { Routes as ReactRoutes, Route } from "react-router";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRoute from './PrivateRoute';
import CreateUser from '../pages/CreateUser/CreateUser';
import ViewUsers from '../pages/ViewUser/ViewUsers';
import CreateArticle from '../pages/CreateArticles/CreateArticles';
import ViewArticles from '../pages/ViewArticles/ViewArticles';
import CreateComment from '../pages/CreateComment/CreateComment';
import ViewComment from '../pages/ViewComment/ViewComent';
const Router = () => (
    <ReactRoutes>
        <Route
            path="/"
            element={<Home />}
        />
        <Route
            path="/createcomments"
            element={<CreateComment />}
        />
        <Route
            path="/viewcomments"
            element={<ViewComment />}
        />
        <Route
            path="/login"
            element={<Login />}
        />

        <Route
            path="/compte"
            element={<Home />}
        />
        <Route
            path="/createarticles"
            element={<CreateArticle />}
        />
        <Route
            path="/createuser"
            element={<CreateUser />}
        />
        <Route
            path="/viewusers"
            element={<ViewUsers />}
        />
        <Route
            path="/viewarticles"
            element={<ViewArticles />}
        />

    </ReactRoutes>
)
export default Router;