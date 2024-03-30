import React, { useState } from 'react';
import profileData from './profileData.json';

const Profile = () => {

    const [nData, setnData] = useState(profileData);
    console.log(profileData);

    //handleRemoveAll() - removes all data at once.
    const handleRemoveAll = () => {
        setnData([]); // sets the nData as empty
    }

    return (
        <div className='mainTag'>
            <ol>
                {
                    nData.map( value => 
                    <li key={value.id}>
                        {value.name}  
                    </li>
                    )
                }
            </ol>
            <button onClick={handleRemoveAll}>Clear ALL</button>
           
        </div>
    )
}

export default Profile
