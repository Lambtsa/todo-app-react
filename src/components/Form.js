import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTitleChange(event) {
    /* eslint-disable-next-line */
    this.props.onTitleChange(event.target.value);
  }

  handleDescriptionChange(event) {
    /* eslint-disable-next-line */
    this.props.onDescriptionChange(event.target.value);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    /* eslint-disable-next-line */
    this.props.onFormSubmit();
  }

  render() {
    const { title, description } = this.props;
    return (
      <>
        <section role="contentinfo">
          <h2 className="form__title">New Task</h2>
          <form onSubmit={this.handleFormSubmit} className="form" name="Add New Task">
            <input
              className="form__input"
              type="text"
              placeholder="Task name"
              autoComplete="off"
              value={title}
              onChange={this.handleTitleChange}
              maxLength="30" />
            <input
              className="form__input"
              type="text"
              placeholder="Task description"
              autoComplete="off"
              value={description}
              onChange={this.handleDescriptionChange}
              maxLength="30" />
            <button className="form__btn" type="submit">Add task</button>
          </form>
        </section>
      </>
    );
  }
}

export default Form;
