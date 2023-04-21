import React from 'react';
import Navigation from '../components/Navigation';
import Quests from '../components/Quests';


const dashBoard = () => {
    
    return (
        <div>
            <Navigation/>
            <h1>Tableau de bord</h1>
           
            <Quests/>
        </div>
    );
};

export default dashBoard;