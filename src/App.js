import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import Nav from './components/Nav.jsx'
import React from 'react'
import { Route , Routes } from "react-router-dom";
import About from './components/About'
import { useLocation } from 'react-router-dom'
import Form from './components/Form'
 //"react-router-dom": "^5.3.4", "react-router-dom": "^6.5.0",
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import { useEffect } from 'react'
//  Estas {} llaves hacen que no se detecte el componente Favorites
import Favorites from './components/Favorites'
import Detail from './components/Detail'
import Error404 from './components/Error404'
// Ctrl + Click Izquierdo = direcciona y si esta mal 

// Version 6.4.4 esto no  funciona   react-router-dom 
// * <Route path="/"> 
//          <About/>
//          </Route>  

function App () {

  
  // ----------------------- Datos de los personajes---------
  const [characters, setCharacter ] = React.useState([]);
  //---------------------------------------------------------
  //  Detectar la ruta donde estamos ---------
  const location = useLocation();
  //------------------------------------------
  
  function onSearch(character){

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          // ------------------------------------------------------- EVITAR PERSONAJES REPETIDOS-------------------
          // NOTA:  cortar el flujo del programa es mejor que dejar las variables completas y confirmarlas haciendo mas funciones.
          // NOTA:  buscar mas lugares donde intervenir
          for ( let elemento of characters){
            if (data.id === elemento.id) return window.alert('Ese personaje ya fue agregado')
            }
            //-----------------------------------------------------------------------------------------------------
            setCharacter((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }
  // Cerrar cartas individuales -----------------
  function onClose(Id) {
    setCharacter(characters.filter(char=>char.id !== Id))
  }
  // --------------------------------------------

      // Declaro Nav fuera del <Routes> para que se quede todo el tiempo ó en esta version de react-router-dom  ----------------------
      // path="/detail/:id"  en la parte - /:id -  tiene que coincidir con - fetch(`https://rickandmortyapi.com/api/character/${id}`) -en Detail.jsx
      //                                   /:id                                                                              /${id}
      //                           y tambien con  const {id} = useParams(); - en Detail.jsx
      //-----------------------------------------------------------------------------------------------------------------------------


  return (
    
    <div className='App' style={{ padding: '25px' }}>   
        
        {location.pathname === '/' ? <Form/> : null}
        {location.pathname === '/' ? null : <Nav OnSearch={onSearch}/>}
        <Routes>
            <Route exact path="/home" element={ characters.length === 0 ? (
                <img
                src={require('./immagini/Portal_RnM6.png')}
                alt='Imagen inicio'></img>
                    ) : ( <div>
                            <img
                              className='Logo'
                              src={require('./immagini/logoTransparente.png')}
                              alt='Logo Ricky Morty'></img>                     
                            <Cards characters={characters} onClose={onClose}/> 
                          </div> 
                        ) }>
            </Route> 
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
          <Route exact path="/favorites" element={<Favorites/>}/>
          {/* <Route path="*" element={<Error404/>}> </Route>  añadiendo esta ruta es vulnerable a saltarse el login*/}
        </Routes>    
   </div>
   
  )
}


export default App //sin usar Redux
//----- Se agrega la funcionalidad de store Redux
//export default connect(null, null)(App);
//----------------------------------------------




























      //           --------------------------------- Mismos componentes pero ahora sin Routear ---------------------------------
      //  <Nav OnSearch ={onSearch}/>  
 
      // <div>
      //   <Cards characters={characters} onClose={onClose}/> // Ahora este atributo está en Route porque sino se repite
      // </div>    

      // forma de introducir los componentes en version 6.4.4 que me quedó:      element={<Cards characters={characters} 


      //---------------------------Version 5.3.4-----------------
      // <Route  path="/">  <Nav OnSearch={onSearch}/>   </Route>
      // <Route  exact path="/favorites">  <Favorites/>  </Route>

      //   <Route exact path="/home">
      //       <div>
      //       <Cards characters={characters} onClose={onClose}/> 
      //       </div> 
      //   </Route>

      // <Route exact path="/detail/:id" component={Detail}/>

      // <Route exact path="/about">
      //     <About/>
      // </Route> 


      //<Route  path="/" element={<Nav OnSearch={onSearch}/> }></Route>