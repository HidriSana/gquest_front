import React from 'react';
import '../Styles/Home.css'
import Navigation from '../components/Navigation';
import Login from './Login'




const Home = () => {
    return (
        <div  className='App'>
            <Navigation/> 
            <h1>Accueil</h1>
            <Login/>
            <h2>Rejoins ta guilde, complète des quêtes, montre ta valeur et transforme tes points d'expérience en récompense</h2>
            <div class = "hero">
                <img className='card' src="/svg/exclamation-mark-svgrepo-com.svg" alt="Exclamation mark for pending quest"/>
                <img className='card' src="/svg/question-mark-svgrepo-com.svg" alt="Question mark for completing quest"/>
                <img className='card' src="/svg/star-svgrepo-com.svg" alt="Star  for experience after completing a quest"/>
                <img className='card' src="/svg/gift-svgrepo-com.svg" alt="Gift for redeeming experience points"/>
            </div>
        </div>
    );
};

export default Home;