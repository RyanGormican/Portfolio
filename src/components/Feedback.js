import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import { projects } from './ProjectList';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

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
    <div style={{ textAlign: 'center' }}>
      <h1>Want to see a project improved? Click one of the buttons to gauge interest in that project.</h1>
      <div>
        {sortedProjects.map((project, index) => (
          <button key={index} onClick={() => handleProjectClick(project.title)}>
            {project.title}
          </button>
        ))}
      </div>
      <div className="form">
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
          />
          <br />
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel id="topic-label" style={{ color: 'white' }}>Topic</InputLabel>
            <Select
              labelId="topic-label"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              label="Topic"
              required
              style={{ color: 'white', backgroundColor: 'transparent' }}
            >
              <MenuItem value="">Select a topic</MenuItem>
              {allOptions.map((project, index) => (
                <MenuItem key={index} value={project.title}>{project.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            label="Suggestion"
            type="text"
            name="suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
