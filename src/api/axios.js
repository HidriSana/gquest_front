import axios from 'axios' ; //Définition d'internet: Axios est un client HTTP basé sur les promesses compatibles avec node.js et les navigateurs. Il est isomorphique (c’est à dire qu’il peut opérer dans le navigateur et dans node.js avec le même code). Côté serveur, il utilise le module natif http de node.js, et côté client (navigateur) il utilise les XMLHttpRequests.


//baseUrl va me permettre de ne pas avoir à réécrire à chaque fois lelocalhost et le port de l'api
export default axios.create({
    baseUrl: 'http://localhost:5000'
})