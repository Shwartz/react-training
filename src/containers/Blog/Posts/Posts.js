import React, {Component} from 'react';
import axios from '../../axios';
import {Link} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import styles from './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log('props', this.props);
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max',
          }
        });

        //this.setState({posts: response.data});
        this.setState({posts: updatedPosts});
      })
      .catch(error => {
        console.log('error: ', error);
        //this.setState({error: true})
      });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  };

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={'/' + post.id} key={post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              match={this.props.match}
              clicked={() => this.postSelectedHandler(post.id)}/>
          </Link>
        )
      });

      return (
        <section className={styles.Posts}>
          {posts}
        </section>
      )
    }
  }
}
export default Posts;