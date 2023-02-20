import styled from "styled-components";
import React from 'react';
import './EstilosDefault.css'

// Solo los obstáculos le dan sentido al propósito
// El éxito son metas, todo lo demás son comentarios


export default function About(props) {

    
    return (
        <> 
            <div className="about">
                <img
                    className='imgSanta'
                                src={require('../immagini/FotoEspacial.jpg')}
                                alt=''></img>

                <div className='aboutInfotxt'>
                    <p><b>Hi! My name is Santander, you can call me Santa!</b> I'm the creator of this page, here you can find Rick & Mortys' characters, you could search for them by their ID or get one randomly,
                    also you can check for extra information if you click on the characters' names!</p>
                    <p>I hope you find it usefull! <b>See you soon!</b></p>
                </div>
            </div>
       </>
       
    );
 }
 
