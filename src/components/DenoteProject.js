const DenoteNote = ({ noteId, noteText, noteDate, noteColor, removetheNote,setNotes, theNotes,}) => {
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
      <small> {noteDate} </small>
     <input type="color" onChange={changeColor} id="noteColorS" name="noteColor"  value={noteColor}/>
    <button onClick={() => removetheNote(noteId)} className='deletenotes' size='1.3em' > X </button>
    </div>
    
    </div>
    );
};

export default DenoteNote;
