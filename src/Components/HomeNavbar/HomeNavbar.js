import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/whole.png'
import './HomeNavbar.css'

const HomeNavbar = () => {
    const handleLogIn = () => {

    }
    return (
        <div>
            <Navbar bg="white" variant="light" className='navbar'>

                <Navbar.Brand href="#home" className='logo d-lg-block d-none'>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Nav className="m-auto d-lg-block d-none">
                    <input type="search" className='search' placeholder='Search for your favorite groups in ATG' />

                </Nav>
                <Nav className='d-lg-flex d-none'>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">



                            <p className='m-0 drop d-inline'>Create account. <span className='drop-down'>It’s free!</span><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-2'>
                                <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" />
                            </svg>
                            </p>




                        </a>
                        <ul class="dropdown-menu">

                            {/* login modal start */}
                            <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='w-100'>
                                <li><button class="dropdown-item" href="#" onClick={handleLogIn}>LogIn</button></li>
                            </a>
                        </ul>
                    </li>
                </Nav>


                {/* modal body */}
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content ">
                            <div class="modal-header" style={{
                                backgroundColor: '#EFFFF4',
                                color: '#008A45'
                            }}>
                                <h1 class="modal-title fs-5 m-auto" id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body p-5 d-flex gap-5">
                                <div className='w-50'>
                                    <h1 className='fw-semibold'>Sign In</h1>
                                    <form className='mt-5'>
                                        <input type="email" className='w-100 bg-light form-control p-3 rounded-0 rounded-top border-bottom-0' placeholder='Email' />
                                        <input type="password" className='w-100 bg-light form-control p-3 rounded-0 rounded-bottom password' placeholder='Password' />

                                        <div className='w-100 bg-primary text-center text-white my-4 p-3 rounded-pill fs-5 fw-semibold'>Sign In</div>
                                        <div className='w-100  text-center   pt-3 border fs-6  d-flex  gap-3 justify-content-center'>

                                            <div> <img src={require('../../Assets/facebook-logo.png')} alt="" className='' /></div>
                                            <p>Sign in with Facebook</p>

                                        </div>
                                        <div className='w-100  text-center  my-2 pt-3 border fs-6  d-flex  gap-3 justify-content-center'>

                                            <div> <img src={require('../../Assets/google-logo.png')} alt="" className='' /></div>
                                            <p>Sign in with Google</p>

                                        </div>
                                        <p className='text-center mt-4 fw-semibold'>Forgot Password?</p>
                                    </form>
                                </div>
                                <div className='w-50'>
                                    <p className='fw-semibold fs-5'>Don’t have an account yet? <button className='text-primary btn btn-link text-decoration-none fs-5 ps-0 mb-1 fw-semibold' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Create new for free!</button></p>
                                    <img src={require('../../Assets/login-photo.png')} alt="" className='m-auto mt-5 ms-5' />
                                </div>

                            </div>
                            {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button> */}
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Hide this modal and show the first with the button below.
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                            </div>
                        </div>
                    </div>
                </div>





                <Nav className='d-flex d-lg-none mobile-nav ms-auto'>
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