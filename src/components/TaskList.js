import React from 'react';
import Task from './Task';

const TaskList = ({ taskList }) => (
  <section role="contentinfo">
    <h2>Tasks</h2>
    <ul>
      <Task taskList={taskList} />
    </ul>
  </section>
);

export default TaskList;
