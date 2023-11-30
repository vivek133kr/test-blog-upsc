import React, { useEffect } from "react";

import Head from "next/head";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import SurajTiwari from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/SurjaTiwari";
import GovindJaiswal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GovindJaiswal";
import GarimaLohia from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GarimaLohia";
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
        <title>Garima Lohia: From a Small Town to UPSC Topper</title>
        <meta
          name="description"
          content="Explore the journey of Garima Lohia, who defied all odds to secure 2nd rank in the UPSC 2022. Discover her journey of determination and self-improvement."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <GarimaLohia />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
