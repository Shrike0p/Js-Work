import React from 'react';

const SearchBar = ({ search, handleInput, handleSearch, handleSearchKeyDown }) => {
  return (
    <div className='searchBar'>
      <input
        placeholder='Search Meals'
        type='text'
        value={search}
        onChange={handleInput}
        onKeyDown={handleSearchKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
