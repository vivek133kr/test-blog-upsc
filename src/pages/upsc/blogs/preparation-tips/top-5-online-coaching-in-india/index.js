
import React, { useEffect } from "react";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
import TopOnlineCoaching from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/TopOnlineCoaching";

function Coachings() {
  useEffect(() => {
    document.body.style.backgroundColor = "#FCFCFC";

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []); // Empty dependency array to run the effect only once
  return (
    <>
      <Head>
        <title>
          Top 5 UPSC Online Coaching Platforms in India | Josh Talks
        </title>
        <meta
          name="description"
          content="Explore the top 5 UPSC online coaching platforms in India. Get insights and expert recommendations to kickstart your UPSC preparation journey with Josh Talks."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <TopOnlineCoaching />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
