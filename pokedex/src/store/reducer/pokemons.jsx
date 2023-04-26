const initialState = { pokemons: [], pokemon: {}}

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case 'pokemons/fetchSuccess':
            return { ...state, pokemons: action.payload }
        case 'pokemonById/fetchSuccess':
            return { ...state, pokemon: action.payload }
        case 'pokemons/deletePokemonSuccess':
            return { ...state, pokemon: action.payload }
        default:
            return state
    }
}