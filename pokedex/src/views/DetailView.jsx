import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { fetchPokemonByName } from '../store/actions/actionCreator';
import { useParams } from 'react-router-dom';


export default function DetailView() {
    const pokemonById = useSelector(state => {
        return state.pokemonReducer.pokemon
    })
    const dispatch = useDispatch()
    const { name } = useParams()
    useEffect(() => {
        dispatch(fetchPokemonByName(name))
    }, [])

    console.log(pokemonById)
    return (
        <div className="d-flex justify-content-center">
            <MDBCard className='w-25 d-flex justify-content-center' style={{ margin: '25px' }}>
                <MDBCardBody>
                    <MDBCardTitle>{pokemonById?.name.charAt(0).toUpperCase() + pokemonById?.name.slice(1)}</MDBCardTitle>
                    <MDBCardText>
                        {pokemonById?.synopsis}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardImage
                    position='top'
                    alt='...'
                    src={pokemonById?.imageUrl}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                {/* <MDBListGroup flush>
                    <MDBListGroupItem>Genre : {pokemonById.Genre?.name}</MDBListGroupItem>
                    <MDBListGroupItem>Trailer : <a href={pokemonById?.trailerUrl}>{pokemonById?.trailerUrl}</a></MDBListGroupItem>
                    <MDBListGroupItem>Rating : {pokemonById?.rating}</MDBListGroupItem>
                </MDBListGroup> */}
                <MDBCardBody>
                    {/* <ModalCasts Casts={pokemonById?.Casts} /> */}
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}