import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
} from 'mdb-react-ui-kit';
import { fetchPokemonByName } from '../store/actions/actionCreator';
import { useParams } from 'react-router-dom';


export default function Moves() {
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
                        <MDBCardText style={{ fontSize: '1.5rem' }}> {pokemonById?.firstMove}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}> {pokemonById?.secondMove}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}> {pokemonById?.thirdMove}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}> {pokemonById?.fourthMove}</MDBCardText>
                        <MDBCardText style={{ fontSize: '1.5rem' }}> {pokemonById?.fifthMove}</MDBCardText>
                    </MDBCardBody>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}