import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from '../../Assets/whole.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HomeNavbar.css'

const HomeNavbar = () => {
    return (
        <div>
            <Navbar bg="white" variant="light" className='navbar'>

                <Navbar.Brand href="#home" className='logo d-lg-block d-none'>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Nav className="m-auto d-lg-block d-none">
                    <input type="search" className='search' placeholder='Search for your favorite groups in ATG' />

                </Nav>
                <Nav className=' justify-content-center align-items-center d-lg-flex d-none'>
                    <p className='m-0 drop'>Create account. <span className='drop-down'>It’s free!</span></p>
                    <NavDropdown id="basic-nav-dropdown" >

                    </NavDropdown>
                </Nav>
                <Nav className='d-flex d-lg-none ms-auto mobile-nav'>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="-0.00012207" width="10" height="10" fill="#868E96" />
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='nav-shape'>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.99988C7.76142 9.99988 10 7.7613 10 4.99988C10 2.23845 7.76142 -0.00012207 5 -0.00012207C2.23858 -0.00012207 0 2.23845 0 4.99988C0 7.7613 2.23858 9.99988 5 9.99988Z" fill="#868E96" />
                    </svg>
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='nav-shape'>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z" fill="#868E96" />
                    </svg>

                </Nav>
            </Navbar>
        </div >
    );
};

export default HomeNavbar; 