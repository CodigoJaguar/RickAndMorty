import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./reducer"


export function addCharacter(personaje) {
    return {type : ADD_CHARACTER , payload : personaje}
}

export function deleteCharacter(id){
    return {type : DELETE_CHARACTER , payload: id }
}

export function filterCards(gender){
    return {type : FILTER , payload : gender}
}


export function orderCards(id){
    return {type : ORDER , payload : id}
}