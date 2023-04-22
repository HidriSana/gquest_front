import {NavLink} from 'react-router-dom'
import jwt_decode from "jwt-decode";
import '../Styles/Nav.scss'



const Navigation = () => {
    /*Récupération de l'utilisateur loggé du jeton  dans la navbar*/
    const token = localStorage.getItem('access');
    const user = jwt_decode(token)

    return (
       <div className="navbar">
            <a className="main-title" href="/">GQUEST</a>
            <p>Bonjour {user.firstname}</p> {/*Affichage de l'utilisateur récupéré du jeton*/}   
            <a href="/" onClick={() => localStorage.removeItem('access')}>Se déconnecter</a>
            <ul className="nav">
                <NavLink to="/tableau-de-bord">
                    <li>Tableau de  bord</li>
                </NavLink>
                <NavLink to="/administration">
                    <li>Administration</li>
                </NavLink>
                
            </ul>
       </div>
    );
};

export default Navigation;