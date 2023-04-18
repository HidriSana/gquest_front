import React from 'react';
import {NavLink} from 'react-router-dom'
import '../Styles/Nav.scss'

const Navigation = () => {
    return (
       <div className="navbar">
            <a className="main-title" href="/">GQUEST</a>
            <p>Faites des quêtes en famille</p>
            <ul className="nav">
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/administration">
                    <li>Administration</li>
                </NavLink>
            </ul>
       </div>
    );
};

export default Navigation;