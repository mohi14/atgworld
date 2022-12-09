import React, { useState } from 'react';
import Group from './Group';
import './Sidebar.css'
import re1 from '../../Assets/recomand-1.png'
import re2 from '../../Assets/recomand-2.png'
import re3 from '../../Assets/recomand-3.png'
import re4 from '../../Assets/recomand-4.png'

const Sidebar = ({ joined }) => {
    const [logo, setLogo] = useState(false)
    const handleClick = () => {
        setLogo(!logo)
    }

    const recommendedGroups = [
        {
            id: 1,
            img: re1,
            name: "Leisure"
        },
        {
            id: 2,
            img: re2,
            name: "Activism"
        },
        {
            id: 3,
            img: re3,
            name: "MBA"
        },
        {
            id: 4,
            img: re4,
            name: "Philosophy"
        }
    ]
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


            {
                joined && <div className=''>
                    <h6 className='text-center mt-5 mb-4'> <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mb-1 me-2'>
                        <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black" />
                    </svg>
                        RECOMMENDED GROUPS</h6>

                    <div>
                        {
                            recommendedGroups.map(group => <Group
                                key={group.id}
                                group={group}
                            ></Group>)
                        }
                    </div>

                </div>
            }

        </div>
    );
};

export default Sidebar;