import styled from "styled-components";
import SearchBar from './SearchBar.jsx'
import React from 'react';
import { NavLink } from "react-router-dom";

const NAV = styled.nav`
  background-color: aquamarine;
  padding : 25px;
`;


export default function Nav(props) {


    var funcionSearch = props.OnSearch
    // Esto iba entre NAV <SearchBar onSearch={(characterID) => window.alert(characterID)} />
   

    return (

        <NAV>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Mis Favoritos csm</NavLink>
        <img src={'https://static.vecteezy.com/system/resources/previews/012/186/986/non_2x/head-jaguar-animal-illustration-logo-free-vector.jpg'} alt="logo-jaguar" width="100px" />
        <NavLink to="/home">Home</NavLink>
        <SearchBar onSearch={funcionSearch} />
       </NAV>
    );
 }




 