import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
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

      </header>
    </div>
  );
}

export default App;
