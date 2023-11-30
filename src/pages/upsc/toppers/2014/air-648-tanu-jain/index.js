import React, { useEffect } from "react";

import Head from "next/head";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import SurajTiwari from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/SurjaTiwari";
import GovindJaiswal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GovindJaiswal";
import GarimaLohia from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GarimaLohia";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
import TanuJain from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/TanuJain";

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
        <title>IAS Dr Tanu Jain’s UPSC preparation Journey | Josh Talks</title>
        <meta
          name="description"
          content="Explore the inspiring UPSC preparation journey of Dr Tanu Jain, former IAS officer. Learn valuable lessons in determination, overcoming setbacks, and embracing personal growth."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <TanuJain />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
