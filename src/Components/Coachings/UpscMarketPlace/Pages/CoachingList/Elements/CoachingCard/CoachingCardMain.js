import React, { useEffect, useState } from 'react'
import CoachingCard from './CoachingCard';
import CoachingButton from '../CoachingElementButton/CoachingButton';

function CoachingCardMain({instituteData}) {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

  
 

  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setNavScreenWidth(window.innerWidth);

    const handleResize = () => {
      setNavScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

  return (
    <div
     id='item_1'
      style={{
        display: "flex",
        flexDirection: "column",
        width: navscreenWidth < 1000 && "100%",
        backgroundColor: navscreenWidth < 1000 && "#E9EAF0",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%" }} className="mt-8 mb-12">
        <p className="ch-list-header">Explore Institutes</p>
        <p className="ch-list-subhead ">
          List of Institutes offering coaching for UPSC CSE{" "}
        </p>
        <div className="ch-list-card">
          {instituteData.map((item, index) => (
            <div key={index}>
              <CoachingCard 
              
               coachingData={item}
              />
            </div>
          ))}

          {/* 
          <CoachingCard />
          <CoachingCard />
          <CoachingCard />
          <CoachingCard /> */}
        </div>
        {/* <CoachingButton /> */}
      </div>
    </div>
  );
}

export default CoachingCardMain