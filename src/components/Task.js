import React from 'react';

const Task = () => (
  <li className="listItem pending">
    <div className="listItem__details">
      <div>
        <h3>title</h3>
        <p>No description added</p>
      </div>
      <p className="listItem__tag">pending</p>
    </div>
    <button type="button" className="listItem__btn">Remove</button>
  </li>
);

export default Task;
