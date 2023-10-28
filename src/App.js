import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
    
      <Header />

      {!user ? (<Login />) :(
        
        <div className="app_body">
        <Sidebar />
        <Feed />
        {/* widgets*/}
       </div>

      )}

       
        
    </div>
  );
}

export default App;
