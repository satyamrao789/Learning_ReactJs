import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confimpassword, setConfirmPassword] = useState('');
    const [matchpassword, setMatchPassword] = useState(true);

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
    const handleConfirmPassword = (e) => {
        console.log(e.target.value);
        setConfirmPassword(e.target.value);
        if (e.target.value === password)
            setMatchPassword(true);
        else
            setMatchPassword(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='mainTag'>
            <h1>multiple useState</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type='text' value={name} onChange={handleName}></input>
                </label>
                <label>Email:
                    <input value={email} type='email' onChange={handleEmail}></input>
                </label>
                <label>Password:
                    <input value={password} type='password' onChange={handlePassword}></input>
                </label>
                <label>Confirm Password:
                    <input value={confimpassword} type='password' onChange={handleConfirmPassword}></input>
                </label>
                {!matchpassword && <p style={{ color: 'red' }}>Password do not match</p>}
                <button type='submit'>Submit</button>
            </form>
        </div >
    )
}

export default Form
