// SearchBar.jsx
import React, { useRef } from 'react';
import search_icon from '../assets/Icons/search.png';

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  return (
    <div className="search-bar">
      <input ref={inputRef} type="text" placeholder="Search" />
      <img
        src={search_icon}
        alt="search icon"
        onClick={() => onSearch(inputRef.current.value)}
      />
    </div>
  );
};

export default SearchBar;
