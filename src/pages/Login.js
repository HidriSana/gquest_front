import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from './context/AuthProvide'
import {useNavigate} from 'react-router-dom';

//import { useDispatch } from 'react-redux';
//const axios = require('axios'); // Ceci est une définiton : Axios est un client HTTP basé sur les promesses compatible avec node.js et les navigateurs. Il est isomorphique (c’est à dire qu’il peut opérer dans le navigateur et dans node.js avec le même code).

const Login = () => {
	const {setAuth} = useContext(AuthContext)
	const userRef = useRef(); //le useRef pourra nous garder les valeurs modifiables sous la main et dans le temps. Ici, je vais surotut l'utiliser pour le focus 
	const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	
	//Le useNavigate va me servir  à passer à la page du tableau de bord des quêtes si succès d'authentification
	const navigate = useNavigate(); 
	
	//Le useEffect se joue lorsque le composant est monté
	useEffect(() => {
		userRef.current.focus();
	  }, []);
	  
	 useEffect(() => {
		setError('');
	  }, [email,password]); //Ce hook va me servir à faire disparaitre le message d'erreur dès que l'utilistaeur réussit à saisir ses données correctement

    const handleSubmit = async (e) => {
        e.preventDefault();
		setSuccess(true)
		setEmail('');
		setPassword('');
		setSuccess(true);
		navigate('/tableau-de-bord'); // Définition de la page vers laquelle va être redirigé l'utilisateur une fois authentifié avec succès
	}
   //En ce qui concerne les balises <section></section>, elles remplacent  les div par défaut de REACT  pour la sémantique
	return (
		<>	
			{success ? (
				<section>
					<h1>Vous êtes maintenant connecté</h1>
				</section>
			):(
			<section>
				<p ref={errRef} className={error ? "errmsg" : "offscreen"} aria-live="assertive">{error}</p>
				<form onSubmit={handleSubmit} >
						
					<fieldset>
						<legend>Se connecter</legend>
						<label htmlFor="email">Login:</label>
						<input  type="email"
								id="email" 
								placeholder="Email" 
								ref={userRef}
								onChange={(e) => setEmail(e.target.value)} 
								autoComplete="off"
								value={email}  
								required
						/>

						<label htmlFor="password">Mot de passe:</label>
						<input  type="password"
                            	id="password"
								placeholder="Mot de passe" 
                            	onChange={(e) => setPassword(e.target.value)}
                            	value={password}
                           		required
						/>

						<button>Connexion</button>
					</fieldset>
					<p>
						<a href="/createuser">Je veux m'inscrire</a>
					</p>
				</form>
			</section>
			)}
		</>
    );
}

export default Login;