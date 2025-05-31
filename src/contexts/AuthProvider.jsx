import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { AuthContext } from './Authcontext/Authcontext';

const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        return auth.signOut();
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log('User is signed in:', currentUser);
            } else {
                setUser(null);
                console.log('No user is signed in');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);


    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        logout,
    };



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;