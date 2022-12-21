import styled from "styled-components";
import { Link } from "react-router-dom";
import { addCharacter , deleteCharacter } from "./redux/actions";
import { connect } from "react-redux"
import React from "react";
import { useEffect } from "react";


const Div1 = styled.div`
  box-shadow: 0 8px 16px 0 #17ff0f33, 0 6px 20px 0 rgba(0,0,0,0.19); 
  box-shadow: 0px 0px 8px rgb(8, 241, 86);
  display : flex ;
  flex-direction : column ;
  justify-content : space-around ;
  align-items: center ;
  padding : 20px ;
  margin-top: 20px;
  background-color:#a8e339ed;
  border-radius: 3em;
  width: 340px;
  height: 320px;
`;

// box-shadow: 0 8px 16px 0 #17ff0f33, 0 6px 20px 0 rgba(0,0,0,0.19); 
// border-radius: 2em;
// width: 320px;
// height: 320px;
// background-color: #dff251ee;
// padding:.4em; 
// box-shadow: 0px 0px 8px rgb(8, 241, 86);
// margin: 1em;

const H2s = styled.h2`
   color: #142a05 ;
   font-family: 'Cafe Francoise';
   font-size: 1.7em;
   margin:0em;
`;

const ImgStyled = styled.img`
   border-radius:10em;
   border: white 1px;
   width: 160px;
   margin-bottom:.6em;
`
const DivStyled2 = styled.div`
   display:flex;
   flex-direction: row;
   justify-content:center;
   font-family: 'IBM Plex Mono';
   font-weight: 600;
   margin:auto;
   color: #4b4a4a ;
   font-size: .9em;

`
const H1Styled = styled.h1`
color: #142a05 ;
font-family: 'Cafe Francoise';
font-size: 1.7em;
margin:0em;

`


//    .characterName:hover{
//    transform: scale(1.1);
  
//   transition: transform  1s;
//   transition:  color 2s;
//   text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 42px #0fa, 0 0 82px #0fa,0 0 92px #0fa;
//   cursor: cell;
//    }

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
      //console.log(props)
      if (isFav) {
         setIsFav(false)
         props.deleteCharacter(props.id)
         //console.log(props.myFavorites)
      }else{
      setIsFav(true)
      const Character = {id: props.id , species:props.species, name:props.name, image:props.image , gender:props.gender, origin:props.origin}
      props.addCharacter(Character)
      }
   }
   //console.log(props)

   

   return (
      <Div1>
         <div>
         { isFav ? (<button onClick={handleFavorite}>❤️</button>) : (
               <button onClick={handleFavorite}>🤍</button>  ) }

         <button onClick={()=>props.onClose(props.id)}> X </button>

         </div>
          

         <Link to={`/detail/${props.id}`} >
         <H2s className="card-title">{props.name} </H2s>
         </Link>
         <DivStyled2>
         <h2> Specie: {props.species}  | Gender: {props.gender}  </h2>
         <h2> Origin: {props.origin}  </h2>
         </DivStyled2>
        
         <ImgStyled  src={props.image} alt="" /> 
         
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