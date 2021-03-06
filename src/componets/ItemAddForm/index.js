import React, { useState } from 'react';

import './index.css';

const ItemAddForm = ({addItem})=> {
  const [value , setValue] = useState('');
 

  const onLabelChange = (event) => {
    
    setValue(  event.target.value )
    
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    if(value.trim().length > 0){
    addItem(value);
    }
    setValue( ('') );
  }

  
    return (
      <form
        onSubmit={onFormSubmit}
        className="item-add-form d-flex">
        <input
          type="text"
          value={value}
          className="form-control"
          onChange={onLabelChange}
          placeholder="Your next step"
        />
        <button
          style = {{width: "116px"}}
          className="btn btn-outline-info"
        >
          Add Item
        </button>
      </form>
    );
  };
  export default React.memo(ItemAddForm);
  

