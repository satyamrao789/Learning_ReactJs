import React, { useState } from 'react';
import profileData from './profileData.json';

const Profile = () => {

    const [nData, setnData] = useState(profileData);
    console.log(profileData);

    const handleClick = () => {
        setnData([]);
    }


    return (
        <div className='mainTag'>
            <ol>
                {
                    nData.map(value => <li key={value.id}>{value.name}</li>)
                }
            </ol>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Profile
