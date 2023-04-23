import React from 'react';
import Navigation from '../components/Navigation';
import Quests from '../components/Quests';
import '../Styles/Dashboard.scss';


const dashBoard = () => {
    
    return (
        <div>
            <Navigation/>
            <h2>Tableau de bord</h2>
            <div className="dashboard">
                {/*Cette div ne veut rien dire pour le moment, elle est uniquement là pour donner une idée sur les prochaines fonctionnalités à implémanter*/}
                <p>Niveau: 5 (Jeune pousse)</p>
                <p>Expérience cumulée: 526 points</p>
                <p> Vous avez 1 quête(s) en cours(expire dans 18h et 45 minutes)</p>
                <p>Vous avez fini 9 quête(s) cette semaine.</p>
                <p><a href="/#">Voir le tableau des récompenses</a></p>
            </div>
            {/*L'affichage des quêtes*/}
            <Quests/>
        </div>
    );
};

export default dashBoard;