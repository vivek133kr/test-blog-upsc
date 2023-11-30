import CoachingList from "@/Components/Coachings/UpscMarketPlace/Pages/CoachingList/CoachingList";
import React, { useEffect } from "react";
import styles from "../../styles/coachings/coachingCard.module.css"
import UpscMarketPlaceNavbar from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import UpscMarketPlaceFooter from "@/Components/Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
import data from "../../data/InstituteData.json"

import blogData from "../../data/BlogsData.json"
import Head from "next/head";
function Coachings() {
  useEffect(() => {
    document.body.style.backgroundColor = "#F5F7FA";

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []); // Empty dependency array to run the effect only once

  console.log(blogData, " line 17")

  return (
      <>
        <Head>
          <title>UPSC Homepage | Josh Talks</title>
          <meta
              name="description"
              content="Discover Josh Talks scholarships for UPSC preparation and access comprehensive information on top institutes like KSG and Vajiram. Find institute fees, faculty details, and courses offered. Get UPSC preparation tips and insights from toppers."
          />{" "}
        </Head>
      <UpscMarketPlaceNavbar />
      <CoachingList blogData={blogData.blogData} instituteData={data.data}/>
      <UpscMarketPlaceFooter />
    </>
  );
}

export default Coachings;
