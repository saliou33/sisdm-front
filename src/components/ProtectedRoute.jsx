import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const ROUTE_USER_ROLE = ['p', 'a', 'm'];

const ProtectedRoute = ({ guard }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  // authenticated user authorization to access routes
  const userTypeInPath = location.pathname.split('/')[1].toLowerCase();
  const userType = auth?.user?.role?.charAt(0)?.toLowerCase();
  const authorized = userTypeInPath === userType;

  useEffect(() => {}, [auth]);

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  // block access to public routes when user is connected
  if (guard) {
    return auth.logged && authorized ? (
      <Navigate to={'/' + userTypeInPath} replace />
    ) : (
      <Outlet />
    );
  }

  return auth.logged && authorized ? (
    <Outlet />
  ) : (
    <Navigate to="/p/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
