import React from 'react';

const Form = props => {
  const {
    error,
    setError,
    title,
    setTitle,
    description,
    setDescription,
    handleFormSubmit,
  } = props;

  const handleTitleChange = e => {
    setTitle(e.target.value);
    setError(false);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
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
          value={title}
          onChange={handleTitleChange} />
        <input
          className="form__input"
          type="text"
          placeholder="Task description"
          autoComplete="off"
          maxLength="30"
          value={description}
          onChange={handleDescriptionChange} />
        <button className="form__btn" type="submit">Add task</button>
      </form>
    </section>
  );
};

export default Form;
