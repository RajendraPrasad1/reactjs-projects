import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {  useDispatch,useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import  Widgets  from './Widgets';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      }
      else {
        // user logged out 
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
    
      <Header />

      {!user ? (<Login />) :(
        
        <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
       </div>

      )}

       
        
    </div>
  );
}

export default App;
