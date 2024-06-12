import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/gotlogopng2.png";

const starkCharacters = [
  { name: "Jon Snow", href: "/jonsnow" },
  { name: "Arya", href: "/aryastark" },
  { name: "Sansa", href: "/sansastark" },
  { name: "Eddard", href: "/eddardstark" },
  { name: "Bran", href: "/branstark" },
];

const targaryenCharacters = [
  { name: "Daenerys", href: "/daenerystargaryen" },
  { name: "Rhaegar", href: "/rhaegartargaryen" },
];

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  return (
    <nav className="flex gap-3 p-2">
      <Link to={"/"}>
        <img src={logo} width={50} alt="" />
      </Link>
      <ul className="flex items-center gap-5">
        <div className="relative">
          <Link
            onMouseEnter={() => control1.start({ scaleX: 1 })}
            onMouseLeave={() => control1.start({ scaleX: 0 })}
            to={"/"}
          >
            Inicio
          </Link>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={control1}
            transition={{ duration: 0.2 }}
            className="absolute h-1 w-full rounded-md bg-white"
          ></motion.div>
        </div>
        <div className="relative">
          <Link
            onMouseEnter={() =>
              setIsOpen((prev) => !prev, control2.start({ scaleX: 1 }))
            }
            onMouseLeave={() =>
              setIsOpen((prev) => !prev, control2.start({ scaleX: 0 }))
            }
            to={"/characters"}
          >
            Personajes
          </Link>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={control2}
            transition={{ duration: 0.2 }}
            className="absolute h-1 w-full rounded-md bg-white"
          ></motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                exit={{ opacity: 0, y: -20 }}
                onMouseEnter={() =>
                  setIsOpen((prev) => !prev, control2.start({ scaleX: 1 }))
                }
                onMouseLeave={() =>
                  setIsOpen((prev) => !prev, control2.start({ scaleX: 0 }))
                }
                className="absolute z-10 mt-4 flex gap-5 rounded-md bg-[#53504f] p-4"
              >
                <div>
                  <h2 className="font-bold">Stark:</h2>
                  <ul className="flex flex-col">
                    {starkCharacters.map((item) => (
                      <Link
                        key={item.name}
                        className="hover:text-slate-400"
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </div>

                <div className="border-l-2 pl-4">
                  <h2 className="font-bold">Targaryen:</h2>
                  <ul className="flex flex-col">
                    {targaryenCharacters.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="hover:text-slate-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative">
          <Link
            onMouseEnter={() => control3.start({ scaleX: 1 })}
            onMouseLeave={() => control3.start({ scaleX: 0 })}
            to={"/"}
          >
            Making off
          </Link>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={control3}
            transition={{ duration: 0.2 }}
            className="absolute h-1 w-full rounded-md bg-white"
          ></motion.div>
        </div>
        <div className="relative">
          <Link
            onMouseEnter={() => control4.start({ scaleX: 1 })}
            onMouseLeave={() => control4.start({ scaleX: 0 })}
            to={"/"}
          >
            Family tree
          </Link>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={control4}
            transition={{ duration: 0.2 }}
            className="absolute h-1 w-full rounded-md bg-white"
          ></motion.div>
        </div>
      </ul>
    </nav>
  );
};

export default NewNav;
