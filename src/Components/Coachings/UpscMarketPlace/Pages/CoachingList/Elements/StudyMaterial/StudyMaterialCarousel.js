import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTheme } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StudyMatCard from "./StudyMatCard";

import CoachingStudyMatButton from "../CoachingElementButton/CoachingTopDownButton";
import CoachingButton from "../../../CoachingInfo/Elements/CoachingCarouselButton";
import StudyMatButton from "./StudyMatButton";

function StudyMatCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  let itemsToShow;
  if (isExtraSmallScreen) {
    itemsToShow = 2;
  } else if (isSmallScreen) {
    itemsToShow = 2;
  } else if (isMediumScreen) {
    itemsToShow = 2;
  } else if (isLargeScreen) {
    itemsToShow = 3;
  } else {
    itemsToShow = 5;
  }

  // Split items into groups
  let itemGroups = [];
  for (let i = 0; i < items.length; i += itemsToShow) {
    itemGroups.push(items.slice(i, i + itemsToShow));
  }

  const next = () => {
    setCurrentSlide((currentSlide + 1) % itemGroups.length);
  };

  const prev = () => {
    setCurrentSlide((currentSlide - 1 + itemGroups.length) % itemGroups.length);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
        }}
      >
        <Carousel
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={() => null}
          renderArrowNext={() => null}
          showIndicators={false}
          infiniteLoop
          useKeyboardArrows
        >
          {itemGroups.map((group, i) => (
            <Item key={i} group={group} />
          ))}
        </Carousel>
      </div>
      <StudyMatButton prev={prev} next={next} />
    </div>
  );
}

function Item({ group }) {
  return (
    <Grid
      container
      spacing={2}
      style={{
        justifyContent: "space-around",
      }}
    >
      {group.map((item, i) => (
        <Grid item xs={6} sm={2} md={4} lg={2} key={i}>
          <Paper
            style={{
             
      
            }}
          >
            <StudyMatCard />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default StudyMatCarousel;
