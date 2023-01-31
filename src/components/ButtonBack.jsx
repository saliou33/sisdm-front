import React from 'react';
import LeftArrow from '../assets/images/left-arrow.svg';

const ButtonBack = () => {
  return (
    <button class="absolute top-[20px] left-[20px] btn-back" >
      <img src={LeftArrow} alt="Left Arrow"/>
    </button>
  )
}

export default ButtonBack