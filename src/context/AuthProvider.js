import {createContext, useState} from 'react'; 


//Le contexte ici va m'aider à  garder en mémoire l'utilisateur authentifié, pas besoin d'utiliser des props dans ce cas précis.  C'est aussi comme ça   que ce context va être accessible par toutes les composantes de l'application
const AuthContext = createContext ({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
//Le context a besoin d'un provider
    return(
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;