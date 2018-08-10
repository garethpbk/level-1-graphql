import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';
import './App.css';

// client
//   .query({
//     query: testQuery,
//   })
//   .then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <h1 className="App-title">GraphQL Is Great</h1>
            </Link>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
