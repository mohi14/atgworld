import React, { useState } from 'react';
import './Sidebar.css'

const Sidebar = () => {
    const [logo, setLogo] = useState(false)
    const handleClick = () => {
        setLogo(!logo)
    }
    return (
        <div className='mt-5 ms-5 ps-3 position-sticky top-sidebar'>
            <div className='search-location border-bottom d-flex align-items-center'>
                <div>
                    <input type="text" placeholder='Noida, India' onFocus={handleClick} onBlur={handleClick} />
                </div>
                {
                    logo ?
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-3'>
                            <path d="M11.8333 1.34169L10.6583 0.166687L6.00001 4.82502L1.34167 0.166687L0.166672 1.34169L4.82501 6.00002L0.166672 10.6584L1.34167 11.8334L6.00001 7.17502L10.6583 11.8334L11.8333 10.6584L7.17501 6.00002L11.8333 1.34169Z" fill="black" />
                        </svg>

                        :
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-3'>
                            <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="black" />
                        </svg>
                }

            </div>
            <div className='mt-4 text-secondary d-flex'>
                <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                        <path d="M6.33337 9.00004H7.66671V10.3334H6.33337V9.00004ZM6.33337 3.66671H7.66671V7.66671H6.33337V3.66671ZM6.99337 0.333374C3.31337 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.31337 13.6667 6.99337 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 6.99337 0.333374ZM7.00004 12.3334C4.05337 12.3334 1.66671 9.94671 1.66671 7.00004C1.66671 4.05337 4.05337 1.66671 7.00004 1.66671C9.94671 1.66671 12.3334 4.05337 12.3334 7.00004C12.3334 9.94671 9.94671 12.3334 7.00004 12.3334Z" fill="#6c757d" />
                    </svg>
                </div>
                <div>
                    <span className='caution-text'>Your location will help us serve better and extend a personalised experience.</span>
                </div>

            </div>

        </div>
    );
};

export default Sidebar;