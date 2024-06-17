import { AnimatePresence, easeInOut, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import chevron from "../images/icons/chevron-down-solid.svg";

const CharacterDesc = ({ char }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      className="flex h-fit w-[20%] flex-col justify-start rounded-3xl bg-gray-700 shadow-2xl max-md:order-1 max-md:w-[90%]"
      id="personaje info"
    >
      <div className="border-b-2 p-3 pb-0 text-center text-5xl">
        <h2 className="font-cinzel">{char.name}</h2>
        <img src={char.image} className="m-auto max-w-[300px]" alt="" />
      </div>
      {/* Informacion personal del personaje */}
      <div className="flex items-center justify-center gap-2 py-2">
        <button onClick={() => setIsOpen(!isOpen)} className="text-lg">
          Informacion Personal
        </button>
        <motion.button
          initial={{ rotate: "0deg" }}
          animate={{ rotate: isOpen ? "0deg" : "180deg" }}
          transition={{
            duration: 0.25,
            damping: easeInOut,
          }}
        >
          <img src={chevron} width={20} alt="" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div>
            <div className="p-4">
              <ul>
                <li className="my-4 flex gap-2">
                  <h3 className="font-bold">Name:</h3>
                  {char.name}
                </li>

                <li className="my-4">
                  <h3 className="font-bold">Familia:</h3>
                  <ul className="pl-10">
                    {char.familia.map((element) => (
                      <li key={element}>
                        <p>{element}</p>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="my-4">
                  <h3 className="font-bold">Filiacion:</h3>
                  <ul className="pl-10">
                    {char.filiacion.map((elem) => (
                      <li key={elem}>
                        <p>{elem}</p>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="my-4">
                  <h3 className="font-bold">Alias:</h3>
                  <ul className="pl-10">
                    {char.allAlias.map((elem) => (
                      <li key={elem}>
                        <p>{elem}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CharacterDesc;

CharacterDesc.propTypes = {
  char: PropTypes.shape({
    name: PropTypes.string,
    allAlias: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    familia: PropTypes.arrayOf(PropTypes.string),
    filiacion: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
