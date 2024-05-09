import { motion } from "framer-motion";
import PropTypes from "prop-types";

function CharactersBanner(props) {
  const animationValues = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  var backgroundFix = {
    backgroundImage: `url("${props.character.banner}")`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const characterBanner = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  };

  return (
    <div style={{ ...backgroundFix }}>
      <div style={{ ...characterBanner }}>
        {props.right ? (
          <>
            <motion.div {...animationValues} style={{ width: "50%" }}>
              <div style={{ marginBottom: "3em" }}>
                <h2
                  style={{ marginBottom: 0, fontSize: "42px" }}
                >{`"${props.character.name}"`}</h2>
                <p style={{ marginTop: "0.3em" }}>
                  &nbsp;&nbsp;-{props.character.alias}
                </p>
              </div>
              <p style={{ wordWrap: "break-word" }}>{props.character.desc}</p>
            </motion.div>
            <motion.div {...animationValues}>
              <img
                src={props.character.image}
                style={{
                  maxHeight: 500,
                  maskImage: "linear-gradient(black 80%, transparent)",
                }}
              ></img>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div {...animationValues}>
              <img
                src={props.character.image}
                style={{
                  maxHeight: 500,
                  maskImage: "linear-gradient(black 80%, transparent)",
                }}
              ></img>
            </motion.div>
            <motion.div {...animationValues} style={{ width: "50%" }}>
              <div style={{ marginBottom: "3em" }}>
                <h2
                  style={{ marginBottom: 0, fontSize: "42px" }}
                >{`"${props.character.name}"`}</h2>
                <p style={{ marginTop: "0.3em" }}>
                  &nbsp;&nbsp;-{props.character.alias}
                </p>
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
