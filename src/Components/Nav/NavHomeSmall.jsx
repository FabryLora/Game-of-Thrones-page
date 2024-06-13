import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import chevron from "../../images/icons/chevron-down-solid.svg";
import logo from "../../images/logos/gameofthroneslogo.png";
const characters = [
  { name: "Jon Snow", href: "/jonsnow" },
  { name: "Arya", href: "/aryastark" },
  { name: "Sansa", href: "/sansastark" },
  { name: "Eddard", href: "/eddardstark" },
  { name: "Bran", href: "/branstark" },
  { name: "Daenerys", href: "/daenerystargaryen" },
  { name: "Rhaegar", href: "/rhaegartargaryen" },
];

function NavHomeSmall({ barsImage }) {
  const [subIsOpen, setSubIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="absolute w-full">
      <nav className="flex items-center justify-evenly text-lg">
        <button onClick={() => setNavIsOpen(!navIsOpen)} className="h-4 w-4">
          <img src={barsImage} alt="" />
        </button>
        <AnimatePresence>
          {navIsOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute top-[100%] h-fit w-[95%] rounded-md bg-black"
            >
              <ul className="flex flex-col p-4">
                <Link to={"/"}>Home</Link>
                <div className="flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <Link to={"/characters"}>Personajes</Link>
                    <button
                      onClick={() => setSubIsOpen(!subIsOpen)}
                      className="h-3 w-3 justify-self-end"
                    >
                      <img src={chevron} alt="" />
                    </button>
                  </div>
                  <AnimatePresence>
                    {subIsOpen && (
                      <motion.ul
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="my-3 flex flex-col border-y-2"
                      >
                        {characters.map((items) => (
                          <Link key={items.name} to={items.href}>
                            {items.name}
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <Link>Page3</Link>
                <Link>Page4</Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <Link to={"/"}>
          <img src={logo} className="w-[600px] max-md:w-[300px]" alt="" />
        </Link>

        <ul className="flex w-1/4 justify-evenly max-md:hidden">
          <Link to={"/"}>Nidea</Link>
          <Link to={"/"}>LoLos</Link>
        </ul>
      </nav>
    </header>
  );
}

NavHomeSmall.propTypes = {
  barsImage: PropTypes.string,
};

export default NavHomeSmall;
