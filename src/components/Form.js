import React from 'react';

const Form = () => (
  <section role="contentinfo">
    <h2 className="form__title">New Task</h2>
    <form className="form" name="Add New Task">
      <input className="form__input" type="text" placeholder="Task name" autoComplete="off" maxLength="30" />
      <input className="form__input" type="text" placeholder="Task description" autoComplete="off" maxLength="30" />
      <button className="form__btn" type="button">Add task</button>
    </form>
  </section>
);

export default Form;
