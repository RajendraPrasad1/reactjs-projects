import React from 'react'
import "./HeaderOption.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import { Avatar } from '@mui/material';



function HeaderOption({Icon ,title,avatar,onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_icon'/>}
      {avatar &&(
        <Avatar className='headerOptin_icon'>{user?.email[0]}
        </Avatar>  
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
