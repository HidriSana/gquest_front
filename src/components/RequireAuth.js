/*Conditions de protection des routes, voir app.js  pour en voir l'utilisation. Les fonctions mises en place vont venir envelopper la route au besoin , suivant si l'utilisateur est loggé ou pas, et s'il a besoin d'être admin ou pas. */

import {useLocation, Navigate, Outlet} from "react-router-dom";
import decoder from "../config/TokenDecoder";

/*L'utilisateur doit être loggé , la fourniture d'une adresse  email en est la preuve*/
const RequireAuth = () => {
    let auth = decoder.userDecoder()
    const location = useLocation(); 
    if (auth === undefined){
        return (<Navigate to = "/" state= {{from: location}} replace/>)
    } else 
    return (        
        auth?.userId && auth?.guild
        ? <Outlet /> //Cet Outlet est différent de celui qui est dans le Layout Component. Il va représenter tous les enfants  qui sont dans le RequireAuth qui va protéger tous les enfants qui sont dedans
        :!auth.guild
            ? <Navigate to = "/pending-request" state= {{from: location}} replace/>
                : <Navigate to = "/login" state= {{from: location}} replace/> //Ceci va renvoyer l'utilisateur non loggé  à la page de LOGIN: Vulgairement, cela va le téléporter de là où il se trouve dans l'APP vers l'endroit qu'il n'a pas choisi , ici le login
    );
}

/*L'utilisateur doit être admin. Pour rappel , pour le moment, mon rôle admin est un simple booléen. On va juste vérifier si admin est true.*/

const RequireAdmin = () => {
    let auth = decoder.userDecoder()
    const location = useLocation(); 
    if (auth === undefined){
        return (<Navigate to = "/" state= {{from: location}} replace/>)
    } else 
    return (
        auth?.admin
        ? <Outlet /> 
        : <Navigate to = "/unauthorized" state = {{ from: location }} replace /> /*Encore une redirection forcée vers la page unauthorized*/ 
    );
}

const authValidators = {
    RequireAuth,
    RequireAdmin
}

export default authValidators;