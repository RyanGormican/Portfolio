import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import { projects } from './ProjectList';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';

function Feedback() {
  const [name, setName] = useState('Anonymous');
  const [topic, setTopic] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleProjectClick = async (projectName) => {
    try {
      const docRef = await addDoc(collection(database, 'feedback'), {
        project: projectName,
        timestamp: serverTimestamp()
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, 'suggestions'), {
        name: name.trim(),
        topic: topic.trim(),
        suggestion: suggestion.trim(),
        timestamp: serverTimestamp(),
        status: 'incomplete'
      });
      setName('Anonymous');
      setTopic('');
      setSuggestion('');
    } catch (error) {
      console.error('Error adding suggestion: ', error);
    }
  };

  // Sort the projects alphabetically by title
  const sortedProjects = [...projects].sort((a, b) => a.title.localeCompare(b.title));

  // Add 'Other' at the correct alphabetical position
  const allOptions = [...sortedProjects, { title: 'Other' }].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', borderRadius: '8px', color: 'white' }}>
      <h1>Want to see a project improved? Click one of the buttons to gauge interest in that project.</h1>
      
      {/* Project Buttons Section */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
        {sortedProjects.map((project, index) => (
          <Button
            key={index}
            onClick={() => handleProjectClick(project.title)}
            variant="contained"
            sx={{
              backgroundColor: '#007BFF',
              '&:hover': {
                backgroundColor: '#0056b3'
              },
              padding: '10px 20px',
            }}
          >
            {project.title}
          </Button>
        ))}
      </Box>

      {/* Suggestion Form Section */}
      <div className="form" style={{ marginTop: '20px' }}>
        <h2>Leave a Suggestion</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name (optional)"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{ width: '100%',  border: '1px solid white',  marginBottom: 2 }}
          />
          
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="topic-label" style={{ color: 'white' }}>Topic</InputLabel>
            <Select
              labelId="topic-label"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              label="Topic"
              required
              style={{ color: 'white', border: '1px solid white', backgroundColor: 'transparent' }}
            >
              <MenuItem value="">Select a topic</MenuItem>
              {allOptions.map((project, index) => (
                <MenuItem key={index} value={project.title}>{project.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <TextField
            label="Suggestion"
            type="text"
            name="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
            sx={{  border: '1px solid white',  width: '100%', marginBottom: 2 }}
          />
          
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              '&:hover': { backgroundColor: '#218838' },
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
}

export default Feedback;
