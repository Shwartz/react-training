import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import styles from './Blog.css';

class Blog extends Component {

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
          <Route path="/new-post" component={NewPost}/>
          <Route path="/post" component={Posts}/>
          <Redirect from="/" to="/post"/>
        </Switch>
      </div>
    );
  }
}

export default Blog;