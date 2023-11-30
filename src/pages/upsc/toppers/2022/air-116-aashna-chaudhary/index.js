import React, { useEffect } from "react";

import Head from "next/head";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import SurajTiwari from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/SurjaTiwari";
import GovindJaiswal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GovindJaiswal";
import GarimaLohia from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GarimaLohia";
import AashnaChaudhary from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/AashnaChaudhary";
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
        <title>Aashna Chaudhary's Inspiring IAS Journey</title>
        <meta
          name="description"
          content="Discover Aashna Chaudhary's incredible journey from a small town to UPSC success. Her resilience and determination shine through in this inspiring story."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <AashnaChaudhary />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
