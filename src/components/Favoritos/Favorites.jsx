import { connect } from "react-redux"
import React from "react";


export  function Favorites(props) {
    console.log(props.myFavorites)
    
    return (
        <> 
        <h1>Solo los obstáculos le dan sentido al propósito</h1>
       
       <div>
       {props.myFavorites?.map( character => (
            <div>
                <h3>{character.id}</h3>
                <img src={character.image} alt="" />
            </div>    
       ) )}
       </div>
       </>
       
    );
 }


const mapStateToProps = (state) =>{
    return {
      myFavorites : state.myFavorites // este está conectado desde Store.jsx
    }
  }
 

 export default connect(mapStateToProps,null)(Favorites);