import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import AdminPage from '~/modules/admin-page/admin-page';
import { ADMIN_ROLE } from '~/shared/constants/role';
import Unauthorize from '../unauthorize/unauthorize';

function RequireAdmin() {
  const userProfile = useSelector((state) => state.userProfile);
  const { isLoggedIn, role } = userProfile;
  const location = useLocation();

  const isAdmin = () => {
    return role === ADMIN_ROLE;
  };

  return isLoggedIn ? (
    isAdmin() ? (
      <AdminPage />
    ) : (
      <Unauthorize />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAdmin;
