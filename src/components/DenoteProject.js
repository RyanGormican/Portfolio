const DenoteProject = ({ noteId, noteText, noteDate, noteColor, removetheNote,setNotes, theNotes,}) => {
  var id = {noteId};
  const changeColor = (event) => {
    setNotes(prevState => {
  const updColor = theNotes.map(note => {
    if(note.noteId === id.noteId )
       {
        var newColor = event.target.value;
    return{...note,noteColor: newColor};
         console.log(newColor);
       }
    return note;
  });
    return updColor;                            
  });
};
  var noteColors = {noteColor};

  return(
    <div className='notes' id={noteId} style={{'backgroundColor': noteColors.noteColor }}>
    <span> {noteText } </span>
    <div className='footnotes'>
      <small> <a href ='{noteDate}'> Site link </a> </small>
    </div>
    
    </div>
    );
};

export default DenoteProject;
