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

    //handleRemoveThisValue - will remove selected value
    const handleRemoveThisValue = (itemId) => {
        setnData(nData.filter((element) => {
            return element.id !== itemId
        }))
    }

    //handleUpdateThisValue - will update selected value
    const handleUpdateThisValue = (itemId) => {
        setnData(nData.map((element) => {
             if(element.id === itemId){
                return { name:`${element.name} updated`}
             }
             else{
                return element;
             }
        }))
    }

    return (
        <div className='mainTag'>
            <ol>
                {
                    nData.map(value =>
                        <li key={value.id}>
                            {value.name}
                            <span></span>
                            {/* to pass arguement in handleRemoveThisValue we need to make arrow fucntion */}
                            <button onClick={() => handleUpdateThisValue(value.id)}>Update me</button>
                            <button onClick={() => handleRemoveThisValue(value.id)}>Remove me</button>
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
