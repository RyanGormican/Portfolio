import './App.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import Contact from './components/Contact';
import React, { useState} from 'react';
import Suggestions from './components/Suggestions';
import Projects from './components/Projects';
function App() {

    const [view, setView] = useState('projects');
   
  return (
    <div className="App" >
    <div className="title-container">
      <p className="title">
      Ryan Gormican's Portfolio
      </p>
   </div>
    <div className ="button-container">
    <div> 
    <Button style= {{color: 'white', fontFamily: 'Jost',textAlign: 'center'}}  onClick={() => setView('projects')} variant = "text"> Projects </Button>
    </div>
    <div> 

    </div>
    <div className="links-container">
     <Container maxWidth="sm" >
         <div className="row">
    <div className="item">
        <a href="https://www.linkedin.com/in/ryangormican/">
            <Icon icon="mdi:linkedin" color="#0e76a8" width="50" />
        </a>
        <a href="https://github.com/RyanGormican/">
            <Icon icon="mdi:github" color="#e8eaea" width="50" />
        </a>
    </div>
        </div>
        
      </Container>
    </div>
     </div>
     <div className="content-container">
     {view === 'home' ? (
     <p className= "title">
     Welcome!
     </p> 
     ) : null }
     {view === 'projects' ? (
	 <Projects />
    ) : null }
 {view === 'suggestions' ? (
 <Suggestions />
 ) : null }
 {view === 'contact' ? (
 <Contact />
 ) : null }
        </div>


   
    </div>
  );
}

export default App;
