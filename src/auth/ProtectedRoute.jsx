import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../AUTH SERVICE/Logindetails';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
