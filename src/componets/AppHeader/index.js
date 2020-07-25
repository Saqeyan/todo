import React from 'react';

import './index.css';

const AppHeader = ({ toDo, done }) => (
  <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h2>{toDo} more to do, {done} done</h2>
  </div>
);

export default AppHeader;
