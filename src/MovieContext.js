import React, { useEffect, useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {

    const [posts, setPost] = useState([]);
    const vacio = [''];

    //Llamo a la funcion abajo asi no uso useEffect
    useEffect(() => {
        getDatitos();
      },[]);

    const getDatitos = async () => {
        const response = await fetch(`http://tucodigital.com/wp-json/wp/v2/posts?search=${vacio}`);
        const data = await response.json();
        console.log('desde context: ', data);
        return setPost(data);
    }

    //getDatitos();

    return(
        <MovieContext.Provider value={[posts, setPost]}>
            {props.children}
        </MovieContext.Provider>
    );
}