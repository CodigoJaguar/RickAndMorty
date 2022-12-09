import styled from "styled-components";
import React from 'react';
import  validation from "./validation";
import './Contact.modules.css'



export default function Form(props) {

    //props.handleInputChange

    const [inputs, setInputs ] = React.useState({
        name    : '',
        password   : '',
     });
    
     const [errors, setErrors] = React.useState({
      name    : '',
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
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label> Username: 
                <input name='nombre' onChange={handleChange} className={errors.name && 'warning'} value={inputs.name}></input>
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
 