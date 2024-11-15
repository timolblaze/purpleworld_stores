import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate} from 'react-router-dom'

export default function PrivateRoutes({children}) {
    // Retrieving the value of the isAuthenticated state from the AuthContext using the useContext React Hook 
    const {isAuthenticated} = useContext(AuthContext)
    
    // checking if user is Logged in via the isAuthenticated state to redirect user to the Login page if user is not 
    if(!isAuthenticated){
        return <Navigate  to="/login" replace/>
    }
    return children;
}