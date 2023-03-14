import React from 'react';
import { useState } from "react";

const CreateUser = () => {
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
		switch (e.target.id) {
			case 'nom':
				setName(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			default:
		}
	}
    const submit = () => {
		let datas = {
			name: name,
			email: email,
			password: password
		};
		
		let req = new Request("http://localhost:3000/createuser", 
			{
				method: "POST",
				body: JSON.stringify(datas),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
			}
		});
		
		fetch(req)
			.then((response) => response.json())
			.then((response) => {
				if(response.message === ""){
					setName("");
					setEmail("");
					setPassword("");
				} 
			})
	}
	
    
	
    return (
        <div>
            <h1>Créer votre compte utilisateur</h1>
            <form>
				<div>
					<label htmlFor="nom">Votre nom</label>
					<input type="text" id="nom" value={name}  onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="email">Votre email</label>
					<input type="email" id="email" value={email}  onChange={handleChange}/>
				</div>
				<div>
					<label htmlFor="password">Votre mot de passe</label>
					<input type="password" id="password" value={password}  onChange={handleChange}/>
				</div>
				<button className="btn" type="button" onClick={submit}>
					Créer un compte
				</button>
			</form>
        </div>
    );
};

export default CreateUser;