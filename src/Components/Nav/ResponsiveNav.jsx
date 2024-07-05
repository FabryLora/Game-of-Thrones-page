import { useEffect, useState } from "react";
import bars from "../../images/icons/bars-solid.svg";
import NavHome from "./NavHome";
import NavHomeSmall from "./NavHomeSmall";

function ResponsiveNav() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1050);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen ? <NavHomeSmall barsImage={bars} /> : <NavHome />;
}

export default ResponsiveNav;
