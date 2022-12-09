import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PostNav from '../../Components/PostNav/PostNav';
import Sidebar from '../../Components/Sidebar/Sidebar';


const DesktopLayout = () => {
    const [joined, setJoined] = useState(false);

    // const handleJoined = () => {
    //     setJoined(!joined)

    // }
    return (
        <div className='d-none d-md-block sticky'>
            <PostNav
                joined={joined}
                setJoined={setJoined}
            ></PostNav>
            <div className='container'>
                <div className='row'>
                    <div className='col-9 p-0 mt-3 pe-5' >
                        <Outlet></Outlet>
                    </div>
                    <div className='col-3'>
                        <Sidebar
                            joined={joined}
                        ></Sidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopLayout;