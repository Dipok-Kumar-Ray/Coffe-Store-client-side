import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;