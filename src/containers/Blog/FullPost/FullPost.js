import React, {Component} from 'react';
import axios from 'axios';

import styles from './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };
    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.props.id) {
            //if we don't have loaded post yet(any) OR we do have but it has different ID
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                    });
            }
        }
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={styles.Edit}>
                        <button className={styles.Delete}>Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;