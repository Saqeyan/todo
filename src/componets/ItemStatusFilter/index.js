import React from 'react';

const ItemStatusFilter = ({ filter, onFilterChange }) =>{
  const button = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]
  const buttons = button.map(({ name, label }) => {
      const classes = filter === name ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button
          key={name}
          type="button"
          className={`btn ${classes}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  };
  export default React.memo(ItemStatusFilter);