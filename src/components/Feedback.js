import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import { projects } from './ProjectList';
import { Button, TextField } from '@mui/material';

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

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Want to see a project improved? Click one of the buttons to gauge interest in that project.</h1>
      <div>
        {projects.map((project, index) => (
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
          <TextField
            label="Topic"
            type="text"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
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