import './App.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import Contact from './components/Contact';
import React, { useState} from 'react';
import Suggestions from './components/Suggestions';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
function App() {
	
 const [view, setView] = useState('projects');
  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="App" >
    <div className="title-container">
      <p className="title">
      Ryan Gormican's Portfolio
      </p>
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
      <Button style={{ color: 'white' }} onClick={() => handleViewChange('projects')}> Projects </Button>
        <Button style={{ color: 'white' }} onClick={() => handleViewChange('feedback')}> Feedback </Button>
    </div>   
     <div className="content-container">
     {view === 'projects' ? (
	 <Projects />
    ) : null }
  {view === 'feedback' ? (
 <Feedback />
 ) : null }
        </div>


   
    </div>
  );
}

export default App;
