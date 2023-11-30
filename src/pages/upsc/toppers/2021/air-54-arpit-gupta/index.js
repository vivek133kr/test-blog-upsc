import React, { useEffect } from "react";

import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import ArpitGupta from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/ArpitGupta";
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
        <title>Arpit Gupta: IAS Success & UPSC Preparation Journey</title>
        <meta
          name="description"
          content="Discover how Arpit Gupta's self-realization and unique approach led to his IAS success. Learn the power of determination and resource management for your UPSC journey."
        />
        {/*
        <meta
          name="keywords"
          content="answer writing for UPSC, UPSC answer writing, UPSC mains questions, essay writing, question types, UPSC success, competitive exams, effective answer writing, UPSC keywords"
        /> */}
      </Head>
      <UpscMarketPlaceNavbar />
      <ArpitGupta />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
