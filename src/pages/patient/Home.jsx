import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../redux/reducers/patient';
import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo';
import Constants from '../../utils/constants';

const Home = ({ dispatch, patients }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-2 px-3 py-4 shadow-sm rounded-lg m-1 justify-between bg-primary5 ">
        <Logo />
      </div>

      <div className="flex flex-1 gap-3 py-3 px-1">
        <div className="flex relative flex-col basis-2/12 sm:3/12 max-w-[14rem] shadom-sm rounded-lg px-3 py-4 bg-yellow3 border-b-2 border-t-2 shadow-lg border-primary5 opacity-90 gap-4 brightness-125">
          {Constants.PATIENT_LINKS.map((e, k) => (
            <a
              key={k}
              href={e.url}
              className="hover:text-primary5 cursor-pointer text-black"
            >
              {e.name}
            </a>
          ))}

          <button className="absolute bottom-5">Deconnexion</button>
        </div>

        <div className="flex-1 bg-white shadow-sm rounded-lg px-3 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
