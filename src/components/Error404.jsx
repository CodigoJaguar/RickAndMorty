import React from 'react';
import Nav from "./Nav.jsx";
import { NavLink } from "react-router-dom";




export default function Error404(props) {

    
    return (
        <> 
            <div>
            <h1>ERROR 404</h1>
            <p></p>
            <h2>Esta ruta no existe</h2>
            <img src="https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg" alt="error" />
            </div>
       </>
       
    );
 }
 