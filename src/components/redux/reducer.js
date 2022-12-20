export const ADD_CHARACTER    = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER'



const initialState = {
     myFavorites : []
}


function rootReducer(state = initialState,actions){
    switch (actions.type) {
        case ADD_CHARACTER:
            console.log(state)
            return {state, myFavorites:[...state.myFavorites,actions.payload] }
        case DELETE_CHARACTER:
            //console.log(state.myFavorites?.filter(fav => fav.id !== actions.payload))
            return {...state,myFavorites: state.myFavorites?.filter(fav => fav.id !== actions.payload)}
           
            // const filteredList = state.myFavorites.filter(char=>char.id !== actions.payload)
            // return {...state, list: filteredList}
            //------------------------------------------------------------------------
            // return {state, myFavorites: state.myFavorites.filter(
            //                          char => char?.id !== actions.payload  // payload= personaje.id                             
            // )}
        default:
            return state
    }

}


export default rootReducer