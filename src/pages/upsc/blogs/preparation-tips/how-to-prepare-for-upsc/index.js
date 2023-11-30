
import React, { useEffect } from "react";

import MainBlog from "@/Components/Coachings/UpscMarketPlace/Pages/Blog";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import HowToPrepare from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/HowToPrepare";
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
        <title>
            How to Prepare for UPSC | Josh Talks
        </title>
        <meta
          name="description"
          content="Your ultimate guide on how to prepare for UPSC. Expert tips, strategies, study schedules, UPSC syllabus, and essential resources for successful UPSC preparation."
        />
       
      </Head>
      <UpscMarketPlaceNavbar />
      <HowToPrepare />
      <UpscMarketPlaceFooter/>
    </>
  );
}

export default Coachings;
