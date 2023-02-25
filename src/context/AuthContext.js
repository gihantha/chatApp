import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        //If you are listening in real time operation you should use cleanup function, otherwise it may cause some memory leaking.     },[]);

        return () => {
            unsub(); 
        }
    }, []);
    
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
    
}

