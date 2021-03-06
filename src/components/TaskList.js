import React from 'react';
import Task from './Task';

const TaskList = ({ taskList, onTaskClick }) => (
  <section role="contentinfo">
    <h2>Tasks</h2>
    <ul>
      {taskList && taskList
        .map(task => <Task onTaskClick={onTaskClick} key={task.id} details={task} />)}
    </ul>
  </section>
);

export default TaskList;
