import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    // const handleConfirmPassword = (e) => {
    //     console.log(e.target.value);
    //     setPassword(e.target.value);
    // }
    return (
        <div className='mainTag'>
            <h1>Taking Peoples Data</h1>
            <form>
                <label>Name:
                    <input type='text' value={name} onChange={handleName}></input>
                </label>
                <label>Email:
                    <input value={email} type='email' onChange={handleEmail}></input>
                </label>
                <label>Password:
                    <input value={password} type='password' onChange={handlePassword}></input>
                </label>
                {/* <label>Name:
                    <input value={name} type='text' onChange={handleConfirmPassword}></input>
                </label> */}
            </form>
        </div>
    )
}

export default Form
