import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import styles from './Blog.css';

class Blog extends Component {

  render() {
    return (
      <div>
        <header className={styles.Blog}>
          <nav>
            <ul>
              <li><NavLink activeStyle={{color: 'coral'}} exact to="/">Home</NavLink></li>
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
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;