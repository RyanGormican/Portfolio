import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';
import Compscidle from './images/Compscidle.png'
function App() {
  return (
    <div className="App" >
      <Container maxWidth="sm" >
         <div className="flex">
			<a href="https://www.linkedin.com/in/ryangormican/">
				<Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
			</a>
			<a href="https://github.com/RyanGormican/RealDiscuss">
				<Icon icon="mdi:github" color="#e8eaea" width="40" />
			</a>
	    </div>
      </Container>
     <Grid container spacing={0.5}>
        <Grid item xs={4}>
            <a href = "https://compscidle.vercel.app/">
                <img src = {Compscidle} width="85%">
                </img>
            </a>
        </Grid> 
       <Grid item xs={4}>
            <a href = "https://compscidle.vercel.app/">
                <img src = {Compscidle} width="85%">
                </img>
            </a>
        </Grid> 
       <Grid item xs={4}>
            <a href = "https://compscidle.vercel.app/">
                <img src = {Compscidle} width="85%">
                </img>
            </a>
        </Grid> 
        <Grid item xs={4}>
            <a href = "https://compscidle.vercel.app/">
                <img src = {Compscidle} width="85%">
                </img>
            </a>
        </Grid> 
       <Grid item xs={4}>
            <a href = "https://compscidle.vercel.app/">
                <img src = {Compscidle} width="85%">
                </img>
            </a>
        </Grid> 
       <Grid item xs={4}>
            <Tooltip title="CompScidle is a clone of the popular New York Times game Wordle using the React library. The user has 6 attempts to guess a 5 letter word using the keyboard onscreen or by typing on the keyboard. Words are pulled from a .txt file all centered around program and computer science-related topics.">
                <a href = "https://compscidle.vercel.app/">
                    <img src = {Compscidle} width="85%">
                    </img>
                </a>
            </Tooltip>
        </Grid> 
     </Grid>

    </div>
  );
}

export default App;
