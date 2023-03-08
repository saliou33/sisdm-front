import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const ROUTE_USER_ROLE = ['p', 'a', 'm'];

const ProtectedRoute = ({ guard }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  let location = useLocation();

  const userTypeInPath = location.pathname.split('/')[1];
  const userType = auth?.user?.role?.charAt(0)?.toLowerCase();
  const authorized = userTypeInPath === userType;

  useEffect(() => {}, [auth]);

  if (auth.loading) {
    return <div>Loading...</div>;
  }

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
