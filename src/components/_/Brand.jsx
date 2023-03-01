import React from 'react';
import Logo from '../assets/images/logo.svg';

const Brand = ({scale}) => {
  return (
    <div className={`flex flex-row items-center gap-2 scale-[${scale}]`}>
        <img src={Logo}/>
        <a className="text-xl font-bold text-yellow3">SISDM</a>
    </div>

  )
}

export default Brand;