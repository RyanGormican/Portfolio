import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import ListProjects from './components/ListProjects';
import SearchNotes from './components/SearchNotes';
import ProjectHeader from './components/ProjectHeader';


const App = () => {
    
            const date = new Date();
    const [notes, setNotes] = useState([{ noteId: nanoid(),  noteText:'Denoted - DeNoted is a notes app developed using the React library. Users are able to manage the notes on the page by adding and deleting the notes they want to change. Management of notes also allows the user to change the design of a note by modifying the background color.', noteDate:'https://denoted.vercel.app/', noteColor:'#ffff88'},
          { noteId: nanoid(),  noteText:'ListLast - ListLast is a to-do list app allowing the user to add, update, and remove tasks from a list. The Bootstrap framework, and React states are utilized in order for users to be able to manage those actions through the buttons on the interface.', noteDate:date.toLocaleDateString(), noteColor:'https://ListLast.vercel.app/'},
          { noteId: nanoid(),  noteText:'CompScidle is a clone of the popular New York Times game Wordle using the React library. The user has 6 attempts to guess a 5 letter word using the keyboard onscreen or by typing on the keyboard. Words are pulled from a .txt file all centered around program and computer science-related topics.', noteDate:'https://Compscidle.vercel.app/', noteColor:'#ffff88'},
                                     
                                       ] );
    const [search, setSearch] = useState(''); 
    var Changed = false;
    if (JSON.parse(localStorage.getItem('denoted-data-darkmode')) === "true")
        {
        Changed = true;
        }
    const [darkMode, setdarkMode] = useState(Changed);
  useEffect(() => {
      const getNotes = JSON.parse(localStorage.getItem('ryangormicanportfolio-data'));
      const getDark = JSON.parse(localStorage.getItem('ryangormicanportfolio-data-darkmode'));
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
        <SearchProjects setSearch={setSearch} />
        <ListProjects theNotes={notes.filter((note) => note.noteText.toLowerCase().includes(search.toLowerCase()) )} addtheNote={addNote} removetheNote={removeNote} setNotes={setNotes} />
        </div>
</div>
  );
};


export default App;
