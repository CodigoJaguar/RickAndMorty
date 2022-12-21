import styled from "styled-components";
import SearchBar from './SearchBar.jsx'
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './EstilosDefault.css'


const NAV = styled.nav`

  padding : 25px;
`;

//  background-color: aquamarine;

export default function Nav(props) {


    var funcionSearch = props.OnSearch
    // Esto iba entre NAV <SearchBar onSearch={(characterID) => window.alert(characterID)} />
   

    return (

       <NAV>
          <div>
            <Link to={'/about'} > <button className="btnNav">About</button> </Link>
            <Link to={'/home'} > <button className="btnNav">Home</button>  </Link>
            <Link to={'/favorites'} > <button className="btnNav">My favorites</button>  </Link>
          </div>  
          <p/>
         <SearchBar onSearch={funcionSearch} />
       </NAV>
    );
 }




  //  Codigo usando texto marcado como link -------
        // <NavLink to="/about">About</NavLink>
        // <NavLink to="/favorites">My Favorites</NavLink>
        // <img src={'https://static.vecteezy.com/system/resources/previews/012/186/986/non_2x/head-jaguar-animal-illustration-logo-free-vector.jpg'} alt="logo-jaguar" width="100px" />
        // <NavLink to="/home">Home</NavLink>