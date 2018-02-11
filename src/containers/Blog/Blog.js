import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import Posts from './Posts/Posts';
import styles from './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div>
        <header className={styles.Blog}>
          <nav>
            <ul>
              <li><NavLink activeStyle={{color: 'coral'}} to="/post">Home</NavLink></li>
              <li><NavLink activeStyle={{color: 'coral'}} to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} />*/}
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
          <Route path="/post" component={Posts}/>
          <Route render={() => <h1>Not found</h1>}/>
          {/*<Redirect from="/" to="/post"/>*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;