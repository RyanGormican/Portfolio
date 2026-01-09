import './App.css';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Posts from './components/Posts';
import PostPage from './components/PostPage';
import Projects from './components/Projects';
import Feedback from './components/Feedback';

function App() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <div className="title-container">
                <p className="title">Ryan Gormican</p>
                <div className="item">
                    <a href="https://www.linkedin.com/in/ryangormican/">
                        <Icon icon="mdi:linkedin" color="#0e76a8" width="50" />
                    </a>
                    <a href="https://github.com/RyanGormican/">
                        <Icon icon="mdi:github" color="#e8eaea" width="50" />
                    </a>
                </div>
            </div>

            <div className="buttons">
                <Button style={{ color: 'white' }} onClick={() => navigate('/')}>
                    Posts
                </Button>
                <Button style={{ color: 'white' }} onClick={() => navigate('/projects')}>
                    Projects
                </Button>
                <Button style={{ color: 'white' }} onClick={() => navigate('/feedback')}>
                    Feedback
                </Button>
            </div>

            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/posts/:slug" element={<PostPage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
