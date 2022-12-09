import { ADD_CHARACTER, DELETE_CHARACTER } from "./reducer"


export function addCharacter(personaje) {
    return {type : ADD_CHARACTER , payload : personaje}
}

export function deleteCharacter(id){
    return {type : DELETE_CHARACTER , payload: id }
}