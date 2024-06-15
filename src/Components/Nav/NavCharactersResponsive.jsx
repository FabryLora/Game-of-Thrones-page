import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NavHomeSmall from "./NavHomeSmall";
import NewNav from "./NewNav.jsx";

function NavCharactersResponsive({
  barsImage,
  aditionalStyles,
  aditionalStylesNew,
}) {
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

  return isSmallScreen ? (
    <NavHomeSmall aditionalStyles={aditionalStyles} barsImage={barsImage} />
  ) : (
    <NewNav aditionalStyles={aditionalStylesNew} />
  );
}

NavCharactersResponsive.propTypes = {
  barsImage: PropTypes.string,
  aditionalStyles: PropTypes.string,
};

export default NavCharactersResponsive;
