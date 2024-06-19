import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import charactesImage from "../../images/characters.jpg";
import homeImage from "../../images/homeimage.jpg";
import secondSectionImage from "../../images/jonsnow.jpg";
import makingOf from "../../images/makingof2.jpg";
import valoraciones from "../../images/valoraciones.jpg";

function Home() {
  const AnimatedLink = motion(Link);

  return (
    <main>
      <div
        className="max-md:bg-pos bg-cover bg-center bg-no-repeat max-md:h-screen"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="flex h-full flex-col items-center bg-[rgba(0,0,0,0.5)] max-md:justify-center">
          {/* <Link to={"/"} className="mb-36">
            <img src={logo} width="800px" alt="" />
          </Link> */}
          <p className="mb-5 mt-96 text-4xl font-bold max-md:mt-10 max-md:text-center max-md:text-2xl ">
            {" "}
            Who will sit on the iron throne?{" "}
          </p>
          <div className="flex items-center justify-evenly max-md:h-[220px] max-md:w-full">
            <iframe
              className="h-[50rem] w-[87.5rem] max-md:h-full max-md:w-full"
              src="https://www.youtube.com/embed/bjqEWgDVPe0"
              title="GAME OF THRONES - SEASON 1- TRAILER"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* SECOND HOME SECTION */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url("${secondSectionImage}")` }}
      >
        <div className="flex w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="m-16 flex min-h-72 w-4/5 flex-nowrap items-center justify-evenly rounded-xl max-md:w-[90%] max-md:flex-col max-md:bg-[rgba(0,0,0,0.7)] max-md:p-3">
            <AnimatedLink whileHover={{ scale: 1.1 }} to={"/characters"}>
              <img
                className="max-h-72 rounded-xl"
                src={charactesImage}
                alt="arbol familiar"
              />
            </AnimatedLink>
            <div className="flex w-2/4 flex-col max-md:mt-3 max-md:w-full max-md:items-center">
              <p className="w-full">
                En esta sección se muestran los personajes icónicos de Game of
                Thrones, con detalles sobre sus características, historias y
                roles dentro de la serie. Explora las complejidades de cada
                personaje, desde los nobles hasta los guerreros, y descubre cómo
                sus destinos se entrelazan en la lucha por el Trono de Hierro.
              </p>
              <Link
                className="mt-5 w-24 rounded-xl border border-solid border-white bg-none p-2 text-center font-bold text-white hover:bg-white hover:text-black"
                to={"/characters"}
              >
                Ver mas
              </Link>
            </div>
          </div>

          <div className="m-16 flex min-h-72 w-4/5 flex-nowrap items-center justify-evenly rounded-xl max-md:w-[90%] max-md:flex-col max-md:bg-[rgba(0,0,0,0.7)] max-md:p-3">
            <div className="flex w-2/4 flex-col max-md:order-2 max-md:mt-3 max-md:w-full max-md:items-center">
              <p className="w-full">
                Adéntrate en el fascinante detrás de escena de Game of Thrones.
                En esta sección, conocerás cómo se creó la música épica, los
                elaborados trajes y los impresionantes efectos especiales que
                dieron vida a Westeros. Descubre entrevistas exclusivas, videos
                y anécdotas del equipo de producción que hizo posible esta
                aclamada serie.
              </p>
              <Link
                className="mt-5 w-24 rounded-xl border border-solid border-white bg-none p-2 text-center font-bold text-white hover:bg-white hover:text-black"
                to={"/makingof"}
              >
                Ver mas
              </Link>
            </div>
            <AnimatedLink
              className="max-md:order-1"
              whileHover={{ scale: 1.1 }}
              to={"/makingof"}
            >
              <img
                className="max-h-72 rounded-xl"
                src={makingOf}
                alt="5 de los personajes de la serie"
              />
            </AnimatedLink>
          </div>

          <div className="m-16 flex min-h-72 w-4/5 flex-nowrap items-center justify-evenly rounded-xl max-md:w-[90%] max-md:flex-col max-md:bg-[rgba(0,0,0,0.7)] max-md:p-3">
            <AnimatedLink whileHover={{ scale: 1.1 }} to={"/valoraciones"}>
              <img
                className="max-h-72 rounded-xl"
                src={valoraciones}
                alt="foto del macking off"
              />
            </AnimatedLink>
            <div className="flex w-2/4 flex-col max-md:mt-3 max-md:w-full max-md:items-center">
              <p className="w-full">
                Aquí, los fans de Game of Thrones pueden dejar sus opiniones y
                comentarios sobre la serie. Comparte tus pensamientos sobre los
                episodios, personajes y momentos favoritos, y lee lo que otros
                seguidores tienen que decir. Únete a la conversación y forma
                parte de la comunidad de admiradores de una de las series más
                influyentes de la televisión.
              </p>
              <Link
                className="mt-5 w-24 rounded-xl border border-solid border-white bg-none p-2 text-center font-bold text-white hover:bg-white hover:text-black"
                to={"/valoraciones"}
              >
                Ver mas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
