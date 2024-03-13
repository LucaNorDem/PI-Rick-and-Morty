const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";

const addfav = (character) =>{
    return {type: ADD_FAV, payload:character}
}

const removefav = (id) =>{
    return {type: REMOVE_FAV, payload: id}
}

const filterCards = (gender) =>{
    return {type: FILTER, payload: gender}
}

const orderCards = (order) =>{
    return {type: ORDER, payload: order}
}

export {addfav,removefav,filterCards,orderCards,ADD_FAV,REMOVE_FAV,FILTER,ORDER};