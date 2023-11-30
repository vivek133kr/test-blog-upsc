import React, { useEffect } from "react";
import "@fontsource/poppins";

import CoachingListNav from "./CoachingListNav";
import CoachingCardMain from "./Elements/CoachingCard/CoachingCardMain";
import CoachingCourses from "./Elements/CoachingCourses/CoachingCourses";
import ScholarShip from "./Elements/ScholarshipSection/ScholarShip";
import UpscToppers from "./Elements/UPSCToppers/UpscToppers";
import TopperCarousel from "./Elements/UPSCToppers/TopperCarousel";
import StudyMaterial from "./Elements/StudyMaterial/StudyMaterial";
import CoursesCarousel from "../CoachingInfo/Elements/CoachingCourses/CoursesCarousel";
import SyllabusInfo from "./Elements/SyllabusScroll/SyllabusInfo";
function CoachingList({blogData, instituteData}) {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <CoachingListNav /> */}

      <CoachingCardMain instituteData={instituteData}/>

      <ScholarShip />
{/* <CoachingCourses/> */}
{/* <SyllabusInfo/> */}
      <StudyMaterial blogData={blogData}/>
    </div>
  );
}

export default CoachingList;
