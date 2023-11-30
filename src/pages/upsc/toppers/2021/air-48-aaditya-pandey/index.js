import React, { useEffect } from "react";

import Head from "next/head";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import SurajTiwari from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/SurjaTiwari";
import GovindJaiswal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GovindJaiswal";
import GarimaLohia from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GarimaLohia";
import AashnaChaudhary from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/AashnaChaudhary";
import AadityaPandey from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/AadityaPandey";
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
        <title>Aaditya Pandey's UPSC Journey</title>
        <meta
          name="description"
          content="Discover Aaditya Pandey's incredible transformation from a mischievous kid to the 48th IAS ranker. A story of determination and success."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <AadityaPandey />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
