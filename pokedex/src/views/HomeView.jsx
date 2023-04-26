import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { fetchPokemons } from '../store/actions/actionCreator';
// import Footer from '../components/Footer';
// import Carousel from '../components/Carousel';

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
      <div className="d-flex justify-content-center flex-wrap gap-3 row row-cols-1 row-cols-md-4 g-4">
        {pokemons?.map(el => {
          return <MDBCard className='w-25 mh-100 flex-fill'>
            <Link to={`details/${el.name}`}>
              <MDBBtn>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage className='vh-50 mw-100' src={el.imageUrl} fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{el.name}</MDBCardTitle>
                  <MDBCardText>
                  </MDBCardText>
                </MDBCardBody>
              </MDBBtn>
            </Link>
          </MDBCard>
        })}
      </div>
    </div>
  )

}

