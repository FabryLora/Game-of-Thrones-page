import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import Gallery from "../../Components/Gallery/Gallery.jsx";
import Nav from "../../Components/Nav/Nav.jsx";
import image1 from "../../images/characters/jonsnow/image1.webp";
import image2 from "../../images/characters/jonsnow/image2.webp";
import image3 from "../../images/characters/jonsnow/image3.webp";
import image4 from "../../images/characters/jonsnow/image4.webp";
import image5 from "../../images/characters/jonsnow/image5.webp";
import image6 from "../../images/characters/jonsnow/image6.webp";
import image7 from "../../images/characters/jonsnow/image7.webp";
import image8 from "../../images/characters/jonsnow/image8.webp";
import exampleImage from "../../images/characters/jonsnowpng3.png";
import chevron from "../../images/icons/chevron-down-solid.svg";

const JonSnow = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggleInformation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav></Nav>
      <main className="flex justify-evenly bg-[url('./images/patron3.jpg')] bg-fixed pt-10">
        {/* GLOSARIO DE LINKS */}
        <div
          className="sticky top-2 h-fit w-[15%] rounded-3xl bg-gray-700 p-5 shadow-2xl"
          id="glosario content"
        >
          <ul className="flex flex-col items-start gap-1">
            <button
              className="hover:text-slate-400"
              onClick={() => scrollToElement("intro")}
            >
              1. Intro
            </button>
            <button
              className="ml-2 hover:text-slate-400"
              onClick={() => scrollToElement("historia")}
            >
              2. Historia
            </button>
            <button
              className="ml-4 hover:text-slate-400"
              onClick={() => scrollToElement("oyn")}
            >
              3. Origen y nacimiento
            </button>
            <button
              className="ml-4 hover:text-slate-400"
              onClick={() => scrollToElement("iyj")}
            >
              4. Infancia y juventud
            </button>
            <button
              className="hover:text-slate-400"
              onClick={() => scrollToElement("galeria")}
            >
              5. Galeria
            </button>
          </ul>
        </div>

        {/* CONTENIDO PRINCIPAL DEL PERSONAJE */}
        <div className="flex h-full w-[55%] flex-col rounded-3xl bg-gray-700 p-4 shadow-2xl">
          {/* INTRO */}
          <div className="mb-10">
            <h1 id="intro" className="mb-5 text-4xl">
              Jon Snow
            </h1>
            <p>
              Jon Nieve, nacido Aegon Targaryen, es el hijo de Lyanna Stark y el
              príncipe Rhaegar Targaryen, difunto Príncipe de Rocadragón. Desde
              su infancia, Jon fue criado como el hijo bastardo de su tío Lord
              Eddard Stark, junto a sus hijos legítimos en Invernalia. Para
              escapar de su estatus de bastardo, Jon se une a la Guardia de la
              Noche y eventualmente es elegido como Lord Comandante. Sin
              embargo, más tarde es asesinado en un motín y resucitado por la
              sacerdotisa roja Melisandre. Liberado de sus votos, Jon se une a
              su prima, Sansa Stark, en la construcción de un ejército y juntos
              retoman Invernalia de la Casa Bolton, restaurando el dominio de la
              Casa Stark sobre el Norte. Poco después, Jon es nombrado Rey en el
              Norte. Sin embargo, después de capturar con éxito un espectro y
              presentarlo a los Lannister como prueba de que el ejército de los
              muertos es real, Jon declara su lealtad y la de su ejército a
              Daenerys Targaryen, la hermana de Rhaegar, y se retira como Rey en
              el Norte. Tiempo después, descubre su verdadero linaje y lucha en
              la batalla contra los Caminantes Blancos, resultando victorioso.
              Jon ayuda a Daenerys en su campaña para tomar el Trono de Hierro,
              y participa en la Batalla de Desembarco del Rey. Sin embargo,
              cuando Daenerys arrasa la capital, Jon intenta sin éxito,
              disuadirla de más destrucción, y la mata para evitar una masacre
              mayor. Tras ser juzgado, Jon es enviado al exilio con la Guardia
              de la Noche.
            </p>
          </div>
          {/* HISTORIA */}
          <div>
            <h2 id="historia" className="border-b-2 text-3xl">
              Historia
            </h2>
            <h3 id="oyn" className="my-4 text-2xl font-bold">
              Origen y nacimiento
            </h3>
            <p>
              Dieciocho años antes de la Guerra de los Cinco Reyes, el príncipe
              Rhaegar Targaryen supuestamente secuestró a Lyanna Stark de
              Invernalia, en un escándalo que llevaría al comienzo de la
              rebelión de Robert. El príncipe Rhaegar hizo disolver su
              matrimonio con la princesa Elia Martell, desposando a Lyanna.
              Rhaegar eventualmente regresó a las Tierras de los Ríos para
              pelear en la guerra, dejando a Lyanna en la Torre de la Alegría en
              Dorne, custodiada por el Lord Comandante Gerold Hightower y Ser
              Arthur Dayne de la Guardia Real. Lord Eddard Stark, el hermano de
              Lyanna, se unió a Robert Baratheon para rescatar a su hermana y
              vengar las muertes de su padre y hermano, asesinados por el padre
              de Rhaegar, el rey Aerys II Targaryen. <br /> <br />
            </p>
            <p>
              Robert finalmente mata a Rhaegar en la Batalla del Tridente,
              asegurando efectivamente su victoria en la guerra. Después del
              saqueo de Desembarco del Rey, Eddard continuó hacia el sur en
              busca de su hermana, encontrándola en la Torre de la Alegría en
              las Montañas Rojas en la frontera de Dorne. Ned y sus compañeros
              se enfrentaron a la Guardia Real, causando la muerte de todos los
              combatientes, excepto el propio Ned y Howland Reed. <br />
              <br />
            </p>
            <p>
              Después de derrotar al último miembro de la Guardia Real, Ned
              encontró a Lyanna agonizando tras dar a luz al hijo de Rhaegar.
              Desesperada por proteger la vida de su hijo recién nacido, Lyanna
              le suplicó a Ned que le prometiera que mantendría a su hijo a
              salvo, y que su verdadera identidad quedaría oculta de Robert
              Baratheon; la existencia del niño era una amenaza potencial para
              el reclamo de Robert al Trono de Hierro después de la muerte de
              los otros hijos de Rhaegar, Rhaenys y Aegon. Prometiendo mantener
              a salvo al niño, Eddard volvió a Invernalia con Jon como su propio
              hijo bastardo, criándolo junto a sus hijos legítimos. <br />
              <br />
            </p>
            <p>
              Ned decidió no usar el nombre de nacimiento de su sobrino, que
              Lyanna le reveló en sus últimos momentos, pues era un nombre
              valyrio que habría revelado su verdadera parentesco. En su lugar,
              eligió darle al bebé el nombre Jon, en honor a su gran amigo y
              mentor Lord Jon Arryn, Señor del Nido de Águilas, a quien amaba
              como a un segundo padre. El niño creció usando el apellido Nieve,
              como es habitual para los bastardos reconocidos en el Norte.
            </p>
          </div>
          {/* INFANCIA Y JUVENTUD */}
          <div>
            <h3 id="iyj" className="my-4 text-2xl font-bold">
              Infancia y juventud
            </h3>
            <p>
              Jon pasó los siguientes diecisiete años en Invernalia como el hijo
              ilegítimo de Lord Eddard, criado junto a sus hijos legítimos con
              Lady Catelyn Tully. Cuando fue presionado por el rey Robert
              Baratheon, a quien no pudo negar una respuesta, Ned inventó una
              vaga explicación de que la madre de Jon era una mujer plebeya
              llamada Wylla que conoció durante la guerra. El hijo mayor de Lady
              Catelyn, Robb, era reconocido indiscutiblemente como el heredero
              de Eddard, pero a pesar de su condición de bastardo Jon nunca fue
              tratado por Ned de manera muy diferente a sus hijos menores Bran y
              Rickon. <br />
              <br />
            </p>
            <p>
              Jon pasó los siguientes diecisiete años en Invernalia como el hijo
              ilegítimo de Lord Eddard, criado junto a sus hijos legítimos con
              Lady Catelyn Tully. Cuando fue presionado por el rey Robert
              Baratheon, a quien no pudo negar una respuesta, Ned inventó una
              vaga explicación de que la madre de Jon era una mujer plebeya
              llamada Wylla que conoció durante la guerra. El hijo mayor de Lady
              Catelyn, Robb, era reconocido indiscutiblemente como el heredero
              de Eddard, pero a pesar de su condición de bastardo Jon nunca fue
              tratado por Ned de manera muy diferente a sus hijos menores Bran y
              Rickon. <br />
              <br />
            </p>
            <p>
              Debido a su estatus de bastardo, Jon creció sintiéndose como un
              extraño en Invernalia. La asistencia de Jon a los eventos más
              formales estaba restringida, e incluso se le impedía sentarse en
              la mesa del señor con su familia para no ofender a los invitados
              importantes. No obstante, fue amado por su padre y sus hermanos,
              tuvo una educación de noble a cargo del maestre Luwin y fue
              entrenado por el maestro de armas del castillo, Ser Rodrik Cassel.
              De los niños Stark, Jon era muy amigo de Robb, dado que al ser
              aproximadamente la misma edad, eran compañeros regulares en el
              entrenamiento y la equitación. También fue cercano a Bran y
              Rickon, además de tener una rivalidad amistosa con el pupilo de
              Lord Eddard, Theon Greyjoy. Sin embargo, la relación más cercana
              de Jon era con la hija menor de Lord Stark, Arya. En contraste, la
              relación de Jon con Sansa Stark fue distante; muy parecida a su
              madre, Sansa también era distante y fría con Jon. <br />
              <br />
            </p>
          </div>
          {/* GALERIA */}
          <div id="galeria"></div>
          <Gallery images={images}></Gallery>
        </div>

        {/* DESCRIPCION LATERAL DERECHA DEL PERSONAJE: A;OS, FAMILIA, ETC */}
        <motion.div
          className="flex h-fit w-[20%] flex-col justify-start rounded-3xl bg-gray-700 shadow-2xl"
          id="personaje info"
        >
          <div className="border-b-2 pt-3 text-center text-5xl">
            <h2 className="">Jon Snow</h2>
            <img src={exampleImage} className="m-auto" width={200} alt="" />
          </div>
          {/* Informacion personal del personaje */}
          <div className="flex items-center justify-center gap-2 py-2">
            <button onClick={toggleInformation} className="text-lg">
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
                      <h3 className="font-bold">Name:</h3>Jon Snow
                    </li>

                    <li className="my-4">
                      <h3 className="font-bold">Familia:</h3>
                      <ul className="pl-10">
                        <li>
                          <p>Rhaegar Targaryen - Padre</p>
                        </li>
                        <li>
                          <p>Lyanna Stark - Madre</p>
                        </li>
                        <li>
                          <p>Viserys Targaryen - Tío</p>
                        </li>
                        <li>
                          <p>Daenerys Targaryen - Tía</p>
                        </li>
                        <li>
                          <p>Brandon Stark - Tío</p>
                        </li>
                        <li>
                          <p>Eddard Stark - Tío</p>
                        </li>
                        <li>
                          <p>Benjen Stark - Tío</p>
                        </li>
                        <li>
                          <p>Robb Stark - Primo</p>
                        </li>
                        <li>
                          <p>Sansa Stark - Prima</p>
                        </li>
                        <li>
                          <p>Arya Stark - Prima</p>
                        </li>
                        <li>
                          <p>Brandon Stark - Primo</p>
                        </li>
                        <li>
                          <p>Rickon Stark - Primo</p>
                        </li>
                      </ul>
                    </li>

                    <li className="my-4">
                      <h3 className="font-bold">Filiacion:</h3>
                      <ul className="pl-10">
                        <li>Casa Stark</li>
                        <li>Casa Targaryen</li>
                      </ul>
                    </li>

                    <li className="my-4">
                      <h3 className="font-bold">Alias:</h3>
                      <ul className="pl-10">
                        <li>Lord Nieve</li>
                        <li>El Bastardo de invernalia</li>
                        <li>Rey Cuervo</li>
                        <li>El Lobo Blanco</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </>
  );
};

export default JonSnow;
