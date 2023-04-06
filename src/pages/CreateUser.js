import React from 'react';
import Navigation from '../components/Navigation';

const CreateUser = () => {

	return (
		<section>
			<Navigation/>
			<a href="/create-user-find-guild"><button> J'ai déjà une guilde</button></a>		
			<a href="/create-user-and-guild"><button> Je n'ai pas encore de guilde</button></a>	
		</section>
	);
};

export default CreateUser;