import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterBannerSmall({ character }) {
  const AnimatedLink = motion(Link);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${character.banner})` }}
    >
      <div className="flex h-fit w-full flex-col items-center bg-[rgba(0,0,0,0.7)]">
        <div className="flex flex-col items-center py-4">
          <h2 className="text-3xl font-bold">{character.name}</h2>
          <p>-{character.alias}</p>
        </div>
        <AnimatedLink to={character.characterLink}>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={character.image}
            style={{
              maskImage: "linear-gradient(black 80%, transparent)",
            }}
            alt=""
          />
        </AnimatedLink>
        <div className="w-[90%]">
          <p className="py-10 text-center">{character.desc}</p>
        </div>
      </div>
    </div>
  );
}

CharacterBannerSmall.propTypes = {
  character: PropTypes.shape({
    banner: PropTypes.string,
    name: PropTypes.string,
    alias: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    characterLink: PropTypes.string,
  }).isRequired,
};

export default CharacterBannerSmall;
