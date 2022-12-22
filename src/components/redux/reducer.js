export const ADD_CHARACTER    = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER'
export const FILTER           = 'FILTER'
export const ORDER            = 'ORDER'



const initialState = {
     myFavorites : [],
     allCharacters :[]
}


function rootReducer(state = initialState,actions){
    switch (actions.type) {
        case ADD_CHARACTER:
            //console.log(state)
            //return {state, myFavorites:[...state.myFavorites,actions.payload] }
             return { allCharacters: [...state.allCharacters,actions.payload] ,
                      myFavorites:   [...state.allCharacters,actions.payload] }
            
            
        case DELETE_CHARACTER:
            //console.log(state.myFavorites?.filter(fav => fav.id !== actions.payload))
            return {myFavorites: state.myFavorites?.filter(fav => fav.id !== actions.payload),
                    allCharacters: state.allCharacters?.filter(fav => fav.id !== actions.payload)}
           
        case FILTER:
            if (actions.payload === 'All') return {...state, myFavorites: state.allCharacters}
            return {...state, myFavorites: state.allCharacters?.filter(fav => fav.gender === actions.payload)}

        case ORDER:
            const sortedCharacters = state.allCharacters
            if (actions.payload === 'Ascendente') sortedCharacters.sort((a, b) => a.id - b.id)  
            else sortedCharacters.sort((a, b) => b.id - a.id)  
            
                return {...state, myFavorites: sortedCharacters}

        default:
            return state
    }

}


export default rootReducer