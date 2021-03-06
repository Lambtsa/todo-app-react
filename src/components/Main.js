import React, { useState } from 'react';

import Form from './Form';
import TaskList from './TaskList';
import createTaskItem from '../helpers/helpers';

const Main = () => {
  const [taskList, setTaskList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (title === '') {
      setError(true);
    } else {
      const item = createTaskItem(title, description);
      /* eslint-disable-next-line */
      console.log(item)
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
        <TaskList taskList={taskList} />
      </main>
    </>
  );
};

export default Main;
