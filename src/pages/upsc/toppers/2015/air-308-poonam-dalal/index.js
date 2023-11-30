import React, { useEffect } from "react";

import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import ArpitGupta from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/ArpitGupta";
import RitikaJindal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/RitikaJindal";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
import PoonamDalal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/PoonamDalal";

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
        <title>Inspiring Journey of Poonam Dalal Dahiya | IPS Officer</title>
        <meta
          name="description"
          content=" Discover how Poonam's determination led to her success as an IPS officer. Tips for UPSC aspirants included. Learn from her remarkable story."
        />
        {/*
        <meta
          name="keywords"
          content="answer writing for UPSC, UPSC answer writing, UPSC mains questions, essay writing, question types, UPSC success, competitive exams, effective answer writing, UPSC keywords"
        /> */}
      </Head>
      <UpscMarketPlaceNavbar />
      <PoonamDalal />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
