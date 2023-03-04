import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth() {
  const userProfile = useSelector((state) => state.userProfile);
  const { isLoggedIn } = userProfile;
  const location = useLocation();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
export default RequireAuth;
