import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    post: PropTypes.object,
  };

  static defaultProps = {
    post: {},
    onSuccess: () => null,
  };

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || '',
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit, onSuccess } = this.props;
    const { title, body, id } = this.state;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            variables: {
              id,
              title,
              body,
            },
          })
            .then(() => {
              onSuccess();
            })
            .catch(err => console.log(err));
        }}
      >
        <input name="title" type="text" value={title} placeholder="title" onChange={this.handleInput} />
        <textarea name="body" value={body} placeholder="body" onChange={this.handleInput} />
        <button className="button">Submit</button>
      </form>
    );
  }
}
