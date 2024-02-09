import React from 'react';
import Compscidle from '../images/Compscidle.png'
import Denoted from '../images/Denoted.png'
import Listlast from '../images/Listlast.png'
import Quotedfor from '../images/Quotedfor.png'
import Moviesight from '../images/Moviesight.png'
import Realdiscuss from '../images/Realdiscuss.png'
import Budgetbook from '../images/Budgetbook.png'
import CardCache from '../images/CardCache.png'
import GlobeGlance from '../images/GlobeGlance.png'
import CalculateExpress from '../images/CalculateExpress.png'
import TriviaTempo from '../images/TriviaTempo.png'
import PaintersParadise from '../images/PaintersParadise.png'
import SimplyCharts from '../images/SimplyCharts.png'
import WordWonder from '../images/WordWonder.png'
import Pokendex from '../images/Pokendex.png'
import KanbanKeeper from '../images/KanbanKeeper.png'
import Grid from '@mui/material/Grid';
import {Tag} from 'antd';
import {analytics} from '../firebaseConfig.js';
import {logEvent} from "firebase/analytics";
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { shuffle } from 'lodash';
export default function Projects () {
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

}

};
    const projects = [
	{name: KanbanKeeper, title:"KanbanKeeper" , description: "KanbanKeeper is a Vue.js web application. Users are able to keep track and manage their Kanban board by controlling the various properties pertaining to it's cards and lists.", link: "https://kanbankeeper.vercel.app/"},
	{name: Pokendex, title:"Pokendex" , description: "(HOSTING CURRENTLY UNAVAILABLE) Pokendex is a Ruby on Rails app acting as a web-based Pokedex. Users can view and examine information regarding the 1025 Pokemon that exist within the series.", link: "https://github.com/RyanGormican/Pokendex"},
	{name: WordWonder, title:"WordWonder" , description: "WordWonder is a front-end word-processing app done with React.js. Users can use their textual input along with the given set of tools to produce a document for them to use.", link: "https://wordwonder.vercel.app/"},
	{name: SimplyCharts, title:"SimplyCharts" , description: "SimplyCharts is a lightweight React.js web application designed for generating charts. Users can use the onscreen controls to customize their charts. After pressing the button, the chart image gets generated using the QuickChart API.", link: "https://simplycharts.vercel.app/"},
	{name: PaintersParadise, title:"PaintersParadise" , description: "PaintersParadise is a drawing app constructed using Vue.js. Users are able to construct their masterpiece on the canvas using the given design tools.", link: "https://paintersparadise.vercel.app/"},
        {name: TriviaTempo, title:"TriviaTempo" , description: "TriviaTempo is a fast-paced web-based trivia game built with React.js. Using The Trivia API, users are given a rapid fire of trivia questions from a variety of categories with 15 seconds to answer each one.", link: "https://triviatempo.vercel.app/"},
	{name: CalculateExpress,title:"CalculateExpress" , description: "CalculateExpress is a front-end Angular app dealing with calculations. Users use the on-screen buttons to apply operations to an input of numbers.", link: "https://calculateexpress.vercel.app/"},
	{name: GlobeGlance, title:"GlobeGlance" , description: "GlobeGlance is a front-end web app for obtaining locational data such as weather. Users are able to input the search of a location in the world and be given a range of formulated data about that place done using multiple API calls.", link: "https://globeglance.vercel.app/",tags:["CSS", "HTML", "JavaScript",  "React.js", "Web Development"]},    
	{name: CardCache,title:"CardCache" , description: "CardCache is a full-stack web application based on file management. It offers users the ability to store and organize an array of files within their associated accounts, similar to the functionalities provided by Google Drive. The card refers to folder capabilities, allowing users to structure and manage their files efficiently.", link: "https://cardcache.vercel.app/", tags:["CSS", "Databases", "Full-Stack Development", "Google Firebase", "HTML", "JavaScript",  "React.js", "Web Development"]},
	{name: Budgetbook,title:"BudgetBook" , description: "BudgetBook is a react app designed for managing expenses. Users are able to manage a list of costs by way of add and delete buttons. They can also modify the budget for the expense list to keep track of how much budget is remaining in relation to how much the total expenses in the expenses list total up to. As well, one can add tags to their costs in order to figure out their total along with what percentage of their budget is associated with a specific category.", link: "https://budget-book.vercel.app"},
        {name: Realdiscuss,title:"RealDiscuss" , description: "RealDiscuss is a full-stack web application developed using the Next.js framework for the React library. RealDiscuss is a message board app allowing the users after verifying user authentication to manage posts. Users can manage their own posts from the Google Firebase database by either creating a new one or deleting and editing the ones they already have available to them. Users can also manage posts by clicking on a specific post on the index page and on the comments section allowing the user to add comments to specific users' posts.", link: "https://realdiscuss.vercel.app/"},
        {name: Quotedfor,title:"QuotedFor" , description: "QuotedFor is a web app made using the React library. The web app provides for the user to view a thought-provoking quote on load and through the push of a button. The application for retrieving the quotes for the web app was fetched using API calls.", link: "https://quotedfor.vercel.app/"},
        {name: Moviesight,title:"MovieSight" , description: "MovieSight is a front-end web app created with the Vue framework. The application allows the user to view details on the latest popular movies. With the integration of API calls, the user gets displayed on the home page a featured movie along with a list of movies and their descriptions. Users can then click on either the view more for the featured movie or just on the movie itself for the list of movies and get taken to a vision page in order to gain more details about the movie such as its runtime and the country of origin for the film.", link: "https://moviesight.vercel.app/"},
        {name: Listlast,title:"ListLast" , description: "ListLast is a to-do list app allowing the user to add, update, and remove tasks from a list. The Bootstrap framework, and React states are utilized in order for users to be able to manage those actions through the buttons on the interface.", link: "https://listlast.vercel.app/"},
        {name: Denoted,title:"Denoted" , description: "DeNoted is a notes app developed using React and an assortment of web technologies. Users are able to manage the notes on the page by adding and deleting the notes they want to change. Management of notes also allows the user to change the design of a note by modifying the background color.", link: "https://denoted.vercel.app/"},
        {name: Compscidle,title:"Compscidle" , description: "CompScidle is a clone of the popular New York Times game Wordle using the React library. The user has 6 attempts to guess a 5 letter word using the keyboard onscreen or by typing on the keyboard. Words are pulled from a .txt file all centered around program and computer science-related topics.", link: "https://compscidle.vercel.app/"},
    ];
    const featuredProjectLink = "https://cardcache.vercel.app/"
    const shuffledProjects = shuffle(projects);

    const featuredProject = shuffledProjects.find(project => project.link === featuredProjectLink);
    const otherProjects = shuffledProjects.filter(project => project.link !== featuredProjectLink);
    const trackLinkClick = (linkName) => {
    logEvent(analytics, 'project-click', {
      name: linkName,
    });
   logEvent(analytics, linkName);
};
return (
 <div>
	      {featuredProject && (
            <Grid container spacing={0.75}>
              <Grid item xs={8}>
                <a href={featuredProject.link} onClick={(e) => {
    if (e.button === 0 || e.button === 1) {
      trackLinkClick(featuredProject.title);
    }
  }}
  onMouseDown={(e) => {
    if (e.button === 1) {
      trackLinkClick(featuredProject.title);
    }
  }}
                
                
                >
                  <img src={featuredProject.name} width="100%" alt={featuredProject.title} />
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
                 <Tooltip title={project.description}style={{fontFamily:'Jost', }}>
                    <a href = {project.link} 
                    onClick={(e) => {
    if (e.button === 0 || e.button === 1) {
      trackLinkClick(project.title);
    }
  }}
  onMouseDown={(e) => {
    if (e.button === 1) {
      trackLinkClick(project.title);
    }
  }}
>
			<img src = {project.name} width="100%">
                        </img>
                    </a>
                </Tooltip>
            </Grid> 
        ))}
     </Grid>
	     </div>
);
}
