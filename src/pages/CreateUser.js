import React from 'react';
import '../Styles/User.scss';
import { Link } from 'react-router-dom';

const CreateUser = () => {
	
	return (
		<section className="user">
			<h1 className="main-title">GQUEST</h1>
			<Link to="/create-user-find-guild"><button> J'ai déjà une guilde</button></Link>		
			<Link to="/create-user-and-guild"><button> Je n'ai pas encore de guilde</button></Link>	
			<p><Link to="/">Retour à l'accueil</Link></p>
		</section>
	);
};

export default CreateUser;