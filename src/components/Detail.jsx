import React from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";




const Div1 = styled.div`
  display : flex ;
  flex-direction : column ;
  justify-content : space-around ;
  align-items: center ;
  padding : 20px ;
  background-color: rgb(200, 100, 125);
`;

const H2s = styled.h2`
 color : white ;
`;

const H3s = styled.h3`
 color : green ;
`;



export default function Detail(props) {

    const [character, setCharacter] = React.useState({});
    const {id} = useParams(); 
    console.log({character})

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [id]);

    

    return (
        <>
       <Div1>  
         
         <Link to="/home">
         <button> Home </button>

         </Link>
         

         <H2s className="card-title">{character.name} </H2s>
         
         <H2s> {character.status} </H2s>
         <H2s> {character.specie}  </H2s>
         <H2s> {character.gender}  </H2s>
         <img  src={character.image} alt="" /> 
         

         {/* <H2s> {character.origin}  </H2s>  */}

         
      </Div1>
       </>
       
    );
 }
 