import { useEffect, useState } from "react";
import NavHome from "./NavHome";
import NavHomeSmall from "./NavHomeSmall";

function ResponsiveNav() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen ? <NavHomeSmall /> : <NavHome />;
}

export default ResponsiveNav;
