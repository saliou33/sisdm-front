import React from 'react'

const Button = ({text, ...props}) => {
return (
    <div className={`${props.px ?? 'px-4'} ${props.py ?? 'py-3'} ${props.color ?? 'text-neutral10'} text-xl ${props.bg || 'bg-yellow3'} rounded-lg shadow-${props.shadow || 'sm'} w-fit hover:${props.hover ?? ''} hover:cursor-pointer`}>
      {text}
    </div>
  )
}

export default Button