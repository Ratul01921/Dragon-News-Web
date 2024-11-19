import React, { createContext,  useEffect,  useState } from 'react';
import { app } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user);
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const logOut = () => {
       return signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        signInUser,
    };
    return (
        
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
        

};

export default AuthProvider;