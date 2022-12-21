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
    console.log(myFavorites)
    
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


const mapStateToProps = (state) =>{
    return {
      myFavorites : state.myFavorites
    }
  }
 

 export default connect(mapStateToProps,null)(Favorites);


//  <Card 
//  id = {character.id}
//  name={character.name}  
//  gender={character.gender} 
//  species = {character.species} 
//  image= {character.image} 
//  key = {character.name}
//  origin = {character.origin?.name}   
//  onClose = {props.onClose}  /> 


          //  <div>
          //       <h3>{character.id}</h3>
          //       <img src={character.image} alt="" />
          //   </div>  