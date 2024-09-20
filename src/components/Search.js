import React, { useState } from 'react';
import "./Search.css";
import AlertMessage from './AlertMessage';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('success');

  const showAlert = (message, type = 'success') => {
    setMessage(message);
    setType(type);
    setVisible(true);
    setTimeout(() => {
      setVisible(false); 
    }, 3000); // Adjusted timeout for better visibility
  };

  const searchCountry = () => {
    if (search.trim() === '') {
      showAlert('Please enter a country name', 'error');
    } else {
      onSearch(search);
      // You can add a success alert if needed
      showAlert('Searching for ' + search, 'success');
    }
  };

  return (
    <div className="search-container">
      <AlertMessage message={message} type={type} visible={visible} />
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
        className="search-input"
      />
      <button onClick={searchCountry} className="search-button">Search</button>
    </div>
  );
};

export default Search;