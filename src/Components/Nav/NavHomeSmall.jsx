import { AnimatePresence, motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import chevron from "../../images/icons/chevron-down-solid.svg";
import logo from "../../images/logos/gameofthroneslogo.png";
const characters = [
  { name: "Jon Snow", href: "/characters/jonsnow" },
  { name: "Arya Stark", href: "/characters/aryastark" },
  { name: "Sansa Stark", href: "/characters/sansastark" },
  { name: "Eddard Stark", href: "/characters/eddardstark" },
  { name: "Bran Stark", href: "/characters/branstark" },
  { name: "Daenerys Targaryen", href: "/characters/daenerystargaryen" },
  { name: "Rhaegar Targaryen", href: "/characters/rhaegartargaryen" },
];

function NavHomeSmall({ barsImage, aditionalStyles }) {
  const [subIsOpen, setSubIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [rota, setRota] = useState(false);

  return (
    <header className={`absolute w-full ${aditionalStyles}`}>
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
              <ul className="flex flex-col gap-3 p-4">
                <Link to={"/"}>Inicio</Link>
                <div className="flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <Link to={"/characters"}>Personajes</Link>
                    <button
                      onClick={() => setSubIsOpen(!subIsOpen)}
                      className="h-3 w-3 justify-self-end"
                    >
                      <motion.img
                        initial={{ rotateZ: "0deg" }}
                        animate={{ rotateZ: rota ? "180deg" : "0deg" }}
                        transition={{ type: easeInOut }}
                        onClick={() => setRota(!rota)}
                        src={chevron}
                        alt=""
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {subIsOpen && (
                      <motion.ul
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="my-3 flex flex-col gap-4 border-y-2 py-4"
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
                <Link to={"/makingof"}>Making of GOT</Link>
                <Link to={"/valoraciones"}>Valoraciones</Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <Link to={"/"}>
          <img src={logo} className="w-[600px] max-md:w-[300px]" alt="" />
        </Link>

        <ul className="flex w-1/4 justify-evenly max-md:hidden">
          <Link to={"/makingof"}>Making of GOT</Link>
          <Link to={"/valoraciones"}>Valoraciones</Link>
        </ul>
      </nav>
    </header>
  );
}

NavHomeSmall.propTypes = {
  barsImage: PropTypes.string,
  aditionalStyles: PropTypes.string,
};

export default NavHomeSmall;
