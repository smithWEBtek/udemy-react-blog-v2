import React from 'react';

import './Post.css';

const post = (props) => {
  console.log('[Single Post] props: ', props)
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
        <div>{props.body}</div>
      </div>
    </article>
  );
};

export default post;