import styled from "styled-components";
import React from 'react';
import  validation from "./validation";
import './Contact.modules.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";



export default function Form(props) {

   const navigate = useNavigate();
   const [access, setAccess] = React.useState(false);
   const username = 'ejemplo@gmail.com';
   const password = '1password';

   function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
    }

    useEffect(() => {
      !access && navigate('/');
   }, [access]);


    const [inputs, setInputs ] = React.useState({
        username    : '',
        password   : '',
     });
    
     const [errors, setErrors] = React.useState({
      username    : '',
      password   : '',
     });
    
     const handleChange = (evento)=> {
      setInputs({...inputs,[evento.target.name]: evento.target.value})
    
      setErrors(validation({...inputs,[evento.target.name]: evento.target.value}))
     }

    
     
    const handleSubmit = (evento)=>{
    evento.preventDefault()
    let ErrorsArray = Object.keys(errors)  ;              // Me retorna un arreglo con todas las propiedades de un objeto
    if(ErrorsArray.length==0) alert('Datos completos')
    else alert('Debes corregir los errores')
    login(inputs)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label> Username: 
                <input name='username' onChange={handleChange} className={errors.name && 'warning'} value={inputs.name}></input>
                <p className='danger'>{errors.name}</p>
            </label>

            <label> Password: 
                <input name='password' onChange={handleChange} className={errors.password && 'warning'} value={inputs.password}></input>
                <p className='danger'>{errors.password}</p>
            </label>

            <button type='submit'>Login</button>

        </form>
        </>
       
    );
 }
 