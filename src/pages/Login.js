import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';	
import {useNavigate} from 'react-router-dom';

const LOGIN_URL = '/login';

const Login = () => {
	//Si l'utilisateur se loggue  avec succès, on va setAuth et le stocker dans le contexte global. 
	const {setAuth} = useContext(AuthContext)
	//le useRef pourra nous garder les valeurs modifiables sous la main et dans le temps. Ici, je vais surotut l'utiliser pour le focus 
	const userRef = useRef(); 
	const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [error, setError] = useState('');
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
		try {
			const response = await axios.post(LOGIN_URL, 
				JSON.stringify({email, password}),
				{
					headers: {'Content-Type': 'application/json' },
				})
			console.log(JSON.stringify(response?.data));
			const accessToken = response?.data?.access;
			const storedToken = localStorage.setItem('access', accessToken)
			setAuth({email, password, storedToken});
			setEmail('');
			setPassword('');
			setSuccess(true);
			navigate('/tableau-de-bord'); // Définition de la page vers laquelle va être redirigé l'utilisateur une fois authentifié avec succès
		} catch (error) {
			if (!error?.response) {
                setError('Le serveur ne répond pas');
            } else if (error.response?.status === 401) {
                setError('Vous devez saisir le login et le mot de passe pour vous connecter');
            } else if (error.response?.status === 400) {
                setError('Non authorisé');
            } else {
                setError("L'authentification a échoué");
            }
            errRef.current.focus(); //Il faut que le lecteur d'écran puisse lire le message d'erreur s'il y en a 
		}

		
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
				<p ref={errRef} className={error ? "error" : "offscreen"} aria-live="assertive">{error}</p>
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
					<p>
						<a href="/">Retour à l'accueil</a>
					</p>
				</form>
			</section>
			)}
		</>
    );
}

export default Login;