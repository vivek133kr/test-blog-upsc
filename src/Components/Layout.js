

import { useRouter } from "next/router";

import UPSCNavbarr from "./UPSC/Navbar/Navbar";
import UPSCFooterr from "./UPSC/Footer/Footer";

import Footerr from "./Skills/Footer/Footer";
import Navbarr from "./Skills/Navbar/Navbar";
import UpscMarketPlaceNavbar from "./Coachings/UpscMarketPlace/Pages/UpscMarketPlaceNavbar";
import UpscMarketPlaceFooter from "./Coachings/UpscMarketPlace/Pages/UpscMarketPlaceFooter";
export default function Layout({ children }) {
  const router = useRouter();
 const path = router.pathname;

  let showUPSCNavbarr = false;
  let showNavbarr = false;
  let showMarketPlaceBar = false;

  if (path.includes("/scholarships")) {
    showUPSCNavbarr = true;
  } else if (path.includes("/courses")) {
    showNavbarr = true;
  }else if (path.includes("/upsc")){

    showMarketPlaceBar = true

  }

  return (
    <>
      {showUPSCNavbarr && <UPSCNavbarr />}
      {showNavbarr && <Navbarr />}
      {/* {showMarketPlaceBar && <UpscMarketPlaceNavbar />} */}
      <main>{children}</main>
      {showUPSCNavbarr && <UPSCFooterr />}
      {showNavbarr && <Footerr />}
      {/* {showMarketPlaceBar && <UpscMarketPlaceFooter />} */}
    </>
  );
}