import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function Feed() {

  const[posts,setPosts] = useState([]);
  const[input,setInput] = useState(' ');

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id:doc.id,
          data:doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Rajendra prasad",
      description:"This is a test",
      message:input,
      photoUrl:" ",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };


  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>  
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>send</button>
                </form>
            </div>
            <div className="feed_inputOption">
                <InputOption Icon={ImageIcon} title="Photo"  />
                <InputOption Icon={SubscriptionsIcon} title="Video" />
                <InputOption Icon={EventNoteIcon} title="Event" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" />
            </div> 
        </div>

      {/* Post */}
      {posts.map(({id, data: { name, description, message, photoUrl  }}) => (
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
        
      ))}
      
    </div>
  )
}

export default Feed
