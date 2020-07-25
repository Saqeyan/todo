import React from 'react';

import './index.css';

const SearchPanel = ({ value, onSearchChange }) => (
  <input
    value={value}
    placeholder="search"
    onChange={({ target: { value } }) => onSearchChange(value)}
    className="form-control search-input"
  />
);

export default SearchPanel;
