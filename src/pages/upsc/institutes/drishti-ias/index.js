
import React, { useEffect } from "react";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
import DrishtiIASFee from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/DrishtiIASFee";

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
            Drishti IAS Fees, Fee Structure and Academic Counselling | Josh Talks
        </title>
        <meta
          name="description"
          content="Explore Drishti IAS fees, admissions, and fee structure. Honest review by a UPSC aspirant. Discover course details, discounts, counselling experience and more."
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <DrishtiIASFee />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
