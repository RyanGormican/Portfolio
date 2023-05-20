import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';
import Compscidle from './images/Compscidle.png'
import Denoted from './images/Denoted.png'
import Listlast from './images/Listlast.png'
import Quotedfor from './images/Quotedfor.png'
import Moviesight from './images/Moviesight.png'
import Realdiscuss from './images/Realdiscuss.png'
import Budgetbook from './images/Budgetbook.png'
import { shuffle } from 'lodash';

function App() {
    const projects = [
	{name: Budgetbook, description: "BudgetBook is a react app designed for managing expenses. Users are able to manage a list of costs by way of add and delete buttons. They can also modify the budget for the expense list to keep track of how much budget is remaining in relation to how much the total expenses in the expenses list total up to. As well, one can add tags to their costs in order to figure out their total along with what percentage of their budget is associated with a specific category.", link: "https://budget-book.vercel.app"},
        {name: Realdiscuss, description: "RealDiscuss is a full-stack web application developed using the Next.js framework for the React library. RealDiscuss is a message board app allowing the users after verifying user authentication to manage posts. Users can manage their own posts from the Google Firebase database by either creating a new one or deleting and editing the ones they already have available to them. Users can also manage posts by clicking on a specific post on the index page and on the comments section allowing the user to add comments to specific users' posts.", link: "https://realdiscuss.vercel.app/"},
        {name: Quotedfor, description: "QuotedFor is a web app made using the React library. The web app provides for the user to view a thought-provoking quote on load and through the push of a button. The application for retrieving the quotes for the web app was fetched using API calls.", link: "https://quotedfor.vercel.app/"},
        {name: Moviesight, description: "MovieSight is a front-end web app created with the Vue framework. The application allows the user to view details on the latest popular movies. With the integration of API calls, the user gets displayed on the home page a featured movie along with a list of movies and their descriptions. Users can then click on either the view more for the featured movie or just on the movie itself for the list of movies and get taken to a vision page in order to gain more details about the movie such as its runtime and the country of origin for the film.", link: "https://moviesight.vercel.app/"},
        {name: Listlast, description: "ListLast is a to-do list app allowing the user to add, update, and remove tasks from a list. The Bootstrap framework, and React states are utilized in order for users to be able to manage those actions through the buttons on the interface.", link: "https://listlast.vercel.app/"},
        {name: Denoted, description: "DeNoted is a notes app developed using React and an assortment of web technologies. Users are able to manage the notes on the page by adding and deleting the notes they want to change. Management of notes also allows the user to change the design of a note by modifying the background color.", link: "https://denoted.vercel.app/"},
        {name: Compscidle, description: "CompScidle is a clone of the popular New York Times game Wordle using the React library. The user has 6 attempts to guess a 5 letter word using the keyboard onscreen or by typing on the keyboard. Words are pulled from a .txt file all centered around program and computer science-related topics.", link: "https://compscidle.vercel.app/"},
    ];
    const shuffledProjects = shuffle(projects);
  return (
    <div className="App" >
      <Container maxWidth="sm" >
        <div className="flex">
                    <a href="https://www.linkedin.com/in/ryangormican/">
                        <Icon icon="mdi:linkedin" color="#0e76a8" width="50" />
                    </a>
                    <a href="https://github.com/RyanGormican/">
                        <Icon icon="mdi:github" color="#e8eaea" width="50" />
                    </a>
                    <div className="contact-box">
                        <Icon icon="mdi:email" color="#e8eaea" width="50" />
                        <p className="other">ryan.gormican@gmail.com</p>
                    </div>
                    <div className="contact-box">
                        <Icon icon="ic:baseline-phone" color="#e8eaea" width="50" />
                        <p className="other">(306) 520-7738</p>
                    </div>
                </div>
      </Container>
      <p className="title">
      Ryan Gormican's Portfolio
      </p> 
     <Grid container spacing={0.75}>
        {shuffledProjects.map((project, index) => (
            <Grid item xs={4}>
                 <Tooltip title={project.description}>
                    <a href = {project.link}>
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

export default App;
