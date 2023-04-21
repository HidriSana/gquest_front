import React from 'react';
import Navigation from '../components/Navigation';
import Quests from '../components/Quests';


const dashBoard = () => {
    
    return (
        <div>
            <Navigation/>
            <h1>Tableau de bord</h1>
            {/*Cette div ne veut rien dire pour le moment, elle est uniquement là pour donner une idée sur les prochaines fonctionnalités à implémanter*/}
            <div>
                <p>Niveau: 5 (Jeune pousse)</p>
                <p>Expérience cumulée: 526 points</p>
                <p> Vous avez 1 quête(s) en cours(expire dans 18h et 45 minutes)</p>
                <p>Vous avez fini 9 quête(s) cette semaine.</p>
                <a href="/#">Voir le tableau des récompenses</a>
            </div>
            {/*L'affichage des quêtes*/}
            <Quests/>
        </div>
    );
};

export default dashBoard;