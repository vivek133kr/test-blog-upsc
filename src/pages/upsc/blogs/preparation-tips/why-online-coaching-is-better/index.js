import React, { useEffect } from "react";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
import TopOnlineCoaching from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/TopOnlineCoaching";
import OfflineVsOnlineCoaching from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/OnlinevsOfflineCoaching";

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
          10 Reasons Why UPSC Online Coaching is Better than Offline | Josh
          Talks{" "}
        </title>
        <meta
          name="description"
          content="Discover why UPSC online coaching triumphs over traditional classes in 2023. From flexibility to community support, explore the benefits that make online coaching the smart choice.
"
        />
      </Head>
      <UpscMarketPlaceNavbar />
      <OfflineVsOnlineCoaching />
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
