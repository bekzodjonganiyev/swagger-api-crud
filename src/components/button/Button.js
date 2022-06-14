import React from 'react'

const Button = ({onClick, onSubmit, type, text, ref}) => {
  return (
    <button className={`btn `} onSubmit={onSubmit} type={type} onClick={onClick} ref={ref}>{text}</button>
  )
}

export default Button