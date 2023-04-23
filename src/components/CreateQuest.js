/*Ce component est propore à l'administration*/
import{useState} from 'react';
import axios from '../api/axios';


const CREATEQUEST_URL = '/create-quest';
const CreateQuest = () => {
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [points, setPoints] = useState("");
    
    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response= await axios.post(CREATEQUEST_URL,
				JSON.stringify({description, duration, points}),
				{
					headers: {'Content-Type': 'application/json','Authorization': "Bearer " + localStorage.getItem('access') },
				});
				console.log(response?.data);
				console.log(JSON.stringify(response));
				setDescription('')
				setDuration('');
				setPoints('');
				
			} catch (err) {
				if(err.response?.status === 500) {
					console.log('Le serveur ne répond pas')
				} else {
                    console.log("La quête n'a pas pu être créée")
                }
		}
	}
    return (
        <section>
            <h2>Nouvelle quête</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">
                    Description de la quête:
                </label>
                <input
                    type="text" 
                    id="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                />
                <label htmlFor="duration">
                    Estimation du temps que va prendre la quête:
                </label>
                <input
                    type="number" 
                    id="duration" 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)} 
                    required
                />
                <label htmlFor="points">
                    Points d'expérience:
                </label>
                <input
                    type="number" 
                    id="points" 
                    value={points}
                    onChange={(e) => setPoints(e.target.value)} 
                    required
                />
                <button type='submit'>
                    Créer la quête
                </button>
            </form>
        </section>
    );
};

export default CreateQuest;