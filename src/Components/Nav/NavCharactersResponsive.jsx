import { useEffect, useState } from "react";
import bars from "../../images/icons/bars-solid-black.svg";
import NavHomeSmall from "./NavHomeSmall";
import NewNav from "./NewNav.jsx";

function NavCharactersResponsive() {
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

  return isSmallScreen ? <NavHomeSmall barsImage={bars} /> : <NewNav />;
}

export default NavCharactersResponsive;
