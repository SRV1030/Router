import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {  
    const [movies,setMovie]= useContext(MovieContext);  
    return (
    <div>
        <nav>
       <h3>Logo</h3>        
       <p>List of Movies:{movies.length}</p>   
       </nav>   
    </div>
    );
    
}
export default Nav;