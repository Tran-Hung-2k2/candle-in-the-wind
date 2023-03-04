import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="grid wide py-8">
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
