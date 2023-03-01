import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePatient from './pages/patient/Home';
import HomeMedecin from './pages/medecin/Home';
import HomeAdmin from './pages/admin/Home';
import RvPatient from './pages/patient/sections/Rv';
import DmPatient from './pages/patient/sections/Dm';

import Constants from './utils/constants';

const App = () => {
  function mapToRoute(arr, Elm) {
    return arr.map((e, k) => (
      <Route key={k} path={e.path} element={<Elm {...e} />} exact />
    ));
  }

  return (
    <Routes>
      {mapToRoute(Constants.LOGIN_ROUTES, Login)}
      {mapToRoute(Constants.SIGNUP_ROUTES, Signup)}
      <Route path="/p/" element={<HomePatient />}>
        <Route index element={<DmPatient />} />
        <Route path="dm" element={<DmPatient />} />
        <Route path="rv" element={<RvPatient />} />
      </Route>

      <Route path="/m/" element={<HomeMedecin />} />
      <Route path="/a/" element={<HomeAdmin />} />
    </Routes>
  );
};

export default App;
