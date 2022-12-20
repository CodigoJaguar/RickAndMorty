import { connect } from "react-redux"
import React from "react";
import Card from "./Card";


export  function Favorites({myFavorites}) {
    console.log(myFavorites)
    
    return (
        <> 
        <h1>Solo los obstáculos le dan sentido al propósito</h1>
       
       <div>
       {myFavorites?.map( character => (<Card 
                                              id = {character.id}
                                              name={character.name}  
                                              
                                              species = {character.species} 
                                              image= {character.image} 
                                              
                                               /> 
              
       ) )}
       </div>
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