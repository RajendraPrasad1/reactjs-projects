import React from 'react'
import "./HeaderOption.css";


function HeaderOption(
    {Icon ,title, Avatar}
) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon'/>}
      {Avatar && <Avatar className='headerOptin_icon'/>}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
