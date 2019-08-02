import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
   const [posts, setPost] = useContext(MovieContext);
   console.log('desde list: ', posts);
    return (
        <div className="container my-5">
            {posts.map(post => (
                <Movie 
                    key={post.id}
                    name={post.title.rendered}
                    price={post.date}
                />
            ))}
        </div>
    );
}

export default MovieList;