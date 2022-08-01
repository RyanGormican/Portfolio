import DenoteProject from './DenoteProject';
const ListProjects = ({ theNotes, addtheNote, removetheNote, setNotes, }) => {
  return (
    <div className='listnotes'>
    {theNotes.map((note)=>   <DenoteNote theNotes={theNotes}noteId={note.noteId} noteText={note.noteText} noteDate={note.noteDate}noteColor={note.noteColor}removetheNote={removetheNote} setNotes={setNotes} />)}
</div>
    );
};
export default ListProjects;
