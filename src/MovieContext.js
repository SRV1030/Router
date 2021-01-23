import React,{useState,createContext} from 'react';

export const MovieContext =createContext();

export const MovieProvider=(props)=>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 231024,
        },
        {
            name: 'Game of Thrones',
            price: '$17',
            id: 239024,
        },
        {
            name: 'Sardi  meh garmi',
            price: '$17',
            id: 2309024,
        },
    ]);
    return(
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
                {/* Basically it's like a central data management where we can use data iof context from every part of file */}

            </MovieContext.Provider>
    );
}
