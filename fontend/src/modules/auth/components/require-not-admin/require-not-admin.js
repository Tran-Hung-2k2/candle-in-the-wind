import React from 'react';
import { useSelector } from 'react-redux';
import { ADMIN_ROLE } from '~/shared/constants/role';
import { Outlet } from 'react-router-dom';
import Unauthorize from '../unauthorize/unauthorize';

function RequireNotAdmin() {
  const userProfile = useSelector((state) => state.userProfile);
  const { role } = userProfile;

  const isNotAdmin = () => {
    return role !== ADMIN_ROLE;
  };

  return (
    <>
      {isNotAdmin() ? (
        <div className=" py-8">
          <div className="grid wide">
            <Outlet></Outlet>
          </div>
        </div>
      ) : (
        <Unauthorize />
      )}
    </>
  );
}

export default RequireNotAdmin;
