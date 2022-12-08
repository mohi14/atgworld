import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const PostNav = () => {
    return (
        <div className='post-nav nav-sticky position-sticky top-0 pt-5 bg-white pb-3'>
            <Navbar bg="white" variant="light" >
                <Container className=' p-0 border-bottom pb-0'>
                    <Nav className="me-auto fw-normal ">
                        <li className='me-3 border-bottom border-dark pb-3'>All Post(32)</li>
                        <li className='me-3 text-muted'>Article</li>
                        <li className='me-3 text-muted'>Event</li>
                        <li className='me-3 text-muted'>Education</li>
                        <li className='text-muted'>Job</li>
                    </Nav>
                    <Nav className='pb-1'>
                        <button className='btn btn-light'>Write a Post <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-3'>
                            <path d="M0.416626 0.166626L4.99996 4.74996L9.58329 0.166626H0.416626Z" fill="black" />
                        </svg>
                        </button>
                        <button className='btn btn-primary ms-3'><svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                            <path d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z" fill="white" />
                        </svg>
                            Join Group</button>
                    </Nav>

                </Container>

            </Navbar>

        </div>
    );
};

export default PostNav;