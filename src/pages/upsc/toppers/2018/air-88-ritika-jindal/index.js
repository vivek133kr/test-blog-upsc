import React, { useEffect } from "react";

import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import ArpitGupta from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/ArpitGupta";
import RitikaJindal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/RitikaJindal";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";

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
        <title>Ritika Jindal: Young IAS Officer's Inspiring Journey</title>
        <meta
          name="description"
          content="Discover Ritika Jindal's extraordinary journey from a small town to becoming the youngest IAS officer in 2019. Her unwavering determination and academic excellence are a beacon of inspiration."
        />
        {/*
        <meta
          name="keywords"
          content="answer writing for UPSC, UPSC answer writing, UPSC mains questions, essay writing, question types, UPSC success, competitive exams, effective answer writing, UPSC keywords"
        /> */}
      </Head>
      <UpscMarketPlaceNavbar />
      <RitikaJindal />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
