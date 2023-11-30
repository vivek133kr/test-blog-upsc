import React, { useEffect, useState } from "react";
import JoshLogo from "../Assets/joshtalksupsc.png";
import "@fontsource/open-sans";
import Image from "next/image";
import home from "../Assets/home.png"
import { slide as Menu } from "react-burger-menu";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import newstyles from "../../../../styles/coachings/coachingMarketplaceNav/marketPlaceNavbar.module.css";
import CoachingListNav from "./CoachingList/CoachingListNav";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const CloseButton = ({ closeMenu }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    <Image
      src={JoshLogo}
      style={{
        width: "40px",
        height: "25.946px",
      }}
      className="mr-3"
      alt="Flowbite Logo"
    />
    <div style={{ width: "fit-content", height: "20px" }} onClick={closeMenu}>
      <CloseIcon
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    </div>
  </div>
);

const options = ["Privacy Policy", "Terms & Condition", "Finance Form"];
const defaultOption = options[0];
function UpscMarketPlaceNavbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [navscreenWidth, setNavScreenWidth] = useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const _onSelect = (option) => {
    setSelectedOption(option);
    console.log("You selected ", option.label);
  };
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: "#FFF",

    width: "90%",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999, // Adjust as needed
  };
  var styles = {
    bmBurgerButton: {
      width: "26px",
      height: "20px",

      right: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "44px",
      width: "90%",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "white",

      padding: "2.5em  0",

      fontSize: "1.15em",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "70%",
      top: "0", // Add this line
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
    },
    bmItem: {
      display: "flex",

      width: "100%",
      borderTop: " 1px solid var(--grey-grey-200, #CED1D9)",
      borderBottom: "1px solid var(--grey-grey-200, #CED1D9)",

      flexDirection: "column",

      paddingTop: "20px",
      paddingBottom: "20px",
      paddingRight: "20px",
      paddingLeft: "20px",
      /* Our sidebar item styling */
      textDecoration: "none",

      transition: "color 0.2s",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.8)",
    },
  };
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <div
        className={`${newstyles["showNavMob"]}`}
        style={{
          position: isScrolled ? "fixed" : "relative",
          background: "#FFF",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "all 0.3s ease",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999, // Adjust as needed
        }}
      >
        {" "}
        <div
          style={{
            width: "90%",
            height: "80px",
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <a
            href="https://www.joshtalks.com/josh-upsc/"
            target="_blank"
            className="flex items-center "
          >
            <Image
              src={JoshLogo}
              style={{
                height: "70%",
                width: "70px",
              }}
              alt="Flowbite Logo"
            />
          </a>
          <div
            style={{
              position: "relative",
            }}
          >
            {isOpen && (
              <>
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    zIndex: 999,
                  }}
                  onClick={closeMenu}
                />
              </>
            )}
            <Menu
              isOpen={isOpen}
              onStateChange={({ isOpen }) => setIsOpen(isOpen)}
              right
              styles={styles}
              customCrossIcon={
                <CloseButton closeMenu={() => setIsOpen(false)} />
              } // Pass the close function to your custom close button
            >
              {/* <a
                onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                className={`menu-item ${newstyles["menuP"]}`}
                style={{
                  display: "flex",
                  flexDirection: "row",

                  alignItems: "center",
                  height: "44px",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    padding: "0px",
                  }}
                >
                  Important Links
                </p>

                {isSubmenuOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </a>
              {isSubmenuOpen && (
                <div
                  style={{
                    marginLeft: "30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <a className={`menu-item ${newstyles["menuSub"]}`} href="#">
                    Privacy Policy
                  </a>
                  <a className={`menu-item ${newstyles["menuSub"]}`} href="#">
                    Terms & Conditions
                  </a>
                  <a className={`menu-item ${newstyles["menuSub"]}`} href="#">
                    Finance Form
                  </a>
                </div>
              )} */}
              <a
                id="about"
                className={`menu-item ${newstyles["menuP"]}`}
                href="https://joshtalks.com/"
              >
                Home
              </a>

              <a
                id="about"
                className={`menu-item ${newstyles["menuP"]}`}
                href="https://www.joshtalks.com/contact-us/"
              >
                JoshTalks Team
              </a>

              <a
                id="about"
                className={`menu-item ${newstyles["menuP"]}`}
                href="https://joshtalks.org/scholarship/upsc/submit-form/v2/224c1ecc-62dd-4909-bfa4-c4d37ab4a224"
                target="_blank"
              >
                Talk To Counsellor
              </a>
            </Menu>

            <div
              style={{
                position: "absolute",
                height: "100vh",
                width: "100%",
              }}
            ></div>
          </div>
        </div>{" "}
        {router.pathname === "/upsc" && <CoachingListNav />}
      </div>

      <div
        className={`${styles["navbar"]} ${newstyles["showNavDesktop"]}`}
        style={{
          position: isScrolled ? "fixed" : "relative",
          background: "#FFF",
          transition: "all 0.3s ease",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999, // Adjust as needed
        }}
      >
        <nav
          style={{
            borderBottom: "1px solid white",
            display: "flex",
            justifyContent: "center",
          }}
          className=" bg-white "
        >
          <div
            style={navbarStyle}
            className="flex w-full items-center justify-between mx-auto"
          >
            <a href="/upsc" className="flex items-center ">
              <Image
                src={JoshLogo}
                style={{
                  height: "100%",
                  width: "70px",
                }}
                className="mr-3"
                alt="Flowbite Logo"
              />
            </a>

            <div
              className=""
              id="navbar-default"
              style={{
                height: "80px",
              }}
            >
              <div
                className="font-medium flex flex-row "
                style={{
                  color: "var(--Black, #000)",
                  /* Paragraph_16px */
                  fontFamily: "Open Sans",
                  fontSize: "16px",

                  height: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",

                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "150%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "40px",
                    gap: "8px",
                  }}
                >
                  <Image
                    width={15}
                    height={15}
                    src={home}
                    alt="Josh Talks homepage"
                  />
                  <a
                    href="https://joshtalks.com/"
                    style={{
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Home
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "40px",
                  }}
                >
                  <a href="https://www.joshtalks.com/all-team/">
                    Josh Talks Team
                  </a>
                </div>

                <div
                  style={{
                    height: "100%",

                    paddingLeft: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="https://joshtalks.org/scholarship/upsc/submit-form/v2/224c1ecc-62dd-4909-bfa4-c4d37ab4a224"
                    style={{
                      height: "100%",

                      background: "#D37927",
                      color: "white",
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                    }}
                    target="_blank"
                  >
                    Talk to Counsellor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {router.pathname === "/upsc" && <CoachingListNav />}
      </div>
    </div>
  );
}

export default UpscMarketPlaceNavbar;
