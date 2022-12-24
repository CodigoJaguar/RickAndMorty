import Card from './Card';
import styled from "styled-components";

// NOTA: character.origin?.name  origin? se pregunta si ya está competa la propiedad y despues busca


const StyledDiv = styled.div`
   display: flex;
   justify-content:space-evenly;
   flex-direction:row ;
   flex-wrap: wrap;
`

export default function Cards(props) {
   const { characters } = props;


   return (
   <StyledDiv>
      { characters.map((character) => <Card 
                                    id = {character.id}
                                    name={character.name}  
                                    gender={character.gender} 
                                    species = {character.species} 
                                    image= {character.image} 
                                    key = {character.name + Date.now()}
                                    origin = {character.origin?.name}   
                                    onClose = {props.onClose}  />  ) }
   </StyledDiv>
   );
}


//key = {Date.now()}