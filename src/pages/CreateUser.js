import React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from '../api/axios'; //axios a déjà été importé de sa dépendance dans axios.js--> Voir dossier api.   
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//C'est une dépendance à installer à part. Vous pouvez la consulter dans la documentation officielle de React
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"; //Je n'importe que les icones dont j'ai besoin ici

//Même si j'ai défini les règles de validation sur Sequelize , il est de bonne pratique, de poser également des contraintes sur le front, afin que l'utilistauer ait un message d'erreur , avant même qu'il ne clique sur Submit
const USER_REGEX = /^[A-zÀ-ú]{2,30}$/ ; //-> Regex est pour autoriser les noms et prénom avec accents, et en limiter la longueur
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ; //-> Ceci est un regex pour le format mail
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/; // -> Ceci est un regex identique à celui du validateur sequelize
const REGISTER_URL = '/createuser';

const CreateUser = () => {
	const userRef = useRef(); //le useRef pourra nous garder les valeurs modifiables sous la main et dans le temps. Ici, je vais surtout l'utiliser pour le focus 
	const errRef = useRef();
    
    const [lastname, setLastname] = useState("");
	const [validLastname, setValidLastname] = useState(false)
	const [lastnameFocus, setLastnameFocus] = useState(false)

	const [firstname, setFirstname] = useState("");
	const [validFirstname, setValidFirstname] = useState(false)
	const [firstnameFocus, setFirstnameFocus] = useState(false)
	
	const [email, setEmail] = useState("");
	const [validEmail, setValidEmail ]= useState(false)
	const [emailFocus, setEmailFocus] = useState(false)

	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword ]= useState(false)
	const [passwordFocus, setPasswordFocus] = useState(false)
	
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false)

	

	useEffect(() => {
		userRef.current.focus();
	}, [])

	//C'est là qu'interviendra  le regex défini plus haut, dès que l'utilistaeur écrit quelque chose dans le champ email
	useEffect (() => {
		const result = EMAIL_REGEX.test(email);
		console.log(result);
		console.log(email);
		setValidEmail(result);
	}, [email])
    
	useEffect (() => {
		const result = PASSWORD_REGEX.test(password);
		setValidPassword(result);
	}, [password])

	useEffect (() => {
		const result = USER_REGEX.test(lastname);
		setValidLastname(result);
	}, [lastname])
	
	useEffect (() => {
		const result = USER_REGEX.test(firstname);
		setValidFirstname(result);
	}, [firstname])

	//Avec ce useEffect ,  le message d'erreur  va disparaitre à chaque fois que l'utilistauer change le statut de l'input qui a généré l'erreur
	useEffect (() => {
		setError('');
	}, [email, password])

	//C'est le moment de tout envoyer  à la base de données ;)
	const handleSubmit = async (e) => {
		e.preventDefault();
		//Si par malheur, l'utilisateur arrive à cliquer sur le bouton submit, qui est supposé être désactivé si tous les champs ne sont pas correctement remplis, les lignes ci-dessous vont faire qu'il reçoive un autre message d'erreur lui rappelant de bien remplir le formulaire. Il ne va rien envoyer à la base de données également
		const v1 = USER_REGEX.test(lastname);
		const v2 = USER_REGEX.test(firstname);
        const v3 = PASSWORD_REGEX.test(password);
		const v4 = EMAIL_REGEX.test(email);
        if (!v1 || !v2 || !v3 || !v4 ) {
            setError("Les champs n'ont pas été remplis correctement");
            return;
        }
		try {
			const response= await axios.post(REGISTER_URL,
				JSON.stringify({lastname, firstname, email, password}),
				{
					headers: {'Content-Type': 'application/json' },
				});
				console.log(response?.data);
				console.log(JSON.stringify(response));
				setSuccess(true);
				setLastname('');
				setFirstname('');
				setEmail('');
				setPassword('');
				
			} catch (err) {
				if(!err?.response) {
					setError('Le serveur ne répond pas')
				} else if (err.response?.status === 409) {
					setError ('Cette adresse mail est associée à un autre compte utilisateur')
				} else  {
					setError ("L'inscription a échoué")
				}
				errRef.current.focus(); //un focus sur l'erreur
		}
	}
    
    return (
		<>
		{success? (
			<section>
				<h1>Bravo!Vous vous êtes incrit avec succès.</h1> 
				<p>Vous pouvez maintenant vous <a href="/login">connecter</a></p>
			</section>
		) :(

        <section>
			<Navigation/>
			<p ref={errRef} className= {error ? "error" : "offscreen"} aria-live = "assertive">{error}</p>
            <form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Créez votre compte d'utilistaeur</legend>
							<label htmlFor="lastname">Nom:
								<FontAwesomeIcon icon={faCheck} className={validLastname? "valid" : "hide"} />
								<FontAwesomeIcon icon={faTimes} className={validLastname || !lastname ? "hide" : "invalid"}/>
							<label/>
							</label>
							<input 	type="text" 
									id="lastname" 
									value={lastname} 
									ref={userRef} 
									onChange={(e) => setLastname(e.target.value)} 
									required
									aria-invalid={validLastname? "false" : "true"}
									aria-describedby="lastnamenote"
									onFocus= {() => setLastnameFocus(true)}
									onBlur= {() => setLastnameFocus(false)}
							/>
							<p id="lastnamenote" className={lastnameFocus && lastname && !validLastname ? "instructions" : "offscreen"}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Votre nom ne doit pas contenir de nombres.
								Sa longueur doit ête comprise entre  2 et  30 caractères.
							</p>
				
							<label htmlFor="firstname">Prénom:
								<FontAwesomeIcon icon={faCheck} className={validFirstname? "valid" : "hide"} />
								<FontAwesomeIcon icon={faTimes} className={validFirstname || !firstname ? "hide" : "invalid"}/>
							</label>
							<input  type="text" 
									id="firstname" 
									value={firstname}  
									ref={userRef} 
									onChange={(e) => setFirstname(e.target.value)}
									required
									aria-invalid={validFirstname? "false" : "true"}
									aria-describedby="firstnamenote"
									onFocus= {() => setFirstnameFocus(true)}
									onBlur= {() => setFirstnameFocus(false)}
							/>
							<p id="firstnamenote" className={firstnameFocus && firstname && !validFirstname ? "instructions" : "offscreen"}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Votre prénom ne doit pas contenir de nombres.
								Sa longueur doit ête comprise entre  2 et  30 caractères.
							</p>
						<div>
							<label htmlFor="email">Email:
								<FontAwesomeIcon icon={faCheck} className={validEmail? "valid" : "hide"} />
								<FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"}/>
							</label>
							<input  type="email" 
									id="email" 
									value={email}  
									ref={userRef} 
									autoComplete="off"
									onChange={(e) => setEmail(e.target.value)}
									required
									aria-invalid={validEmail ? "false" : "true"}
									aria-describedby="emailnote"
									onFocus= {() => setEmailFocus(true)}
									onBlur= {() => setEmailFocus(false)} 
							/>
							<p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Vous devez saisir un format d'adresse mail valide.
							</p>
						</div>
						<div>
							<label htmlFor="password">Mot de passe:
								<FontAwesomeIcon icon={faCheck} className={validPassword? "valid" : "hide"} />
								<FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"}/>
							</label>
							<input  type="password" 
									id="password" 
									value={password}  
									onChange={(e) =>setPassword(e.target.value)}
									required
									aria-invalid={validPassword ? "false" : "true"}
									aria-describedby="passwordnote"
									onFocus={() => setPasswordFocus(true)}
									onBlur={() => setPasswordFocus(false)}
							/>
							<p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
								<FontAwesomeIcon icon={faInfoCircle} />
								Le mot de passe doit contenur 8 caractères au minimum, 12 au maximum, incluant au moins une majuscule, un chiffre et un caractère spécial.   
							</p>
						</div>
				</fieldset>
				<fieldset>
					<legend>Guilde</legend>
					<p>Avez-vous une guilde?</p>
					<input type="radio" name="guild" value="haveGuild"/>J'ai déjà une guilde
     				<input type="radio" name="guild" value="notYet"/>Je n'ai pas encore de guilde
				</fieldset>
				<button disabled={!validEmail || !validPassword || !validLastname || !validFirstname ? true : false}>
						Créer mon compte
				</button>
				<p>
					<a href="/login">J'ai déjà un compte</a>
				</p>
			</form>
        </section>
		)}
		</>
    );
};

export default CreateUser;