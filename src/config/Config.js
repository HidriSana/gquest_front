//Mise du jeton en header, cette petite constante va être réutilisée dans axios , à chaque fois qu'on a besoin d'avoir un jeton pour accéder à une route
const headerConfig = {
    
    headers: {
       Authorization: "Bearer " + localStorage.getItem('access')
    }
 }

 export default headerConfig