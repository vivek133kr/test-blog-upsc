import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTheme } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CoachingButton from "../../../CoachingInfo/Elements/CoachingCarouselButton";
import ToppersCard from "./ToppersCard";
import styles from "../../../../../../../styles/coachings/coachingTopperCarousel.module.css"
import ToppersButton from "./ToppersButton";
function TopperCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
    [4, "d"],
    [5, "f"],
    [6, "g"],
    [7, "h"],
    [8, "i"],
  ];
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  let itemsToShow;
  if (isExtraSmallScreen) {
    itemsToShow = 1;
  } else if (isSmallScreen) {
    itemsToShow = 1;
  } else if (isMediumScreen) {
    itemsToShow = 2;
  } else if (isLargeScreen) {
    itemsToShow = 3;
  } else {
    itemsToShow = 3;
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
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <div>
          <Carousel
            color
            className={styles["my-carousel"]}
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

        <ToppersButton prev={prev} next={next} />
      </div>
    </div>
  );
}

function Item({ group }) {
  return (
    <Grid
    
      container
      spacing={2}
      style={{
        justifyContent: "space-between",
     
      }}
    >
      {group.map((item, i) => (
        <Grid item xs={12} sm={3} md={4} lg={3.7} key={i} style={{
           
       
       
        }}>
          <Paper style={{
          
          }} >
            <ToppersCard       id={i} />
          
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default TopperCarousel;
