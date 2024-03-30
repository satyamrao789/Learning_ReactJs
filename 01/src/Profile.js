import React, { useState } from 'react';
import profileData from './profileData.json';

const Profile = () => {

    const [nData, setnData] = useState(profileData);
    console.log(profileData);

    //handleRemoveAll() - removes all data at once.
    const handleRemoveAll = () => {
        setnData([]); // sets the nData as empty
    }

    //handleRemoveLast() - removes last value from array.
    const handleRemoveLast = () => {
        const newData = [...nData]; // used spread(...) operator to make shallow copy of nData in newData
        newData.pop();
        setnData(newData); // update the state with the new array containing the last element removed
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
            <button onClick={handleRemoveLast}>Remove Last Value</button>
           
        </div>
    )
}

export default Profile
