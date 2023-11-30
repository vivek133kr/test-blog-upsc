import React, { useEffect } from "react";

import MainBlog from "@/Components/Coachings/UpscMarketPlace/Pages/Blog";
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import Head from "next/head";
import HowToPrepare from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/HowToPrepare";
import AnswerWriting from "@/Components/Coachings/UpscMarketPlace/Pages/Blog/PreparationTips/AnswerWriting";
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
        <title>Best Tips on Answer Writing for UPSC | Josh Talks</title>
        <meta
          name="description"
          content="Learn how to excel in answer writing for UPSC with this comprehensive guide. Understand different question types, improve your essay writing, and effectively tackle various UPSC mains questions. Ace your UPSC preparation with expert insights."
        />
       
      </Head>
      <UpscMarketPlaceNavbar />
      
      <AnswerWriting />
      <UpscMarketPlaceFooter/>
    </>
  );
}

export default Coachings;
