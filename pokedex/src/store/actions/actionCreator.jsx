import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

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
            let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=56&offset=0', {
                method: 'GET',
            })

            if (!res.ok) {
                throw await res.text()
            }
            let data = await res.json()
            let pokemons = []
            for (let index = 0; index < data.results.length; index++) {
                const element = data.results[index];
                let res = await fetch(`${element.url}`, {
                    method: 'GET',
                })
                if (!res.ok) {
                    throw await res.text()
                }
                let pokemon = await res.json()
                pokemons.push(pokemon)
            }
            pokemons.map((el, index) => {
                el.name = el.name.charAt(0).toUpperCase() + el.name.slice(1);
                let types = []
                for (let i = 0; i < el.types.length - 1; i++) {
                    const element = el.types[i];
                    types.push(element.type.name)
                }
                el.imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 1}.svg`
                return el
            })

            dispatch(fetchPokemonsSuccess(pokemons))
        } catch (error) {
            throw JSON.parse(error)
        }
    }
}

export function fetchPokemonByName(name) {
    return async (dispatch) => {
        try {


            let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name, {
                method: 'GET',
            })
            if (!res.ok) {
                throw await res.text()
            }
            let data = await res.json()

            let species = await P.getPokemonSpeciesByName(`${name}`)

            data.firstMove = data.moves[0].move.name
            data.secondMove = data.moves[1].move.name
            data.thirdMove = data.moves[2].move.name
            data.fourthMove = data.moves[3].move.name
            data.fifthMove = data.moves[4].move.name
            data.hp = data.stats[0].base_stat
            data.attack = data.stats[1].base_stat
            data.defense = data.stats[2].base_stat
            data.spAttack = data.stats[3].base_stat
            data.spDefense = data.stats[4].base_stat
            data.speed = data.stats[5].base_stat
            data.species = species.genera[7].genus
            data.abilities1 = data.abilities[0].ability.name
            data.type = data.types[0].type.name
            data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            data.imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`
            dispatch(fetchPokemonByNameSuccess(data))
        } catch (error) {
            throw JSON.parse(error)
        }
    }
}



