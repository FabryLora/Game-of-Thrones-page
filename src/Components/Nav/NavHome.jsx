import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logos/gameofthroneslogo.png";

function NavHome() {
  const AnimatedLink = motion(Link);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const starkCharacters = [
    { name: "Jon Snow", href: "/characters/jonsnow" },
    { name: "Arya", href: "/characters/aryastark" },
    { name: "Sansa", href: "/characters/sansastark" },
    { name: "Eddard", href: "/characters/eddardstark" },
    { name: "Bran", href: "/characters/branstark" },
  ];

  const TargaryenCharacters = [
    { name: "Daenerys", href: "/characters/daenerystargaryen" },
    { name: "Rhaegar", href: "/characters/rhaegartargaryen" },
  ];

  return (
    <header className="absolute w-full">
      <nav className="flex items-center justify-evenly text-lg">
        <ul className="flex w-1/4 justify-evenly">
          <div className="flex flex-col">
            <AnimatedLink
              onMouseEnter={() => controls.start({ scaleX: 1 })}
              onMouseLeave={() => controls.start({ scaleX: 0 })}
              to={"/"}
            >
              Inicio
            </AnimatedLink>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={controls}
              transition={{ duration: 0.2 }}
              className=" h-1 w-full rounded-md bg-white"
            ></motion.div>
          </div>

          <div>
            <Link
              onMouseEnter={() =>
                setIsOpen((prev) => !prev, controls2.start({ scaleX: 1 }))
              }
              onMouseLeave={() =>
                setIsOpen((prev) => !prev, controls2.start({ scaleX: 0 }))
              }
              to={"characters"}
            >
              Personajes
            </Link>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={controls2}
              transition={{ duration: 0.2 }}
              className="h-1 w-full rounded-md bg-white"
            ></motion.div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                  exit={{ opacity: 0, y: -20 }}
                  onMouseEnter={() =>
                    setIsOpen((prev) => !prev, controls2.start({ scaleX: 1 }))
                  }
                  onMouseLeave={() =>
                    setIsOpen((prev) => !prev, controls2.start({ scaleX: 0 }))
                  }
                  className="absolute mt-4 flex gap-5 rounded-md bg-[#53504f] p-4"
                >
                  <div>
                    <h2 className="font-bold">Stark:</h2>
                    <ul>
                      {starkCharacters.map((elem) => (
                        <li key={elem.name}>
                          <Link className="hover:text-slate-400" to={elem.href}>
                            {elem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-2 pl-4">
                    <h2 className="font-bold">Targaryen:</h2>
                    <ul>
                      {TargaryenCharacters.map((elem) => (
                        <li key={elem.name}>
                          <Link className="hover:text-slate-400" to={elem.href}>
                            {elem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ul>

        <Link to={"/"}>
          <img src={logo} className="w-[600px]" alt="" />
        </Link>

        <ul className="flex w-1/4 justify-evenly max-md:hidden">
          <div className="flex flex-col">
            <AnimatedLink
              onMouseEnter={() => controls3.start({ scaleX: 1 })}
              onMouseLeave={() => controls3.start({ scaleX: 0 })}
              to={"makingof"}
            >
              Making Of GOT
            </AnimatedLink>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={controls3}
              transition={{ duration: 0.2 }}
              className=" h-1 w-full rounded-md bg-white"
            ></motion.div>
          </div>
          <div className="flex flex-col">
            <AnimatedLink
              onMouseEnter={() => controls4.start({ scaleX: 1 })}
              onMouseLeave={() => controls4.start({ scaleX: 0 })}
              to={"/valoraciones"}
            >
              Valoraciones
            </AnimatedLink>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={controls4}
              transition={{ duration: 0.2 }}
              className=" h-1 w-full rounded-md bg-white"
            ></motion.div>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default NavHome;
