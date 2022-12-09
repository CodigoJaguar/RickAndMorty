import React from 'react';

// Ej. Datos
// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };

export default function SearchBar(props) {

   const [NamePersonaje, setInput ] = React.useState('');  // un estado para este componente
      // props. onSearch la funcion que fue creada desde App.js

      // ------------------------------ RANDOM personajes
      const randomId = Math.floor(Math.random() * 826);
   

   const handleChange = (evento)=> {                       // un cambio de valor para este estado dependiendo de lo que se le escriba en el input
      setInput(evento.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick ={()=>props.onSearch(NamePersonaje)}> Agregar </button>
         <button onClick ={()=>props.onSearch(randomId)}> AgregarRandom </button>
      </div>
      
   );
}

//  {()=>{props.onSearch(5)}}  Defino una funcion que ejecuta una funcion ya con parametro
//  {()=> props.onSearch(5) }    igual que arriba