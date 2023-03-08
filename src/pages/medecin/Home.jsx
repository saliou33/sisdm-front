import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import Constants from '../../utils/constants';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-2 px-3 py-4 shadow-sm rounded-lg m-1 justify-between bg-primary5 ">
        <Logo />
      </div>

      <div className="flex flex-1 gap-3 py-3 px-1">
        <Sidebar links={Constants.MEDECIN_LINKS} />

        <div className="flex-1 bg-white shadow-sm rounded-lg px-3 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
