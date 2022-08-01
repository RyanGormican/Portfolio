import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import ListNotes from './components/ListNotes';
import SearchNotes from './components/SearchNotes';
import NoteHeader from './components/NoteHeader';


const App = () => {
    
            const date = new Date();
    const [notes, setNotes] = useState([{ noteId: nanoid(),  noteText:'Welcome to DeNoted!', noteDate:date.toLocaleDateString(), noteColor:'#ffff88'}]);
    const [search, setSearch] = useState(''); 
    var Changed = false;
    if (JSON.parse(localStorage.getItem('denoted-data-darkmode')) === "true")
        {
        Changed = true;
        }
    const [darkMode, setdarkMode] = useState(Changed);
  useEffect(() => {
      const getNotes = JSON.parse(localStorage.getItem('denoted-data'));
      const getDark = JSON.parse(localStorage.getItem('denoted-data-darkmode'));
    if (getNotes){
     setNotes(getNotes);   
    }
    if (getDark === true){
    setdarkMode(true);  
    }
  },[]);
  useEffect(() => {
      localStorage.setItem('denoted-data', JSON.stringify(notes));
  }, [notes]);
      useEffect(() => {
    var darkvalue = "false";
      if (darkMode === true)
      {
     var darkvalue = "true";
      }
      localStorage.setItem('denoted-data-darkmode', JSON.stringify(darkvalue));
  }, [darkMode]);
    const addNote = (note) => {
        const date = new Date();
        const newNote = {
            noteId: nanoid(),
            noteText: note,
            noteDate: date.toLocaleDateString(),
            noteColor: "#ffff88",
    };
    const newList = [...notes, newNote];
    setNotes(newList);
    };

  const removeNote = (noteId) => {
    const newList = notes.filter((note)=> note.noteId !== noteId);   
    setNotes(newList);
  };
    return (
        
    <div className={`${darkMode && 'setdarkMode'}`}>  
        <div className='containNotes'>
        <NoteHeader toggleDarkMode={setdarkMode} /> 
        <SearchNotes setSearch={setSearch} />
        <ListNotes theNotes={notes.filter((note) => note.noteText.toLowerCase().includes(search.toLowerCase()) )} addtheNote={addNote} removetheNote={removeNote} setNotes={setNotes} />
        </div>
</div>
  );
};


export default App;
