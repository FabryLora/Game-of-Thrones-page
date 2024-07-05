import PropTypes from "prop-types";
import Gallery from "../Components/Gallery/Gallery";

function CharactersMainContent({ charac }) {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const indice = [
    { title: "1. Intro", id: "intro" },
    { title: "2. Historia", id: "historia" },
    { title: "3. Origen y nacimiento", id: "oyn" },
    { title: "4. Infancia y juventud", id: "iyj" },
    { title: "5. Galeria", id: "galeria" },
  ];

  return (
    <>
      <div
        className="sticky top-2 h-fit w-[15%] rounded-3xl bg-gray-700 p-5 shadow-2xl max-md:hidden"
        id="glosario content"
      >
        <ul className="flex flex-col items-start gap-1">
          {indice.map((elem) => (
            <button
              key={elem.title}
              className="hover:text-slate-400"
              onClick={() => scrollToElement(elem.id)}
            >
              {elem.title}
            </button>
          ))}
        </ul>
      </div>
      <main className="flex h-full w-[55%] flex-col rounded-3xl bg-gray-700 p-4 shadow-2xl max-md:order-2 max-md:mt-5 max-md:w-[90%]">
        {/* INTRO */}
        <div>
          <h1 id="intro" className="mb-5 font-cinzel text-4xl">
            {charac.name}
          </h1>
          {charac.intro.map((elem) => (
            <p className="mb-10" key={elem}>
              {elem}
            </p>
          ))}
        </div>
        {/* HISTORIA */}
        <div>
          <h2 id="historia" className="border-b-2 font-cinzel text-3xl">
            Historia
          </h2>
          <h3 id="oyn" className="my-4 font-cinzel text-2xl font-bold">
            Origen y nacimiento
          </h3>
          {charac.oynp.map((elem) => (
            <p className="mb-10" key={elem}>
              {elem}
            </p>
          ))}
        </div>
        {/* INFANCIA Y JUVENTUD */}
        <div>
          <h3 id="iyj" className="my-4 font-cinzel text-2xl font-bold">
            Infancia y juventud
          </h3>
          {charac.iyj.map((elem) => (
            <p className="mb-10" key={elem}>
              {elem}
            </p>
          ))}
        </div>
        {/* GALERIA */}
        <div id="galeria"></div>
        <Gallery images={charac.images}></Gallery>
      </main>
    </>
  );
}

CharactersMainContent.propTypes = {
  charac: PropTypes.shape({
    name: PropTypes.string.isRequired,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
    oynp: PropTypes.arrayOf(PropTypes.string).isRequired,
    iyj: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CharactersMainContent;
