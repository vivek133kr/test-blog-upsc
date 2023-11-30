import React, { useEffect } from "react";

import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
import Head from "next/head";
import ArpitGupta from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/ArpitGupta";
import PawanKumar from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/PawanKumar";

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
        <title>Pawan Kumar Kumawat: Triumph in UPSC Preparation</title>
        <meta
          name="description"
          content="Explore Pawan Kumar Kumawat's remarkable journey from a remote village to achieving UPSC success. Discover his strategies for overcoming challenges and achieving dreams."
        />
        {/*
        <meta
          name="keywords"
          content="answer writing for UPSC, UPSC answer writing, UPSC mains questions, essay writing, question types, UPSC success, competitive exams, effective answer writing, UPSC keywords"
        /> */}
      </Head>
      <UpscMarketPlaceNavbar />
      <PawanKumar />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
