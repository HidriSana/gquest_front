import React from 'react';
import {useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//const axios = require('axios'); // Ceci est une définiton : Axios est un client HTTP basé sur les promesses compatible avec node.js et les navigateurs. Il est isomorphique (c’est à dire qu’il peut opérer dans le navigateur et dans node.js avec le même code).

const Login = () => {
	const userRef = useRef(); //le useRef pourra nous garder les valeurs modifiables sous la main et dans le temps. Ici, je vais surotut l'utiliser pour le focus 
	const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	
	//Le useNavigate va me servir  à passer à la page du tableau de bord des quêtes si succès d'authentification
	const navigate = useNavigate(); 
	
	//Le useEffect se joue lorsque le composant est monté
	useEffect(() => {
		userRef.current.focus();
		
		/*axios
		  .get("http://localhost:5000/login")*/
	  }, []);
	  
	 
	 //Il est possible que je change  l'aria-live en polite plus tard, si je trouve que le message d'erreur est invasif, ou peut-être le faire disparaitre gentiment avec CSS, mais pour le moment, le message d'erreur apparaitra tant que l'utilisateur  a son focus sur l'input
	  useEffect(() => {
		setError('');
	  }, [email,password]); //Ce hook va me servir à faire disparaitre le message d'erreur dès que l'utilistaeur réussit à saisir ses données correctement


    const changeEmail = (e) => {
		setEmail (e.target.id) 
	}
	
	const changePassword = (e) => {
		setPassword (e.target.id) 
	}

    const handleSubmit = (e) => {
        e.preventDefault();
		setEmail('');
		setPassword('');
		setSuccess(true);
		navigate('/tableau-de-bord'); // Définition de la page vers laquelle va être redirigé l'utilisateur une fois authentifié avec succès
	}
   
    return (
		<>
			{success ? (
				<section>
					<h1>Vous êtes maintenant connecté</h1>
				</section>
			):(
			<div>
				<p ref={errRef} aria-live="assertive">{error}</p>
				<form onSubmit={handleSubmit} >
					<div>
						<input value={email} onChange={changeEmail} type="email" placeholder="Email" id="email" ref={userRef} required/>
					</div>
					<div>
						<input value={password} onChange={changePassword}type="text" placeholder="Mot de passe" id="password" required/>
					</div>
					<button className="btn" type="button" >Connexion</button>
					<p>
						<a href="/createuser">Je veux m'inscrire</a>
					</p>
				</form>
			</div>
			)}
		</>
    );
};

export default Login;