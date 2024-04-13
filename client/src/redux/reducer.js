import { ADD_FAV,REMOVE_FAV,FILTER, ORDER } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };

        case REMOVE_FAV:
            return { ...state, 
                myFavorites: action.payload 
            };

        case FILTER:
            const characters = [...state.allCharacters];
            return action.payload === "All" ? 
            {...state, myFavorites: [...state.allCharacters]} :
            {...state, myFavorites: characters.filter((char)=> char.gender === action.payload)}

        case ORDER:
            const orderCharacters = [...state.myFavorites];
            orderCharacters.sort((a, b) =>  action.payload === "A" ? a.id - b.id : b.id - a.id               
            );
            
            return {...state, myFavorites: orderCharacters}

        default:
            return {...state};
    }
}

export default rootReducer;