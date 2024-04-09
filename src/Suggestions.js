import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TableSortLabel,
} from '@mui/material';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [newSuggestion, setNewSuggestion] = useState('');
  const [name, setName] = useState('Anonymous');
  const [topic, setTopic] = useState('');
  const [status] = useState('Incomplete');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'suggestions'), (snapshot) => {
      const suggestionList = [];
      snapshot.forEach((doc) => {
        suggestionList.push({ id: doc.id, ...doc.data() });
      });
      setSuggestions(suggestionList);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newSuggestion') {
      setNewSuggestion(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'topic') {
      setTopic(value);
    }
  };

  const addSuggestion = async () => {
  if (name.trim() === '' || topic.trim() === '' || newSuggestion.trim() === '') {
    return;
  }
  const sanitizedSuggestion = newSuggestion.trim();
  const sanitizedName = name.trim();
  const sanitizedTopic = topic.trim();

  try {
    await addDoc(collection(database, 'suggestions'), {
      name: sanitizedName,
      topic: sanitizedTopic,
      suggestion: sanitizedSuggestion,
      date: serverTimestamp(),
      status,
    });
    setNewSuggestion('');
  } catch (error) {
  }
};

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === 'asc';
    setSortBy(property);
    setSortOrder(isAsc ? 'desc' : 'asc');
  };

 const sortedSuggestions = [...suggestions].sort((a, b) => {
  const aValue = a[sortBy];
  const bValue = b[sortBy];
  return sortOrder === 'asc' ? aValue > bValue ? 1 : -1 : bValue > aValue ? 1 : -1;
});


  return (
    <div className="suggestions">
      <h2>Want to give feedback? Leave me a suggestion!</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Topic: </label>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={handleInputChange}
          placeholder="Enter your topic"
        />
      </div>
      <div>
        <label>Suggestion: </label>
        <input
          type="text"
          name="newSuggestion"
          value={newSuggestion}
          onChange={handleInputChange}
          placeholder="Enter your suggestion"
        />
      </div>
      <Button variant="contained" color="primary" onClick={addSuggestion}>
        Submit
      </Button>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'name'}
                  direction={sortBy === 'name' ? sortOrder : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'topic'}
                  direction={sortBy === 'topic' ? sortOrder : 'asc'}
                  onClick={() => handleSort('topic')}
                >
                  Topic
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'suggestion'}
                  direction={sortBy === 'suggestion' ? sortOrder : 'asc'}
                  onClick={() => handleSort('suggestion')}
                >
                  Suggestion
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'date'}
                  direction={sortBy === 'date' ? sortOrder : 'asc'}
                  onClick={() => handleSort('date')}
                >
                  Date of Submission
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === 'status'}
                  direction={sortBy === 'status' ? sortOrder : 'asc'}
                  onClick={() => handleSort('status')}
                >
              Status
                 </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedSuggestions.map((suggestion) => (
              <TableRow key={suggestion.id}
              style={{
                  textDecoration:
                    suggestion.status === 'Complete' ? 'line-through' : 'none',
                }}>
                <TableCell>{suggestion.name}</TableCell>
                <TableCell>{suggestion.topic}</TableCell>
                <TableCell>{suggestion.suggestion}</TableCell>
                <TableCell>
                  {suggestion.date
                    ? suggestion.date.toDate().toLocaleString()
                    : 'N/A'}
                </TableCell>
                <TableCell>{suggestion.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
