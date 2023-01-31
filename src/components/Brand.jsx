import React from 'react';
import Logo from '../assets/images/logo.svg';

const Brand = () => {
  return (
    <div class="flex flex-row items-center gap-2">
        <img src={Logo}/>
        <a class="text-xl font-bold text-yellow3">SISDM</a>
    </div>

  )
}

export default Brand;