import React from 'react';
import { useState } from "react";

const CreateUser = () => {
    const [lastname, setLastname] = useState("");
	const [firstname, setFirstname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const [message, setMessage] = useState("");
    
    const handleChange = (e) => {
		switch (e.target.id) {
			case 'lastname':
				setLastname(e.target.value);
				break;
				case 'firstname':
				setFirstname(e.target.value);
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
			lastname: lastname,
			firstname: firstname,
			email: email,
			password: password
		};
		
		let req = new Request("http://localhost:5000/createuser", 
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
					setLastname("");
					setFirstname("");
					setEmail("");
					setPassword("");
				} 
			})
	}
	
    
    return (
        <div>
            <form>
				<fieldset>
					<legend>Créez votre compte d'utilistaeur</legend>
					<div>
						<label htmlFor="lastname">Nom:</label>
						<input type="text" id="lastname" value={lastname}  onChange={handleChange} />
					</div>
					<div>
						<label htmlFor="firstname">Prénom:</label>
						<input type="text" id="firstname" value={firstname}  onChange={handleChange} />
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" value={email}  onChange={handleChange}/>
					</div>
					<div>
						<label htmlFor="password">Mot de passe:</label>
						<input type="password" id="password" value={password}  onChange={handleChange}/>
					</div>
					
				</fieldset>
				<fieldset>
					<legend>Guilde</legend>
					<p>Avez-vous une guilde?</p>
					<input type="radio" name="guild" value="haveGuild"/>J'ai déjà une guilde
     				<input type="radio" name="guild" value="notYet"/>Je n'ai pas encore de guilde
				</fieldset>
				<button className="btn" type="button" onClick={submit}>
						Créer mon compte
				</button>
				<p>
					<a href="/login">J'ai déjà un compte</a>
				</p>
			</form>
        </div>
    );
};

export default CreateUser;