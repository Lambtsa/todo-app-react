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

  return (
    <button
      onClick={handleTaskClick}
      type="button"
      className={`listItem ${status}`}
      style={status === 'pending' ? { backgroundColor: details.color } : { backgroundColor: '#1C190D' }}>
      <div className="listItem__details">
        <div>
          <h3 className="listItem__title">{details.content.title}</h3>
          <p className="listItem__subtitle">{details.content.description || 'No description'}</p>
        </div>
        <p
          className={`listItem__tag ${status}`}
          style={status === 'pending' ? { background: 'rgba(0, 0, 0, 0.2)' } : { backgroundColor: details.color }}>
          {status}
        </p>
      </div>
      {status === 'done' && <button type="button" onClick={() => handleTaskDelete(details.id)} className="listItem__btn">Remove</button>}
    </button>
  );
};

export default Task;
