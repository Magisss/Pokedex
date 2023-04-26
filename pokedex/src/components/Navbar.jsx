import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { fetchPokemons } from '../store/actions/actionCreator';

export default function App() {
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    const dispatch = useDispatch()

    return (
        <>
            <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorThird(!showNavColorThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorThird} navbar>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <Link to='/'>
                                    <MDBNavbarLink onClick={() => dispatch(fetchPokemons())} aria-current='page' href='#'>
                                        Home
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}