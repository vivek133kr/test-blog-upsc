import React, { useEffect } from "react";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import OptionalSubject from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/OptionalSubject";
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
        <title>Choosing the Right Optional Subject for UPSC | Josh Talks</title>
        <meta
          name="description"
          content="Explore a systematic six-step formula to select the best UPSC optional subject, based on your interests, background, and more. Make an informed choice for your UPSC preparation.
"
        />
       
      </Head>
      <UpscMarketPlaceNavbar />
      <OptionalSubject />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
