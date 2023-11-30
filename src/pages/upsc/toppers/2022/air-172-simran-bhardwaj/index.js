import React, { useEffect } from "react";

import Head from "next/head";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import SimranBhardwaj from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/ToppersInterview/SimranBhardwaj";
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
          Simran Bhardwaj’s UPSC preparation journey: Dedication, Determination
          and Dreams.
        </title>
        <meta
          name="description"
          content="Discover Simran Bhardwaj's remarkable journey from a small village in Haryana to becoming an IPS officer. Learn valuable lessons on dedication and focus from her UPSC preparation. Find inspiration in her story."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <SimranBhardwaj />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
