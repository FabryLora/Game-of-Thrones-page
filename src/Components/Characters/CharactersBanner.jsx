import { motion, MotionConfig } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharactersBanner({ character, right }) {
  const AnimatedLink = motion(Link);

  return (
    <div
      className="bg-contain bg-center bg-no-repeat max-md:bg-cover"
      style={{ backgroundImage: `url("${character.banner}")` }}
    >
      <div className="flex justify-around bg-black bg-opacity-70 ">
        {right ? (
          <MotionConfig
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
          >
            <motion.div initial={{ x: -200 }} className="mt-7 w-2/4 ">
              <div className="mb-20 ">
                <h2 className="mb-0 text-5xl">{`"${character.name}"`}</h2>
                <p>&nbsp;&nbsp;-{character.alias}</p>
              </div>
              <p style={{ wordWrap: "break-word" }}>{character.desc}</p>
            </motion.div>
            <AnimatedLink to={character.characterLink} initial={{ x: 200 }}>
              <img
                src={character.image}
                className="max-h-96"
                style={{
                  maskImage: "linear-gradient(black 80%, transparent)",
                }}
              ></img>
            </AnimatedLink>
          </MotionConfig>
        ) : (
          <MotionConfig
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
          >
            <AnimatedLink to={character.characterLink} initial={{ x: -200 }}>
              <img
                src={character.image}
                className="max-h-96"
                style={{
                  maskImage: "linear-gradient(black 80%, transparent)",
                }}
              ></img>
            </AnimatedLink>
            <motion.div initial={{ x: 200 }} className="mt-7 w-2/4">
              <div className="mb-20">
                <h2 className="mb-0 text-5xl">{`"${character.name}"`}</h2>
                <p>&nbsp;&nbsp;-{character.alias}</p>
              </div>
              <p style={{ wordWrap: "break-word" }}>{character.desc}</p>
            </motion.div>
          </MotionConfig>
        )}
      </div>
    </div>
  );
}

CharactersBanner.propTypes = {
  character: PropTypes.shape({
    banner: PropTypes.string,
    name: PropTypes.string,
    alias: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    characterLink: PropTypes.string,
  }).isRequired,
  right: PropTypes.bool,
};

export default CharactersBanner;
