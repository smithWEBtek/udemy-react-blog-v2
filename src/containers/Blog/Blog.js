import React, { Component } from 'react';

// import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../hoc/asyncComponent';
// import FullPost from './FullPost/FullPost';
import { Route, NavLink, Switch } from 'react-router-dom';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/posts/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Posts</NavLink></li>

              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>

            </ul>
          </nav>
        </header>
        <Switch>
          {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}; */}
          <Route path="/new-post" component={AsyncNewPost} />;
          <Route path="/posts/" component={Posts} />
          {/* <Route path="/" component={Posts} /> */}
          {/* <Redirect from="/" to="/posts" component={Posts} /> */}
          <Route path="/" render={() => <h1>Sorry, we can't find that location.</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
