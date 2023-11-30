
import React, { useEffect } from "react";

import MainBlog from "@/Components/Coachings/UpscMarketPlace/Pages/Blog";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
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
        <title>UPSC Books</title>
        
      </Head>
      <UpscMarketPlaceNavbar />
      <MainBlog />
      <UpscMarketPlaceFooter/>
    </>
  );
}

export default Coachings;
