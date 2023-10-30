import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (<div className="sidebar_recentItem">
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>)
  };
  
  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img src="https://static.vecteezy.com/system/resources/previews/001/984/861/original/abstract-blue-geometric-circles-overlapping-background-with-light-blue-free-vector.jpg" alt="" />
        <Avatar src={user.photoUrl}className='sidebar_avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2354</p>
        </div>
        <div className="sidebar_stat">
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2678</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')} 
        {recentItem('programing')}
        {recentItem('software engineering')}
        {recentItem('designer')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
