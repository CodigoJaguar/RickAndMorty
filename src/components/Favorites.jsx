import { connect ,useDispatch } from "react-redux"
import React from "react";
import FavCard from "./FavCard";
import Card from "./Card";
import styled from "styled-components";
import { filterCards, orderCards } from "./redux/actions";


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
    const dispatch = useDispatch()

    function handleFilter(e) {
      dispatch(filterCards(e.target.value))
    }

    function handleOrder(e) {
      dispatch(orderCards(e.target.value))
    }


    
    //            Mapeo de tarjetas usando la informacion del estado global [myFavorites]
    return (
        <> 
        
          <Styledh1>FAVORITES</Styledh1>
            <div>
               <select name="Order" id="" onChange={handleOrder}>
                  <option value="" disabled>Select</option>
                  <option value="Ascendente">Ascendente</option>
                  <option value="Descendente">Descendente</option>
               </select>
               <select name="Gender" id="" onChange={handleFilter}>
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Unknown">Unknown</option>
                  <option value="Genderless">Genderless</option>
               </select>
            </div>
            <StyledDiv>
            {myFavorites?.map( character => (<FavCard 
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

