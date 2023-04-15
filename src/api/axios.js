import axios from 'axios' ; //Axios pour la liaison avec la bdd. 


//baseUrl va me permettre de ne pas avoir à réécrire à chaque fois le localhost et le port de l'api
export default axios.create({
    baseURL: 'http://localhost:5000'
})