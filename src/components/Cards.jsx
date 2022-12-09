import Card from './Card';

// NOTA: character.origin?.name  origin? se pregunta si ya está competa la propiedad y despues busca

export default function Cards(props) {
   const { characters } = props;


   return (
   <div>
      { characters.map((character) => <Card 
                                    id = {character.id}
                                    name={character.name}  
                                    gender={character.gender} 
                                    species = {character.species} 
                                    image= {character.image} 
                                    key = {character.name}
                                    origin = {character.origin?.name}   
                                    onClose = {props.onClose}  />  ) }
   </div>
   );
}
