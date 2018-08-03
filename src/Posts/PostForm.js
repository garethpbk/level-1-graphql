import React, { Component } from 'react';

export default class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;
    const { title, body } = this.state;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body
            }
          })
            .then(() => {
              this.setState({
                title: '',
                body: ''
              });
            })
            .catch(err => console.log(err));
        }}
      >
        <input
          name="title"
          type="text"
          value={title}
          placeholder="title"
          onChange={this.handleInput}
        />
        <textarea
          name="body"
          value={body}
          placeholder="body"
          onChange={this.handleInput}
        />
        <button>Submit</button>
      </form>
    );
  }
}
