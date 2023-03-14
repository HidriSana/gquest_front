import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
       <div className="navigation">
            <ul>
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