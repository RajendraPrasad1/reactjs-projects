import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

  const newsArticle = (heading, subtitle) => (

    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
         <h4>{heading}</h4>
         <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("107 Medal in Asian Games ", "Top news - 9899 Reader")}
      {newsArticle("Coronavirus is Back in UK", "Top news - 899 Reader")}
      {newsArticle("India wins 6 in a Row ", "Top news - 10899 Reader")}
      {newsArticle("Tesla coming to India ", "Top news - 10379 Reader")}
      
    </div>

  );
  
}

export default Widgets;
