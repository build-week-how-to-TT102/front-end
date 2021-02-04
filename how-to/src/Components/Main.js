//Site Home Page - Figma Slide 1

import React from 'react';
import { Link } from 'react-router-dom';
import '../Main.css';
import { Card, CardImg, CardText, 
    CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

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

export default function Main () {
   

    return(
        <>
        <Card>
            <CardImg top width='100%' src='https://images.unsplash.com/photo-1564678043463-cb44638ea0e2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000' alt='Flower picture' class='img'/>
            
            <CardBody>
                <div className='Main'>
                    <CardTitle tag='h3'>How-To</CardTitle>
                    <CardSubtitle tag='h4'>Life Hacks</CardSubtitle>
                    <CardText>Have a life hack? Share it on how-to. Posts with the most likes / reviews will be at the top of the feed, simplifying life for everyone.</CardText>
                    <div className='Login'>
                        <Link to={'/Login'}>
                            <Button>Login</Button>
                        </Link>
                    </div>
                    <div className='Register'>
                        <Link to={'/Register'}>
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
            </CardBody>
        </Card>
        </>
    );
}




