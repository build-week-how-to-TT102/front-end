import axios from 'axios';
import React, { useState } from 'react';
//import * as yup from 'yup'
//import axios from 'axios';

//add form schema here for validation - outside the function


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


    return(
        <>
            <div>
                Login
            </div>
        </>
    );
}