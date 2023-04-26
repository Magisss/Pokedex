import { combineReducers } from "redux";
import pokemonReducer from "./pokemons";


const rootReducer = combineReducers({
    pokemonReducer,
})

export default rootReducer