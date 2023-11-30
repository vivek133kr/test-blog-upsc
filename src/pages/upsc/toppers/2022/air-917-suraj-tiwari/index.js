import React, { useEffect } from "react";

import Head from "next/head";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import SurajTiwari from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/SurjaTiwari";
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
        <title>Suraj Tiwari’s IAS Prep</title>
        <meta
          name="description"
          content="Explore Suraj Kumar’s IAS Prep. Discover his journey of dedication and resilience as he cleared the UPSC Civil Services Exam despite unimaginable challenges."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <SurajTiwari />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
