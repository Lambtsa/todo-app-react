import React from 'react';

const Task = ({ details }) => (
  <button
    type="button"
    className={`listItem ${details.status}`}
    style={details.status === 'pending' ? { backgroundColor: details.color } : ''}>
    <div className="listItem__details">
      <div>
        <h3>{details.content.title}</h3>
        <p>{details.content.description || 'No description'}</p>
      </div>
      <p className={`listItem__tag ${details.status}`}>{details.status}</p>
    </div>
    {details.status === 'done' && <button type="button" className="listItem__btn">Remove</button>}
  </button>
);

export default Task;
