import {useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation(); 
    console.log(auth)
    
    return (
        auth?.email
        ? <Outlet /> //Cet Outlet est différent de celui qui est dans le Layout Component. Il va représenter tous les enfants  qui sont dans le RequireAuth qui va protéger tous les enfants qui sont dedans
        : <Navigate to = "/login" state= {{from: location}} replace/> //Ceci va renvoyer l'utilisateur non loggé  à la page de LOGIN: Vulgairement, cela va le téléporter de là où il se trouve dans l'APP vers l'endroit qu'il n'a pas choisi , ici le login
    );
}

const RequireAdmin = () => {
    const { auth } = useAuth();
    const location = useLocation(); 
    console.log(auth)
    
    return (
        auth?.admin
        ? <Outlet /> 
        : <Navigate to = "/unauthorized" state = {{ from: location }} replace />
    );
}

const authValidators = {
    RequireAuth,
    RequireAdmin
}

export default authValidators;