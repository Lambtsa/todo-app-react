import React, { Component } from 'react';

import Form from './Form';
import TaskList from './TaskList';

class Main extends Component {
  constructor() {
    super();

    this.state = { title: '', description: '' };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleTitleChange(title) {
    this.setState({
      title,
    });
  }

  handleDescriptionChange(description) {
    this.setState({
      description,
    });
  }

  handleSubmitForm() {
    /* eslint-disable-next-line */
    console.log(this.state);
    this.setState({
      title: '',
      description: '',
    });
  }

  render() {
    const { title, description } = this.state;
    return (
      <>
        <main className="main">
          <Form
            title={title}
            description={description}
            onTitleChange={this.handleTitleChange}
            onDescriptionChange={this.handleDescriptionChange}
            onFormSubmit={this.handleSubmitForm} />
          <TaskList taskList={this.state} />
        </main>
      </>
    );
  }
}

export default Main;
