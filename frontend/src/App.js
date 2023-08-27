import './App.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import Compscidle from './images/Compscidle.png'
import Denoted from './images/Denoted.png'
import Listlast from './images/Listlast.png'
import Quotedfor from './images/Quotedfor.png'
import Moviesight from './images/Moviesight.png'
import Realdiscuss from './images/Realdiscuss.png'
import Budgetbook from './images/Budgetbook.png'
import CardCache from './images/CardCache.png'
import GlobeGlance from './images/GlobeGlance.png'
import { shuffle } from 'lodash';
import React, { useState,  useEffect } from 'react';
import {Tag} from 'antd';
import axios from 'axios';
function App() {
const getColor = (tag)=>{
switch(tag){
    case "CSS":
    return "success";
    case "Databases":
    return "cyan";
    case "Full-Stack Development":
    return "red";
    case "Google Firebase":
    return "volcano";
    case "HTML":
    return "magenta";
    case "JavaScript":
    return "orange";
    case "React.js":
    return "green";
    case "Web Development":
    return "gold";
    default:
    return "gray"; 
}

};
    const projects = [
	{name: GlobeGlance, description: "GlobeGlance is a front-end web app for obtaining locational data such as weather. Users are able to input the search of a location in the world and be given a range of formulated data about that place done using multiple API calls.", link: "https://globeglance.vercel.app/",tags:["CSS", "HTML", "JavaScript",  "React.js", "Web Development"]},    
	{name: CardCache, description: "CardCache is a full-stack web application based on file management. It offers users the ability to store and organize an array of files within their associated accounts, similar to the functionalities provided by Google Drive. The card refers to folder capabilities, allowing users to structure and manage their files efficiently.", link: "https://cardcache.vercel.app/", tags:["CSS", "Databases", "Full-Stack Development", "Google Firebase", "HTML", "JavaScript",  "React.js", "Web Development"]},
	{name: Budgetbook, description: "BudgetBook is a react app designed for managing expenses. Users are able to manage a list of costs by way of add and delete buttons. They can also modify the budget for the expense list to keep track of how much budget is remaining in relation to how much the total expenses in the expenses list total up to. As well, one can add tags to their costs in order to figure out their total along with what percentage of their budget is associated with a specific category.", link: "https://budget-book.vercel.app"},
        {name: Realdiscuss, description: "RealDiscuss is a full-stack web application developed using the Next.js framework for the React library. RealDiscuss is a message board app allowing the users after verifying user authentication to manage posts. Users can manage their own posts from the Google Firebase database by either creating a new one or deleting and editing the ones they already have available to them. Users can also manage posts by clicking on a specific post on the index page and on the comments section allowing the user to add comments to specific users' posts.", link: "https://realdiscuss.vercel.app/"},
        {name: Quotedfor, description: "QuotedFor is a web app made using the React library. The web app provides for the user to view a thought-provoking quote on load and through the push of a button. The application for retrieving the quotes for the web app was fetched using API calls.", link: "https://quotedfor.vercel.app/"},
        {name: Moviesight, description: "MovieSight is a front-end web app created with the Vue framework. The application allows the user to view details on the latest popular movies. With the integration of API calls, the user gets displayed on the home page a featured movie along with a list of movies and their descriptions. Users can then click on either the view more for the featured movie or just on the movie itself for the list of movies and get taken to a vision page in order to gain more details about the movie such as its runtime and the country of origin for the film.", link: "https://moviesight.vercel.app/"},
        {name: Listlast, description: "ListLast is a to-do list app allowing the user to add, update, and remove tasks from a list. The Bootstrap framework, and React states are utilized in order for users to be able to manage those actions through the buttons on the interface.", link: "https://listlast.vercel.app/"},
        {name: Denoted, description: "DeNoted is a notes app developed using React and an assortment of web technologies. Users are able to manage the notes on the page by adding and deleting the notes they want to change. Management of notes also allows the user to change the design of a note by modifying the background color.", link: "https://denoted.vercel.app/"},
        {name: Compscidle, description: "CompScidle is a clone of the popular New York Times game Wordle using the React library. The user has 6 attempts to guess a 5 letter word using the keyboard onscreen or by typing on the keyboard. Words are pulled from a .txt file all centered around program and computer science-related topics.", link: "https://compscidle.vercel.app/"},
    ];
    const featuredProjectLink = "https://cardcache.vercel.app/"
    const shuffledProjects = shuffle(projects);
    const featuredProject = shuffledProjects.find(project => project.link === featuredProjectLink);
    const otherProjects = shuffledProjects.filter(project => project.link !== featuredProjectLink);

    const [view, setView] = useState('projects');
    const [suggestion, setSuggestion] = useState({
    name : 'Anonymous',
    topic: '',
    suggestion: '',
    date: new Date().toISOString(),
    });
    const [suggestions, setSuggestions] = useState([]);
    const handleSuggestionChange = (field, value)=>{
        setSuggestion(prevSuggestion => ({
        ...prevSuggestion,
        [field]:value,
        }));
    };
    useEffect(() => {
    async function fetchSuggestions() {
        try {
            const response = await axios.get('https://portfolio-backend-ryangormican.vercel.app/suggestions/get-suggestions');
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestiongs:', error);
        }
    }
    fetchSuggestions();
    }, []);
    const submitSuggestion = async () => {
  try {
    if (!suggestion.topic || !suggestion.suggestion || !suggestion.name) {
      return;
    }
    const sanitizedName = suggestion.name.trim();
    const sanitizedTopic = suggestion.topic.trim();
    const sanitizedSuggestion = suggestion.suggestion.trim();
    await axios.post('https://portfolio-backend-ryangormican.vercel.app/suggestions/add-suggestion', {
      ...suggestion,
      name: sanitizedName,
      topic: sanitizedTopic,
      suggestion: sanitizedSuggestion,
    });
    setSuggestion({
      name: 'Anonymous',
      topic: '',
      suggestion: '',
      date: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error submitting suggestion:', error);
  }
};


    };
  return (
    <div className="App" >
    <div className="title-container">
      <p className="title">
      Ryan Gormican's Portfolio
      </p>
   </div>
    <div className ="button-container">
    <div> 
    <Button  style={{ color: 'white' }} onClick={() => setView('projects')}> Projects  </Button>
    <Button  style={{ color: 'white' }} onClick={() => setView('suggestions')}> Suggestions  </Button>
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
        <div className="row">
    <div className="item">
        <a href="mailto:ryan.gormican@gmail.com">
            <Icon icon="mdi:email" color="#e8eaea" width="100%" height="100%"/>
        </a>
        <p className="other">ryan.gormican@gmail.com</p>
    </div>
         </div>
        <div className="row">
    <div className="item">
        <Icon icon="ic:baseline-phone" color="#e8eaea" width="10%" height="10%" />
        <p className="other">(306) 520-7738</p>
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
	  <div>
	      {featuredProject && (
            <Grid container spacing={0.75}>
              <Grid item xs={8}>
                <a href={featuredProject.link}>
                  <img src={featuredProject.name} width="100%" alt={featuredProject.name} />
                </a>
              </Grid>
              <Grid item xs={4}>
	    <Typography variant="body1" style={{ color: 'white', fontSize: '1.65vw' }}>
                  {featuredProject.description}
                  <br />
                  {featuredProject.tags.map((tag,index)=> (
                  <Tag key={index} color={getColor(tag)}>
                  {tag}
                  </Tag>
                  ))}
	    </Typography>
              </Grid>
            </Grid>
          )}
      <Grid container spacing={0.75}>
        {otherProjects.map((project, index) => (
            <Grid item xs={4} key={index}>
                 <Tooltip title={project.description}>
                    <a href = {project.link}>
			<img src = {project.name} alt={project.name} width="100%">
                        </img>
                    </a>
                </Tooltip>
            </Grid> 
        ))}
     </Grid>
	     </div>
    ) : null }
 {view === 'suggestions' ? (

 <div className="centered">
    <Typography variant="h2" style={{color: 'white'}}>
    Want to give some feedback? Leave me a suggestion!
    </Typography>
    <div className="suggestion-form">
        <div className="suggestion-input">
            <label className="text" htmlFor="Name"> Name: </label>
            <input type="text" id="name" value={suggestion.name} onChange={e => handleSuggestionChange('name',e.target.value)}/>
        </div>
        <div className="suggestion-input">
            <label className="text" htmlFor="Topic"> Topic: </label>
            <input type="text" id="topic" value={suggestion.topic} onChange={e => handleSuggestionChange('topic',e.target.value)}/>
        </div>
        <div className="suggestion-input">
            <label className="text"htmlFor="Suggestion"> Suggestion: </label>
            <input type="text" id="suggestion" value={suggestion.suggestion} onChange={e => handleSuggestionChange('suggestion',e.target.value)}/>
        </div>
    <Button style={{ color: 'white' }} onClick={submitSuggestion}> Submit </Button>
    </div>
    <div className="suggestions-list">
        <Typography variant="h2" style={{color: 'white'}}>
            Suggestions:
        </Typography>
        <ul>
        {suggestions && Array.isArray(suggestions) && suggestions.map((suggestion,index) =>(
            <li key={index}>
            <p> Name: {suggestion.name} </p>
            <p> Topic: {suggestion.topic} </p>
            <p> Suggestion: {suggestion.suggestion} </p>
            <p>Date: {new Date(suggestion.date).toLocaleString()}</p>
            </li>
        ))}
        </ul>
    </div>
    </div>
 ) : null }
        </div>


   
    </div>
  );
}

export default App;
