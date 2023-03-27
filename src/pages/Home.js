import React from 'react';
import Navigation from '../components/Navigation';
import Login from './Login'

const Home = () => {
    return (
        <div  className='App'>
            <Navigation/> 
            <h1>Accueil</h1>
            <Login/>
        </div>
    );
};

export default Home;