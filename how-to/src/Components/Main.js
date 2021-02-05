//Site Home Page - Figma Slide 1
import styled from 'styled-components'; 
import React from 'react';
import { Link } from 'react-router-dom';
import '../Main.css';
//import { Card, CardImg, CardText, 
    //CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

// #1
// Module not found: Can't resolve './components/Login' in 'C:\code\front-end\how-to\src\Components'
// THIS file is:                `/src/Components/Main.js`
// You are trying to import:    `/src/Components/Login.js`
// This is a "relative" import, so relative to this file, you are in the same directory
//
// import Login from './Components/Login'; --> Becomes...
//import Login from './Login'; ---DIDN'T NEED THIS ANYWAYS. LEAVING THESE NOTES HERE FOR MY OWN REFERENCES.
// #2
// ./node_modules/react-router-dom/esm/react-router-dom.js
// Module not found: Can't resolve 'C:\code\front-end\how-to\node_modules\react-scripts\node_modules\babel-loader\lib\index.js' in 'C:\code\front-end\how-to' 
//
// This is saying it can't find an expected node_module
// Either you haven't run `yarn install`, or someone "committed" a new dependency that
// didn't exist at the time of your first `yarn install`
// So I need to rerun npm install in the correct directory


///STYLED-COMPONENTS///



const CardImg = styled.img`
    width: 400px;
    margin: 0px auto;
    border: 20px;
    padding: 20px;
    
    
`;

const CardBody = styled.div`
    width: 400px;
    margin: 0px auto;
    border-radius: 10px;
    padding: 40px;
    border: 10px;
`;

const CardTitle = styled.h1`
    font-size: 2em;
    color: #42273B;
    width: 100%;
    margin-bottom: 20px;
    padding-right: 75px;
`;

const CardSubtitle = styled.h2`
    font-size: 25px;
    color: #42273B;
    width: 100%;
    margin-bottom: 20px;
    padding-right: 75px;
`;

const CardText = styled.p`
    color: #42273B;
    width: 100%;
    margin-bottom: 20px;
    padding-right: 75px;
`;

const Button = styled.button`
    border: 2px solid #DCED31;
    border-radius: 3px;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
`;

/////////////////////////////////////////////



export default function Main () {
   

    return(
       <div> 
        
            <CardImg src='https://images.unsplash.com/photo-1564678043463-cb44638ea0e2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000' alt='Flower picture' className='Pic'/>
            
            <CardBody>
                <div className='Main'>
                    <CardTitle tag='h1'>How-To</CardTitle>
                    <CardSubtitle tag='h2'>Life Hacks</CardSubtitle>
                    <CardText>Have a life hack? Share it on how-to. Posts with the most likes / reviews will be at the top of the feed, simplifying life for everyone.</CardText>
                    <div className='Login'>
                        <Link to={'/Login'}>
                            <Button>Login</Button>
                        </Link>
                    </div>
                    <div className='Register'>
                        <Link to={'/Register'}>
                            <Button>Register</Button>
                        </Link>
                    </div>
                </div>
            </CardBody>
        
        </div>
    );
}




