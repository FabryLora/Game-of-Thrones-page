import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import NavCharactersResponsive from "../Components/Nav/NavCharactersResponsive";
import bars from "../images/icons/bars-solid.svg";
import valorImage from "../images/valoraciones.jpg";

function Valoraciones() {
  const [value, setValue] = useState(0);
  return (
    <>
      <NavCharactersResponsive barsImage={bars} />
      <main>
        <div
          className="h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${valorImage})` }}
        >
          <div className="flex h-screen items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <h2 className="text-5xl">Valoraciones</h2>
          </div>
        </div>
        <h3 className="bg-white p-4 text-center font-lora text-2xl text-black">
          Mira las opiniones que tienen los demas acerca de tu serie favorita!!
        </h3>
        <div className="flex h-screen flex-col items-center gap-10 bg-white font-lora text-black">
          <div className="flex w-1/2 flex-col justify-center gap-1 p-4 shadow-2xl max-md:w-[90%]">
            <h2 className="text-2xl">Juan Pérez</h2>
            <Rating name="read-only" value={4} readOnly />
            <p>
              La serie tiene una trama increíble y personajes complejos. El
              desarrollo de la historia es fantástico, aunque el final no
              cumplió del todo mis expectativas. Aun así, es una serie que vale
              la pena ver.
            </p>
          </div>

          <div className="flex w-1/2 flex-col justify-center gap-1 p-4 shadow-2xl max-md:w-[90%]">
            <h2 className="text-2xl">María González</h2>
            <Rating name="read-only" value={5} readOnly />
            <p>
              Game of Thrones es una obra maestra. Cada episodio es emocionante
              y los giros inesperados te mantienen al borde del asiento. Los
              efectos visuales y la banda sonora son simplemente impresionantes.
            </p>
          </div>

          <div className="flex w-1/2 flex-col justify-center gap-1 p-4 shadow-2xl max-md:w-[90%]">
            <h2 className="text-2xl">Carlos Ramírez</h2>
            <Rating name="read-only" value={3} readOnly />
            <p>
              La serie es buena, pero creo que algunas temporadas son mejores
              que otras. Los primeros años fueron brillantes, pero la última
              temporada me dejó un sabor agridulce. A pesar de eso, la serie en
              general es bastante entretenida.
            </p>
          </div>

          <div className="flex w-1/2 flex-col justify-center gap-1 p-4 shadow-2xl max-md:w-[90%]">
            <h2 className="text-2xl">Laura Fernández</h2>
            <Rating name="read-only" value={2} readOnly />
            <p>
              Tenía grandes expectativas con Game of Thrones, pero me decepcionó
              bastante. Los primeros episodios eran prometedores, pero la
              historia se volvió demasiado complicada y algunos personajes no
              tuvieron el desarrollo que merecían.
            </p>
          </div>

          <h2 className="text-3xl max-md:text-2xl">
            Queremos saber lo que pensas!
          </h2>
        </div>

        <div className="flex items-center justify-center bg-white pb-4 max-md:pt-52">
          <form
            className="flex h-fit w-[40%] flex-col justify-center gap-5 border-b-2 bg-white font-lora text-black max-md:w-[90%]"
            action=""
          >
            <div className="flex items-center justify-between">
              <input
                className="rounded-md border-2 border-black p-1"
                type="text"
                name="hola"
                placeholder="Nombre"
                id=""
              />
              <input
                className="rounded-md border-2 border-black p-1"
                type="text"
                name="hola"
                placeholder="Apellido"
                id=""
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl">Deja tu valoracion</h2>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>

            <input
              className="rounded-md border-2 border-black p-1"
              type="email"
              placeholder="Email"
              name=""
              id=""
            />
            <textarea
              className="rounded-md border-2 border-black p-1"
              placeholder="Escribe tu opinion aqui"
              name=""
              id=""
              rows={8}
            ></textarea>
            <div className="flex flex-row  gap-2">
              <input type="checkbox" name="info" id="info" />
              <label htmlFor="info">
                Marca esta casilla si quieres recibir informacion de Game of
                Thrones
              </label>
            </div>
            <motion.input
              whileTap={{ scale: 0.9 }}
              className="rounded-md border-2 border-black py-2"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Valoraciones;
