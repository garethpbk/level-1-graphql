import React, { Component } from 'react';
import PostForm from './PostForm';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class NewPost extends Component {
  state = {
    title: '',
    body: '',
  };

  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>New Post</h1>
        <Mutation
          mutation={NEW_POST}
          variables={{
            title,
            body,
          }}
        >
          {createPost => (
            <form
              onSubmit={e => {
                e.preventDefault();
                createPost()
                  .then(() => {
                    this.setState({
                      title: '',
                      body: '',
                    });
                  })
                  .catch(err => console.log(err));
              }}
            >
              <input name="title" type="text" value={title} placeholder="title" onChange={this.handleInput} />
              <textarea name="body" value={body} placeholder="body" onChange={this.handleInput} />
              <button>Submit</button>
            </form>
          )}
        </Mutation>
        {/* <PostForm /> */}
      </div>
    );
  }
}

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;
