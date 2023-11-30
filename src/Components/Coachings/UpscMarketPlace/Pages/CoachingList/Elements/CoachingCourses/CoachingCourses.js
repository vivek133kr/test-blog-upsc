import React from "react";
import CourseCard from "./CourseCard";
import CoachingButton from "../CoachingElementButton/CoachingButton";
import ProductCarousel from "./Sample";
import Example from "./Sample";
import CoursesCarousel from "../../../CoachingInfo/Elements/CoachingCourses/CoursesCarousel";
function CoachingCourses() {
  return (
    <div
      style={{
        width: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        background: "var(--grey-grey-50, #F5F7FA)",
      }}
    >
      <div
        style={{
          width: "90%",
        }}
        className="mt-16 mb-2"
      >
        <p className="ch-list-header">Explore Courses</p>
        <p className={`ch-list-subhead mt-2 mb-16`}>
          Choose from various courses offered by institutes{" "}
        </p>

        <CoursesCarousel />
      </div>
    </div>
  );
}

export default CoachingCourses;
