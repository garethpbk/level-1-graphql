import React, { Component } from 'react';

export default class PostForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="title" />
        <textarea placeholder="body" />
        <button>Submit</button>
      </form>
    );
  }
}
