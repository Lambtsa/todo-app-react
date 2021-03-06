import React, { useState } from 'react';

const Task = ({ details, handleTaskDelete }) => {
  const [status, setStatus] = useState('pending');

  const handleTaskClick = () => {
    if (status === 'pending') {
      setStatus('done');
    } else {
      setStatus('pending');
    }
  };
  /* eslint-disable */
  return (
    <li
      onClick={handleTaskClick}
      type="button"
      className={`listItem ${status}`}
      style={status === 'pending' ? { backgroundColor: details.color } : { backgroundColor: '#1C190D' }}>
      <div className="listItem__details">
        <div>
          <h3>{details.content.title}</h3>
          <p>{details.content.description || 'No description'}</p>
        </div>
        <p
          className={`listItem__tag ${status}`}
          style={status === 'pending' ? { background: 'rgba(0, 0, 0, 0.2)' } : { backgroundColor: details.color }}>
          {status}
        </p>
      </div>
      {status === 'done' && <button type="button" onClick={() => handleTaskDelete(details.id)} className="listItem__btn">Remove</button>}
    </li>
  );
};

export default Task;
