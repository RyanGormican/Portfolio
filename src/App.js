import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
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
        a
        </Grid> 
       <Grid item xs={4}>
        b
        </Grid> 
       <Grid item xs={4}>
        c
        </Grid> 
        <Grid item xs={4}>
        d
        </Grid> 
       <Grid item xs={4}>
        e
        </Grid> 
       <Grid item xs={4}>
        f  
        </Grid> 
     </Grid>

    </div>
  );
}

export default App;
