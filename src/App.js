import React from 'react';
import "./MovieList";
import './App.css';
import MovieList from './MovieList';
import Nav from './nav';
import {MovieProvider} from './MovieContext';
import AddMovie from './addMovie';

function App() {
  return (
    <div className="App">
      <MovieProvider>        
      <Nav />
      <AddMovie/> 
      <MovieList /> 
      
      </MovieProvider>



    </div>
  );
}

export default App;
