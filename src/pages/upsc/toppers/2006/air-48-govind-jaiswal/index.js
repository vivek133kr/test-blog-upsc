import React, { useEffect } from "react";

import Head from "next/head";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import SurajTiwari from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/SurjaTiwari";
import GovindJaiswal from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/GovindJaiswal";
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
        <title>Govind Jaiswal’s Inspirational UPSC Journey</title>
        <meta
          name="description"
          content="Discover the inspiring journey of Govind Jaiswal, from the streets of Varanasi to achieving All India Rank 48 in the UPSC exam. His story is a testament to dedication, and the power of dreams."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <GovindJaiswal />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
