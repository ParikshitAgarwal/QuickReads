import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './hooks';


const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/Signin" replace />;
};

export default PrivateRoute;