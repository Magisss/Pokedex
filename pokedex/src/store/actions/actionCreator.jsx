export function fetchPokemonsSuccess(payload) {
    return {
        type: 'pokemons/fetchSuccess',
        payload
    }
}
export function fetchPokemonByNameSuccess(payload) {
    return {
        type: 'pokemonById/fetchSuccess',
        payload
    }
}


export function fetchPokemons() {
    return async (dispatch) => {
        try {
            let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=51&offset=0', {
                method: 'GET',

            })
        
            if (!res.ok) {
                console.log('masuk if ga nih ?')
                throw await res.text()
            }
            let data = await res.json()
            data.results.map( (el, index) => {
                el.name = el.name.charAt(0).toUpperCase() + el.name.slice(1);
                el.imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 1}.svg`
                return el
            })


            dispatch(fetchPokemonsSuccess(data.results))
        } catch (error) {
            throw JSON.parse(error)
        }
    }
}

export function fetchPokemonByName(name) {
    return async (dispatch) => {
        try {
            console.log('MASUK GA WOI ?')
            console.log(name , '<<<<<<<<<<<<<<<<name cuy')
            name = name.charAt(0).toLowerCase() + name.slice(1);
            let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name, {
                method: 'GET',
            })
            if (!res.ok) {
                throw await res.text()
            }
            let data = await res.json()
            
            data.imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`
            dispatch(fetchPokemonByNameSuccess(data))
        } catch (error) {
            throw JSON.parse(error)
        }
    }
}

