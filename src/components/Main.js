import React, { useState } from 'react';

import Form from './Form';
import Task from './Task';
import createTaskItem from '../helpers/helpers';

const Main = () => {
  const [taskList, setTaskList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const handleOnClick = () => {

  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (title === '') {
      setError(true);
    } else {
      const item = createTaskItem(title, description);
      setTaskList([item, ...taskList]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <>
      <main className="main">
        <Form
          error={error}
          setError={setError}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          handleFormSubmit={handleFormSubmit} />
        <section role="contentinfo">
          <h2>Tasks</h2>
          <ul>
            {taskList && taskList
              .map(task => <Task onTaskClick={handleOnClick} key={task.id} details={task} />)}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
