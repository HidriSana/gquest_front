import React from 'react';
import {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
		switch (e.target.id) {
			case 'email':
				setEmail(e.target.value);
				break;
				case 'password':
				setPassword(e.target.value);
				break;
			default:
		}
	}
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} >
				<div>
					<input value={email} onChange={handleChange} type="email" placeholder="Email" id="email"/>
				</div>
				<div>
					<input value={password} onChange={handleChange}type="text" placeholder="Mot de passe" id="password"/>
				</div>
				<button className="btn" type="button" >Connexion</button>
			</form>
        </div>
    );
};

export default Login;