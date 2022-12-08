import React from 'react';
import { Outlet } from 'react-router-dom';
import PostNav from '../../Components/PostNav/PostNav';
import Sidebar from '../../Components/Sidebar/Sidebar';


const DesktopLayout = () => {
    return (
        <div className='d-none d-md-block sticky'>
            <PostNav></PostNav>
            <div className='container'>
                <div className='row'>
                    <div className='col-9 p-0 mt-3 pe-5' >
                        <Outlet></Outlet>
                    </div>
                    <div className='col-3'>
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopLayout;