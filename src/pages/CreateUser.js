import React from 'react';
import '../Styles/User.scss';

const CreateUser = () => {
	
	return (
		<section className="user">
			<h1 className="main-title">GQUEST</h1>
			<a href="/create-user-find-guild"><button> J'ai déjà une guilde</button></a>		
			<a href="/create-user-and-guild"><button> Je n'ai pas encore de guilde</button></a>	
			<p><a href="/">Retour à l'accueil</a></p>
		</section>
	);
};

export default CreateUser;