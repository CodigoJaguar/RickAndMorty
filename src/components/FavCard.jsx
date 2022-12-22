import styled from "styled-components";
import { Link } from "react-router-dom";
import { addCharacter , deleteCharacter } from "./redux/actions";
import { connect } from "react-redux"
import React from "react";


const Div1 = styled.div`
  box-shadow: 0 8px 16px 0 #17ff0f33, 0 6px 20px 0 rgba(0,0,0,0.19); 
  box-shadow: 0px 0px 8px rgb(8, 241, 86);
  display : flex ;
  flex-direction : column ;
  justify-content : space-around ;
  align-items: center ;
  padding : 20px ;
  margin-top: 20px;
  background-color:rgb(16, 222, 222);
  border-radius: 3em;
  width: 340px;
  height: 320px;
`;

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

//  No se usan Hooks para hacer [Dispatch], ni para acceder al [state] global
export  function FavCard(props) {
   

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

export default connect(mapStateToProps, mapDispatchToProps)(FavCard);








//  Renderizado condicional 
// { isFav ? (<button onClick={handleFavorite}>❤️</button>) : (
//    <button onClick={handleFavorite}>🤍</button>  ) }