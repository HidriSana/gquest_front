import {useEffect, useState} from 'react';
import axios from 'axios';
import headerConfig from '../config/Config';

const Quests = () => {

const [data, setData] = useState([])

useEffect (() => {
    axios
    .get('http://localhost:5000/quests',headerConfig)
    .then((res) => setData(res.data.data))
},[]);

const beginQuest = async (quest) => {
    /*headerConfig ne fonctionne pas dans le put, pour des raisons que j'ignore encore, j'ai du resaisir toute la partie headers en dur pour que cela refonctionne*/
    axios({method: 'put', url:'http://localhost:5000/begin-quest/'+quest.id, headers: {'Authorization': "Bearer " + localStorage.getItem('access')}, data: quest}) 
    .then(() => axios.get('http://localhost:5000/quests',headerConfig)
    .then((res) => setData(res.data.data)))
}

const finishQuest = async (quest) => {
    axios({method: 'put', url:'http://localhost:5000/finish-quest/'+quest.id, headers: {'Authorization': "Bearer " + localStorage.getItem('access')}, data: quest}) 
    .then(() => axios.get('http://localhost:5000/quests',headerConfig)
    .then((res) => setData(res.data.data)))
}
    return (
        <section>
           <div>
                <h2>Quêtes en attente</h2>
                <div>
                    {data
                    .filter((quest)=> quest.status === 'en_attente')
                    .map((quest, index) => (
                        <div>
                            <p key={index}>{quest.description}</p>
                            <button onClick={(e) => beginQuest(quest)} >S'assigner la quête</button>
                        </div>
                    ))}
                    
                </div>
           </div>  
           <div>
                <h2>Quêtes en cours</h2>
                <div>
                    {data
                    .filter((quest)=> quest.status === 'en_cours')
                    .map((quest, index) => (
                        <div>
                            <p key={index}>{quest.description}</p>
                            <button onClick={(e) => finishQuest(quest)} >J'ai fini!</button>
                        </div>
                    ))}
                </div>
           </div>  
           <div>
                <h2>Quêtes terminées</h2>
                <div>
                    {data
                    .filter((quest)=> quest.status === 'terminée')
                    .map((quest, index) => (

                        <p key={index}>{quest.description}</p>
                    ))}
                </div>
           </div>  
        </section>
    );
};

export default Quests;