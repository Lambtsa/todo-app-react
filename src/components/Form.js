import React, { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const handleTitleChange = e => {
    /* eslint-disable-next-line */
    console.log(title);
    setTitle(e.target.value);
  };

  const handleDescriptionChange = e => {
    /* eslint-disable-next-line */
    console.log(description);
    setDescription(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    /* eslint-disable-next-line */
    console.log('clicked')
    if (title === '') {
      setError(true);
    } else {
      /* eslint-disable-next-line */
      console.log('info is good');
    }
  };

  return (
    <section role="contentinfo">
      <h2 className="form__title">New Task</h2>
      {error && <p className="form__errorMessage">Please enter a title for your task.</p>}
      <form onSubmit={handleFormSubmit} className="form" name="Add New Task">
        <input
          className={error ? 'form__input form__error' : 'form__input'}
          type="text"
          placeholder="Task name"
          autoComplete="off"
          maxLength="30"
          onChange={handleTitleChange}
          value={title} />
        <input
          className="form__input"
          type="text"
          placeholder="Task description"
          autoComplete="off"
          maxLength="30"
          onChange={handleDescriptionChange}
          value={description} />
        <button className="form__btn" type="submit">Add task</button>
      </form>
    </section>
  );
};

export default Form;
