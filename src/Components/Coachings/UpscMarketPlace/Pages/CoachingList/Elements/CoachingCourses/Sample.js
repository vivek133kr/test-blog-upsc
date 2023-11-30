import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTheme } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Example() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
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
    <div >
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
      <Button variant="contained" onClick={prev}>
        Prev
      </Button>
      <Button variant="contained" onClick={next}>
        Next
      </Button>
    </div>
  );
}

function Item({ group }) {
  return (
    <Grid container spacing={2} style={{
      justifyContent: 'center',
    
    }}>
      {group.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          <Paper style={{

            height:"200px",
            border:"1px solid red"
          }}>
            <h2>{"Item"}</h2>
            <p>{item}</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Example;
