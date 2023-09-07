import React, {useState, useEffect} from 'react';
import { database } from '../firebaseConfig';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

export default function Suggestions () {
 const [suggestions, setSuggestions] = useState([]);
  const [newSuggestion, setNewSuggestion] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'suggestions'), (snapshot) => {
      const suggestionList = [];
      snapshot.forEach((doc) => {
        suggestionList.push({ id: doc.id, text: doc.data().text });
      });
      setSuggestions(suggestionList);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    setNewSuggestion(e.target.value);
  };

  const addSuggestion = async () => {
    if (newSuggestion.trim() !== '') {
      try {
        const docRef = await addDoc(collection(database, 'suggestions'), {
          text: newSuggestion,
        });
        setNewSuggestion('');
        console.log('Suggestion added with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding suggestion: ', error);
      }
    }
  };

return (
<div>
      <h2>Suggestions Box</h2>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>{suggestion.text}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter your suggestion"
        value={newSuggestion}
        onChange={handleInputChange}
      />
      <button onClick={addSuggestion}>Submit</button>
    </div>
);
}