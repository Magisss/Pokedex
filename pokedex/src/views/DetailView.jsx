import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { fetchPokemonByName } from '../store/actions/actionCreator';
import { NavLink, useParams } from 'react-router-dom';


export default function DetailView() {
  const pokemonById = useSelector((state) => {
    return state.pokemonReducer.pokemon;
  });

  const dispatch = useDispatch();
  const { name } = useParams();
  useEffect(() => {
    dispatch(fetchPokemonByName(name));
  }, []);

  return (
    <div className="detail-container">
      <MDBCard style={{ width: '400px', height: '350px' , marginBottom: '0px'}} className={`thumb-container ${pokemonById?.type} card`}>
        <div className="card-header">
          <MDBCardTitle className="title">{pokemonById?.name}</MDBCardTitle>
          <MDBCardText className="id">#{pokemonById?.id}</MDBCardText>
        </div>
        <MDBCardImage
          position="top"
          alt="..."
          src={pokemonById?.imageUrl}
          className="card-image"
        />
        <nav className="nav">
          <NavLink to={`about`}>
            <MDBCardText>About</MDBCardText>
          </NavLink>
          <NavLink to={`baseStats`}>
            <MDBCardText>Base Stats</MDBCardText>
          </NavLink>
          <NavLink to={`moves`}>
            <MDBCardText>Moves</MDBCardText>
          </NavLink>
        </nav>
        <MDBCardBody>
          <MDBCardText className="type">{pokemonById?.type}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
