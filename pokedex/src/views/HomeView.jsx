import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PokemonThumb from '../components/PokemonThumb'
import { fetchPokemons } from '../store/actions/actionCreator';

export default function HomeView() {
  const pokemons = useSelector(state => {
    return state.pokemonReducer.pokemons
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <div>
      <div className="app-container">
        <h1>Pokedex</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {pokemons?.map((pokemonStats, index) =>
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.imageUrl}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />)}

          </div>
        </div>
      </div>
    </div>
  )

}

