import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/reducers/auth';

const Sidebar = ({ links }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex relative flex-col basis-2/12 sm:3/12 max-w-[14rem] shadom-sm rounded-lg px-3 py-4 bg-yellow3 border-b-2 border-t-2 shadow-lg border-primary5 opacity-90 gap-4 brightness-125">
      {links.map((e, k) => (
        <a
          key={k}
          href={e.url}
          className="hover:text-primary5 cursor-pointer text-black"
        >
          {e.name}
        </a>
      ))}

      <button
        className="absolute bottom-5"
        onClick={() => dispatch(logoutUser())}
      >
        Deconnexion
      </button>
    </div>
  );
};

export default Sidebar;
