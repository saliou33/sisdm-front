import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const ROUTE_USER_ROLE = ['p', 'a', 'm'];

const ProtectedRoute = ({ guard }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let location = useLocation();

  const userTypeInPath = location.pathname.split('/')[1];
  //console.log(userTypeInPath);

  useEffect(() => {}, [auth]);

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  if (guard) {
    return auth.logged && <Navigate to="/p/rv" replace />;
  }

  return !auth.logged ? (
    <Navigate to="/p/login" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
