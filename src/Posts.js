// import React from 'react';
import axios from 'axios';


const posts = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.data
    });
}

export default posts;