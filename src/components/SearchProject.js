import React from 'react';
const SearchProject =({ setSearch }) => {
   return (
   <div className='searchNotes'>
   <input  onChange={(event) => 
   setSearch(event.target.value)} type='text' placeholder='Type to search for a note...' />
   </div>
);
};
export default SearchProject;
