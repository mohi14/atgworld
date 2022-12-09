import React, { useState } from 'react';

const Group = ({ group }) => {
    const { name, img, id } = group;

    const [follow, setFollow] = useState(false)

    const handleFollow = () => {
        setFollow(!follow)
    }
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <img src={img} alt="" />
                <p className='pt-3 ms-3 fw-semibold'>{name}</p>
            </div>

            {
                follow ? <button className='btn btn-dark rounded-pill' onClick={handleFollow}>Followed</button>
                    :
                    <button className='btn btn-light rounded-pill' onClick={handleFollow}>Follow</button>
            }



        </div>
    );
};

export default Group;