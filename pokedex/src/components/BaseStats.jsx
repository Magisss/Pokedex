import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { fetchPokemonByName } from '../store/actions/actionCreator';
import { useParams } from 'react-router-dom';


export default function BaseStats() {
    const pokemonById = useSelector(state => {
        return state.pokemonReducer.pokemon
    })

    const dispatch = useDispatch()
    const { name } = useParams()
    useEffect(() => {
        dispatch(fetchPokemonByName(name))
    }, [])

    return (

        <div className="d-flex justify-content-center">
            <MDBCard style={{ width: '400px', height: '350px', marginTop: '0px' }} className={`thumb-container ${pokemonById?.type}`}>
                <MDBCardBody className="text-start">
                    <MDBCardBody className="text-start">
                        <MDBCardText style={{ fontSize: '1.5rem' }}>Hp: {pokemonById?.hp}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}>Attack: {pokemonById?.attack}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}>Defense: {pokemonById?.defense}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}>Sp Attack: {pokemonById?.spAttack}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}>Sp Defense: {pokemonById?.spDefense}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}>Speed: {pokemonById?.speed}</MDBCardText>
                    </MDBCardBody>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}