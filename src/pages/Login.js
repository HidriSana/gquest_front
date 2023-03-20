import React from 'react';
import {useState} from 'react';
//import { useDispatch } from 'react-redux';
//const axios = require('axios'); // Ceci est une définiton : Axios est un client HTTP basé sur les promesses compatible avec node.js et les navigateurs. Il est isomorphique (c’est à dire qu’il peut opérer dans le navigateur et dans node.js avec le même code).

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	//const [message, setMessage] = useState("");

	//axios.get('http:localhost:5000/login')



    const changeEmail = (e) => {
		setEmail (e.target.id) 
	}
	const changePassword = (e) => {
		setPassword (e.target.id) 
	}
    const handleSubmit = (e) => {
        e.preventDefault();
	}
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
				<div>
					<input value={email} onChange={changeEmail} type="email" placeholder="Email" id="email"/>
				</div>
				<div>
					<input value={password} onChange={changePassword}type="text" placeholder="Mot de passe" id="password"/>
				</div>
				<button className="btn" type="button" >Connexion</button>
				<p>
					<a href="/createuser">Je veux m'inscrire</a>
				</p>
				
			</form>
        </div>
    );
};

export default Login;