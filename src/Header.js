import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as reactRedux from 'react-redux';
import { logout } from './features/counter/userSlice';
import { auth } from './Firebase';

function header() {
  const dispatch = reactRedux.useDispatch()

  const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
  }
  return (
    <div className='header'>
        
      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header_search">
            <SearchIcon />
            <input placeholder="search" type="text" />
        </div>


      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messages"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp}/>
        
      </div>
    </div>
  )
}

export default header
