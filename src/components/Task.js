import React from 'react';

const Task = ({ taskList }) => (
  <li className="listItem pending">
    <div className="listItem__details">
      <div>
        <h3>{taskList.title}</h3>
        <p>{taskList.description}</p>
      </div>
      <p className="listItem__tag">pending</p>
    </div>
    <button type="button" className="listItem__btn">Remove</button>
  </li>
);

export default Task;
