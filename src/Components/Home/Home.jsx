import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import charactesImage from "../../images/characters.jpg";
import familyTreeImage from "../../images/familytreeextended.webp";
import homeImage from "../../images/homeimage.jpg";
import secondSectionImage from "../../images/jonsnow.jpg";
/* import logo from "../../images/logos/gameofthroneslogo.png"; */
import makingOffImage from "../../images/mackingoff.webp";

function Home() {
  const AnimatedLink = motion(Link);

  return (
    <main>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="flex h-full flex-col items-center bg-[rgba(0,0,0,0.5)]">
          {/* <Link to={"/"} className="mb-36">
            <img src={logo} width="800px" alt="" />
          </Link> */}
          <p className="mb-5 mt-96 text-4xl">
            {" "}
            Who will sit on the iron throne?{" "}
          </p>
          <div className="flex items-center justify-evenly">
            <iframe
              width="1400"
              height="800"
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
          <div className="m-16 flex min-h-72 w-4/5 flex-nowrap items-center justify-evenly rounded-xl">
            <AnimatedLink whileHover={{ scale: 1.1 }} to={"/"}>
              <img
                className="max-h-72 rounded-xl"
                src={familyTreeImage}
                alt="arbol familiar"
              />
            </AnimatedLink>
            <div className="flex w-2/4 flex-col">
              <p className="w-full">
                Mira el arbol genialogico y enterate de todos los vinculos entre
                personajes para entender mas a profundidad la historia
              </p>
              <Link
                className="w-24 rounded-xl border border-solid border-white bg-none p-2 text-center font-bold text-white hover:bg-white hover:text-black"
                to={"/"}
              >
                Ver mas
              </Link>
            </div>
          </div>

          <div className="m-16 flex min-h-72 w-4/5 flex-nowrap items-center justify-evenly rounded-xl">
            <div className="flex w-2/4 flex-col">
              <p className="w-full">
                Mira el arbol genialogico y enterate de todos los vinculos entre
                personajes para entender mas a profundidad la historia
              </p>
              <Link
                className="w-24 rounded-xl border border-solid border-white bg-none p-2 text-center font-bold text-white hover:bg-white hover:text-black"
                to={"/"}
              >
                Ver mas
              </Link>
            </div>
            <AnimatedLink whileHover={{ scale: 1.1 }} to={"characters"}>
              <img
                className="max-h-72 rounded-xl"
                src={charactesImage}
                alt="5 de los personajes de la serie"
              />
            </AnimatedLink>
          </div>

          <div className="m-16 flex min-h-72 w-4/5 flex-nowrap items-center justify-evenly rounded-xl">
            <AnimatedLink whileHover={{ scale: 1.1 }} to={"/"}>
              <img
                className="max-h-72 rounded-xl"
                src={makingOffImage}
                alt="foto del macking off"
              />
            </AnimatedLink>
            <div className="flex w-2/4 flex-col">
              <p className="w-full">
                Mira el arbol genialogico y enterate de todos los vinculos entre
                personajes para entender mas a profundidad la historia
              </p>
              <Link
                className="w-24 rounded-xl border border-solid border-white bg-none p-2 text-center font-bold text-white hover:bg-white hover:text-black"
                to={"/"}
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
