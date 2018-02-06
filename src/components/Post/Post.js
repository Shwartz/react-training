import React from 'react';

import styles from  './Post.css';

const post = (props) => (
    <article className={styles.Post}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;