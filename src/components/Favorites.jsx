import { connect } from "react-redux"
import React from "react";
import Card from "./Card";
import styled from "styled-components";


const StyledDiv = styled.div`
   display: flex;
   justify-content:space-evenly;
   flex-direction:row ;
   flex-wrap: wrap;
`
const Styledh1 = styled.h1`
   color: #34e179;
   font-family: 'Rubik Gemstones';
`


export  function Favorites({myFavorites}) {
    //console.log(myFavorites)
    
    //            Mapeo de tarjetas usando la informacion del estado global [myFavorites]
    return (
        <> 
        
          <Styledh1>FAVORITES</Styledh1>
            <StyledDiv>
            {myFavorites?.map( character => (<Card 
                                                    id = {character.id}
                                                    name={character.name}  
                                                    gender={character.gender}
                                                    species = {character.species} 
                                                    image= {character.image} 
                                                    origin={character.origin}
                                                    
                                                    /> 
                    
            ) )}
            </StyledDiv>
       </>
       
    );
 }


 //       Estado Gobla  [myFavorites]  que es un arreglo de objetos(personajes)
const mapStateToProps = (state) =>{
    return {
      myFavorites : state.myFavorites
    }
  }
 

 export default connect(mapStateToProps,null)(Favorites);

