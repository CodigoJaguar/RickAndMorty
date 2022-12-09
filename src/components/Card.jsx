import styled from "styled-components";
import { Link } from "react-router-dom";
import { addCharacter , deleteCharacter } from "./redux/actions";
import { connect } from "react-redux"
import React from "react";
import { useEffect } from "react";


const Div1 = styled.div`
  display : flex ;
  flex-direction : row ;
  justify-content : space-around ;
  align-items: center ;
  padding : 20px ;
  background-color: rgb(96, 26, 130);
`;

const H3s = styled.h2`
 color : white ;
`;

// En <Link> genera un texto con el nombre de la carta y su link

export  function Card(props) {
   

   React.useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   
   
   const [isFav, setIsFav ] = React.useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.deleteCharacter(props.id)
         //console.log(props.myFavorites)
      }else{
      setIsFav(true)
      const Character = {id: props.id , species:props.species, name:props.name, image:props.image }
      props.addCharacter(Character)
      }
   }
   //console.log(props)

   

   return (
      <Div1>
            { isFav ? (<button onClick={handleFavorite}>❤️</button>) : (
               <button onClick={handleFavorite}>🤍</button>  ) }

         <button onClick={()=>props.onClose(props.id)}> X </button>

         <Link to={`/detail/${props.id}`} >
         <H3s className="card-title">{props.name} </H3s>
         </Link>
         
         <h2> {props.species} </h2>
         <h2> {props.gender}  </h2>
         <h2> {props.origin}  </h2>
         <img  src={props.image} alt="" /> 
         
      </Div1>
   );
}



const mapStateToProps = (state) =>{
  return {
    myFavorites : state.myFavorites // este está conectado desde Store.jsx
  }
}


const mapDispatchToProps = (dispatch)=>{
  return  {  addCharacter:    personaje=>  dispatch(addCharacter(personaje)) ,
             deleteCharacter: id=> dispatch(deleteCharacter(id))    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);












//  Renderizado condicional 
// { isFav ? (<button onClick={handleFavorite}>❤️</button>) : (
//    <button onClick={handleFavorite}>🤍</button>  ) }