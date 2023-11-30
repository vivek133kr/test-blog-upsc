import React, { useEffect, useState } from "react";

import styles from "../../../../../../styles/coachings/coachingFeaturing.module.css"
function FeaturingComponent() {
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

  return (
    <div
      id="featuring"
      style={{
        marginBottom: "30px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div
        className="mt-10 "
        style={{
          width: "90%",
        }}
      >
        <p className={styles["featuringTitle"]}>
          Featuring Joshtalks by students and faculty of the institute
        </p>
      </div>

      <div
        style={{
          width: navscreenWidth > 800 ? "90%" : "100%",

          display: "flex",
          justifyContent: navscreenWidth > 800 && "center",
        }}
      >
        <div
          style={{
            overflow: navscreenWidth < 800 && "scroll",
            display: "flex",
            width: navscreenWidth < 800 ? "100%" : "fit-content",

            justifyContent: navscreenWidth > 800 ? "space-between" : "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: navscreenWidth < 800 && "space-between",
              width: "100%",
              gap: navscreenWidth > 800 ? "35px" : "10px",
              marginTop: navscreenWidth >800 && "60px",
              marginBottom: navscreenWidth < 800 ? "50px" : "60px",
              overflow: "scroll",
            }}
          >
            <iframe
              style={{
                height: navscreenWidth > 800 ? "230px" : "84px",
                marginLeft: navscreenWidth < 800 && "5%",
                width: navscreenWidth > 800 ? "407px" : "148px",
              }}
              src="https://www.youtube.com/embed/Td8tC5OAqvo?si=bbJPfhzQTzm50Vs1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              style={{
                height: navscreenWidth > 800 ? "230px" : "84px",

                width: navscreenWidth > 800 ? "407px" : "148px",
              }}
              src="https://www.youtube.com/embed/Td8tC5OAqvo?si=bbJPfhzQTzm50Vs1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              style={{
                height: navscreenWidth > 800 ? "230px" : "84px",
                marginRight: navscreenWidth < 800 && "5%",
                width: navscreenWidth > 800 ? "407px" : "148px",
              }}
              src="https://www.youtube.com/embed/Td8tC5OAqvo?si=bbJPfhzQTzm50Vs1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturingComponent;
