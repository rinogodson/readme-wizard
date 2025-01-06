import React from 'react'
import './style.css'
function SmallBt({children, clickEvent}) {
  return (
    <button onClick={clickEvent} className='smallBt'>
      {children}
    </button>
  )
}

export default SmallBt
