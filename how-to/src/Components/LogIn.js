import axios from 'axios';
import React, { useState } from 'react';
import * as yup from 'yup'


//FORM SCHEMA
const formSchema = yup.object().shape({
    username: yup
        .string()
        .required('Invalid Username'),
    password: yup
        .string()
        .required('Incorrect Password'),

});


export default function Login() {
    //STATE
    const [formState, setFormState] = useState([{
        username: '',
        password: ''
    }]);

    const [errorState, setErrorState] = useState([{
        username: '',
        password: ''
    }]);

    //SUBMIT FUNCTION - for login info
    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('Submitted Login');

        axios
            .post('https://build-week-how-to-tt102.herokuapp.com/api/auth/login', formState) 
            .then(response => {
                console.log('I am logging in: ', response.data)
            })
            setFormState(formState)
    };

    //VALIDATE FUNCTION - with Yup
    const validate = (evt) => {

        const userInput = {
            ...formState,
            [evt.target.name]: evt.target.value
        }

        formSchema
            .isValid(userInput)
            .then(res => {
                setErrorState({
                    ...errorState,
                    [evt.target.name]: ''
                })
            })
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [evt.target.name]: err.errors[0]
                })
            })
    };

    //CHANGE HANDLER
    const inputChange = (evt) => {
        evt.persist();
        validate(evt);

        const theValue = evt.target.value;
        setFormState({...formState, [evt.target.name]: theValue});
    }

    return(
        <>
            <div>
                <h1>Login</h1>
                <br></br>
            </div>

                <form className='form-container' onSubmit={onSubmit}>
                    <div className='username'>
                        <label htmlFor='username'>
                            Username: 
                            <textarea
                                name='username'
                                value={formState.value}
                                onChange={inputChange}
                                >
                            </textarea>
                        </label>
                    </div>

                     <br></br>

                    <div className='password'>
                        <label htmlFor='password'>
                            Password: 
                            <textarea
                                name='password'
                                value={formState.value}
                                onChange={inputChange}
                                >
                            </textarea>
                        </label>
                    </div>
                    
                    <br></br>

                    <div className='submit-button'>
                        <button>Log In</button>
                    </div>
                </form>
        </>
    );
}