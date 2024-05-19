import PropTypes from "prop-types";

function HouseCard(props) {
  return (
    <div
      className="flex h-48 w-48 flex-col items-center justify-center bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h2>{props.title}</h2>
      <button
        className="rounded-lg border-none bg-black px-6
            py-2 text-white hover:text-gray-400"
      >
        ir
      </button>
    </div>
  );
}

HouseCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  elementId: PropTypes.string,
};

export default HouseCard;
