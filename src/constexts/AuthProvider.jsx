import React from 'react';
// import { AuthContext } from './AuthContext';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from 'firebase/auth';
// import { auth } from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/Firebase.init';
// import { auth } from '../firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userInfo = {
        createUser,
        signInUser
    };

    // ✅ এখানে Provider ব্যবহার করতে হবে
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
