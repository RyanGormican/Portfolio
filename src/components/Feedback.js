import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { database } from '../firebaseConfig';
import { projects } from './ProjectList';

function Feedback() {
  const handleProjectClick = async (projectName) => {
    try {
      const docRef = await addDoc(collection(database, 'feedback'), {
        project: projectName,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <h1>Want to see a project improved? Click one of the buttons to gauge intrest in that project. </h1>
      <div>
        {projects.map((project, index) => (
          <button key={index} onClick={() => handleProjectClick(project.title)}>
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Feedback;

