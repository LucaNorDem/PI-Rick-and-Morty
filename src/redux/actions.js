const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";

const addfav = (character) =>{
    return {type: ADD_FAV, payload:character}
}

const removefav = (id) =>{
    return {type: REMOVE_FAV, payload: id}
}

export {addfav,removefav,ADD_FAV,REMOVE_FAV};