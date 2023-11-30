import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTheme } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CarouselCard from "./CarouselCard";

import styles from "../../../../../../styles/coachings/sampleCarousel.module.css"
import CoachingButton from "./CoachingCarouselButton";

function SimpleCarousel() {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setNavScreenWidth(window.innerWidth);

    const handleResize = () => {
      setNavScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after component mount

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
    itemsToShow = 4;
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
          width: "90%",
        }}
      >
        <div>
          <Carousel
            color
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

        <CoachingButton prev={prev} next={next} />
      </div>
    </div>
  );
}

function Item({ group }) {
  const [navscreenWidth, setNavScreenWidth] = useState(0);

  useEffect(() => {
    // Update screenWidth with the actual window width after component has mounted
    setNavScreenWidth(window.innerWidth);

    const handleResize = () => {
      setNavScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty
  return (
    <Grid
      container
      spacing={2}
      style={{
        justifyContent: "space-between",
      }}
    >
      {group.map((item, i) => (
        <Grid item xs={6} sm={6} md={4} lg={3} key={i}>
          <Paper style={{}}>
            <CarouselCard id={i} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}


export default SimpleCarousel;
