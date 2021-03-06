import React, { useState, useEffect } from 'react';

import Form from './Form';
import Task from './Task';
import createTaskItem from '../helpers/helpers';

const Main = () => {
  const [
    taskList,
    setTaskList,
  ] = useState(localStorage.tasks ? JSON.parse(localStorage.tasks) : []);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [key, setKey] = useState(taskList.length);

  useEffect(() => {
    localStorage.tasks = JSON.stringify(taskList);
    setKey(key + 1);
  }, [taskList]);

  const handleTaskDelete = id => {
    const newTaskList = taskList.filter(e => e.id !== id);
    setTaskList(newTaskList);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (title === '') {
      setError(true);
    } else {
      const item = createTaskItem(key, title, description);
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
          <ul className="taskList">
            {taskList && taskList
              .map(task => (
                <Task
                  key={task.id}
                  details={task}
                  handleTaskDelete={handleTaskDelete} />
              ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
