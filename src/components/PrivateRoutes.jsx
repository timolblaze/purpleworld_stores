import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate} from 'react-router-dom'

export default function PrivateRoutes({children}) {
    const {isAuthenticated} = useContext(AuthContext)
    
    if(!isAuthenticated){
        return <Navigate  to="/login" replace/>
    }
    return children;
}


// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);

//   // If the user is not authenticated, navigate to the login page
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   // If the user is authenticated, render the protected component
//   return children;
// };

// export default ProtectedRoute;