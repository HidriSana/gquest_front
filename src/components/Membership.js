import {useState, useEffect} from 'react';
import axios from '../api/axios';
import decoder from '../config/TokenDecoder';
import headerConfig from '../config/Config';


const Membership = () => {
    const [data, setData] = useState([])

useEffect (() => {
    axios({method: 'get', url:'http://localhost:5000/find-request/'+ decoder.guildDecoder(), headers: {'Authorization': "Bearer " + localStorage.getItem('access')}})
    .then((res) => 
    setData(res.data)
    )
},[]);

const acceptRequest = async (demand) => {
    axios({method: 'put', url:'/accept-request', headers: {'Authorization': "Bearer " + localStorage.getItem('access')}, data: demand}) 
    .then(() => axios.get('http://localhost:5000/find-request/'+ decoder.guildDecoder(),headerConfig)
    .then((res) => setData(res.data)))
}
    return (
        <div>
            <h2>Demandes d'adhésion</h2>
            <div>
                {data
                .filter((demand)=> demand.status === 'Pending')
                .map((demand, index) => (
                    <div key={index}>
                        <p>{(demand.user.firstname)} {(demand.user.lastname)} vous a envoyé une demande d'adhésion</p>
                        <button onClick={(e) => acceptRequest(demand)}>Accepter la demande</button>
                        <button>Refuser la demande</button>
                    </div>
                ))}
                    
            </div>
        </div>
    );
};

export default Membership;