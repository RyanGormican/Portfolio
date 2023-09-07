import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import {database} from '../firebaseConfig';


export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [newSuggestion, setNewSuggestion] = useState('');
  const [name, setName] = useState('Anonymous');
  const [topic, setTopic] = useState('');
  const [status] = useState('Incomplete');

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
    if (newSuggestion.trim() !== '') {
      try {
        await addDoc(collection(database, 'suggestions'), {
          name,
          topic,
          suggestion: newSuggestion,
          date: serverTimestamp(),
          status,
        });
        setNewSuggestion('');
        console.log('Suggestion added successfully');
      } catch (error) {
        console.error('Error adding suggestion: ', error);
      }
    }
  };

  return (
    <div className = "suggestions">
      <h2>Suggestions Box</h2>
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
      <button onClick={addSuggestion}>Submit</button>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            <strong>Name:</strong> {suggestion.name},{' '}
            <strong>Topic:</strong> {suggestion.topic},{' '}
            <strong>Suggestion:</strong> {suggestion.suggestion},{' '}
           <strong>Date:</strong> {suggestion.date ? suggestion.date.toDate().toLocaleString() : 'N/A'},{' '}
            <strong>Status:</strong> {suggestion.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
