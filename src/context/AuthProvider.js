import {createContext, useState} from 'react'; 


//Le contexte ici va m'aider à  garder en mémoire l'utilisateur authentifié, pas besoin nd'utiliser des props dans ce cas précis.  
const AuthContext = createContext ({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    return(
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;