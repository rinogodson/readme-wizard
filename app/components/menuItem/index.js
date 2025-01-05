import React from 'react'
import './style.css'

function MenuItemChild({text, children}) {
  return (
    <button className='menuItemChild'>
        {children}
      <p>{text}</p>
    </button>
  )
}

export default MenuItemChild
