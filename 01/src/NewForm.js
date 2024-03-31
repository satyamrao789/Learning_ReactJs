import React, { useState } from 'react'

const NewForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        matchpassword: true
    })

    const handleInputValue = (e) => {
        //<input name="name" type="text" value=""></input> - when typed inside name field
        //<input name="email" type="email" value=""> - when typed inside email field
        // console.log(e.target);

        //name - when typed inside name field
        //email - when typed inside email field
        // console.log(e.target.name);


        // console.log(e.target.value);


        //below line giving error - because The error you're encountering is due to the usage of the variables name and value in the handleInputValue function without declaring or defining them.
        // setFormData({...formData, [name] : value}) 

        // to solve this 2 approaches below

        //Approach - 1 
        // setFormData({ ...formData, [e.target.name]: e.target.value });

        //Approach - 2
        //here i defined name,value
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value })
        // if (name === 'confirmpassword') {
        //     if (value === formData.password) {
        //         setFormData({...formData, matchpassword: true});
        //     } else {
        //         setFormData({...formData, matchpassword: false});
        //     }
        // }
        if (name === 'confirmpassword') {
            if (value === formData.password) {
                setFormData((prevFormData) => ({ //prevFormData me formData ka latest state store ho gya hai, jab arrow function use kiye to
                    ...prevFormData,
                    matchpassword: true
                }));
            } else {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    matchpassword: false
                }));
            }
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='mainTag'>
            <h1>multiple useState into one</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input name='name' value={formData.name} type='text' onChange={handleInputValue}></input>
                </label>
                <label>Email:
                    <input name='email' value={formData.email} type='email' onChange={handleInputValue}></input>
                </label>
                <label>Password:
                    <input name='password' value={formData.password} type='password' onChange={handleInputValue}></input>
                </label>
                <label>Confirm Password:
                    <input name='confirmpassword' value={formData.confirmpassword} type='password' onChange={handleInputValue}></input>
                </label>
                {!formData.matchpassword && <p style={{ color: 'red' }}>Password do not match</p>}
                <button type='submit'>Submit</button>
            </form>
        </div >
    )
}

export default NewForm
