import React from 'react';
const SearchProject =({ setSearch }) => {
   return (
   <div className='searchNotes'>
   <input  onChange={(event) => 
   setSearch(event.target.value)} type='text' placeholder='Search for a project' />
   </div>
);
};
export default SearchProject;
