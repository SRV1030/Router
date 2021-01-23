import React,{useState,useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie=()=>
{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [movie,setMovie]=useContext(MovieContext);

    const upDateName=(e)=>{
        setName( e.target.value);
    }
    const upDatePrice=(e)=>{
        setPrice(e.target.value);
    }
    const addMovie= e=>{
        e.preventDefault();
        setMovie(prevMovies=> [...prevMovies,{name,price}])
    }
    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={upDateName}/>
            <input type="text" name="price" value={price} onChange={upDatePrice}/>
            <button>Submit</button>
        </form>
    )
}
export  default AddMovie;