import { motion, MotionConfig } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharactersBanner(props) {
  const AnimatedLink = motion(Link);

  return (
    <div
      className="bg-center bg-no-repeat sm:bg-cover lg:bg-contain"
      style={{ backgroundImage: `url("${props.character.banner}")` }}
    >
      <div className="flex justify-around bg-black bg-opacity-70">
        {props.right ? (
          <MotionConfig
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
          >
            <motion.div initial={{ x: -200 }} className="mt-7 w-2/4">
              <div className="mb-20">
                <h2 className="mb-0 text-5xl">{`"${props.character.name}"`}</h2>
                <p>&nbsp;&nbsp;-{props.character.alias}</p>
              </div>
              <p style={{ wordWrap: "break-word" }}>{props.character.desc}</p>
            </motion.div>
            <AnimatedLink
              to={props.character.characterLink}
              initial={{ x: 200 }}
            >
              <img
                src={props.character.image}
                className="max-h-96"
                style={{
                  maskImage: "linear-gradient(black 80%, transparent)",
                }}
              ></img>
            </AnimatedLink>
          </MotionConfig>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={props.character.image}
                className="max-h-96"
                style={{
                  maskImage: "linear-gradient(black 80%, transparent)",
                }}
              ></img>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="mt-7 w-2/4"
            >
              <div className="mb-20">
                <h2 className="mb-0 text-5xl">{`"${props.character.name}"`}</h2>
                <p>&nbsp;&nbsp;-{props.character.alias}</p>
              </div>
              <p style={{ wordWrap: "break-word" }}>{props.character.desc}</p>
            </motion.div>
          </>
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
  }).isRequired,
  right: PropTypes.bool,
};

export default CharactersBanner;
