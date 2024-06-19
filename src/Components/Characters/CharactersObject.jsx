import daenerysImage from "../../images/characters/Daeneryspng.png";
import ariaImage from "../../images/characters/ariapng.png";
import branImage from "../../images/characters/branpng.png";
import cerseiImage from "../../images/characters/cerceipng.png";
import eddardImage from "../../images/characters/eddardpng.png";
import jaimeImage from "../../images/characters/jaimepng.png";
import jonSnowImage from "../../images/characters/jonsnowpng3.png";
import lannisterBanner from "../../images/characters/lannisterbanner.jpg";
import rhaegarImage from "../../images/characters/rhaegarpng.png";
import sansaImage from "../../images/characters/sansapng.png";
import starkBanner from "../../images/characters/starkbanner2.jpg";
import targaryenBanner from "../../images/characters/targaryenbanner.jpg";
import tyrionImage from "../../images/characters/tyrionpng.png";

const jonSnow = {
  name: "Jon Snow",
  alias: "The Bastard of Winterfell",
  allAlias: [
    "Lord Nieve",
    "El Bastardo de invernalia",
    "Rey Cuervo",
    "El Lobo Blanco",
  ],
  filiacion: ["Casa Stark", "Casa Targaryen"],
  familia: [
    "Rhaegar Targaryen - Padre",
    "Lyanna Stark - Madre",
    "Viserys Targaryen - Tío",
    "Daenerys Targaryen - Tí",
    "Brandon Stark - Tío",
    "Eddard Stark - Tío",
    "Benjen Stark - Tío",
    "Robb Stark - Primo",
    "Sansa Stark - Prima",
    "Arya Stark - Prima",
    "Brandon Stark - Primo",
    "Rickon Stark - Primo",
  ],
  desc: "Jon Snow es el hijo bastardo de Eddard Stark, criado en Invernalia junto a los hijos legítimos de Ned. Desde joven, siente el peso de su condición de bastardo y decide unirse a la Guardia de la Noche, donde poco a poco se convierte en un líder respetado. A lo largo de la serie, Jon descubre verdades sobre su verdadero linaje que cambian el curso de su vida y el destino de los Siete Reinos.",
  image: jonSnowImage,
  banner: starkBanner,
  characterLink: "/characters/jonsnow",
};

const eddardStark = {
  name: "Eddard Snow",
  alias: "The Quiet Wolf",
  allAlias: ["Ned", "El Lobo Silencioso"],
  filiacion: ["Casa Stark"],
  familia: [
    "Rickard Stark - Padre",
    "Lyarra Stark - Madre",
    "Brandon Stark - Hermano",
    "Lyanna Stark - Hermana",
    "Benjen Stark - Hermano",
    "Catelyn Tully - Esposa",
    "Robb Stark - Hijo",
    "Sansa Stark - Hija",
    "Arya Stark - Hija",
    "Brandon Stark - Hijo",
    "Rickon Stark - Hijo",
    "Jon Nieve - Hijo bastardo",
  ],
  desc: "Eddard 'Ned' Stark es el honorable Señor de Invernalia y Guardián del Norte. Es conocido por su sentido del deber y la justicia. Tras la muerte de su mentor, Jon Arryn, Ned es llamado a Desembarco del Rey por su viejo amigo, el Rey Robert Baratheon, para servir como Mano del Rey. Sus intentos por desentrañar la verdad sobre la muerte de Jon Arryn y la legitimidad de los hijos de Robert lo llevan a un trágico destino.",
  image: eddardImage,
  banner: starkBanner,
  characterLink: "/characters/eddardstark",
};

const ariaStark = {
  name: "Arya Stark",
  alias: "The cat of the Canals",
  allAlias: [
    "Arya Cara de Caballo",
    "Comadreja",
    "Gata de los Canales",
    "Misericordia",
  ],
  filiacion: ["Casa Stark"],
  familia: [
    "Eddard Stark - Padre",
    "Catelyn Tully - Madre",
    "Robb Stark - Hermano",
    "Sansa Stark - Hermana",
    "Brandon Stark - Hermano",
    "Rickon Stark - Hermano",
    "Jon Nieve - Primo",
  ],
  desc: "Arya Stark es la hija menor de Eddard y Catelyn Stark. Desde pequeña, muestra un espíritu indomable y una habilidad para la lucha que no encajan con los roles tradicionales de las mujeres nobles. Tras la ejecución de su padre, Arya huye y comienza un largo viaje lleno de peligros y entrenamiento con los Hombres sin Rostro en Braavos, convirtiéndose en una asesina implacable con una lista de venganza.",
  image: ariaImage,
  banner: starkBanner,
  characterLink: "/characters/aryastark",
};

const sansaStark = {
  name: "Sansa Stark",
  alias: "Queen of the north",
  allAlias: ["Alayne Piedra", "El ruiseñor"],
  filiacion: ["Casa Stark", "Casa Lannister", "Casa Bolton"],
  familia: [
    "Eddard Stark - Padre",
    "Catelyn Tully - Madre",
    "Robb Stark - Hermano",
    "Arya Stark - Hermana",
    "Brandon Stark - Hermano",
    "Rickon Stark - Hermano",
    "Jon Nieve - Primo",
  ],
  desc: "Sansa Stark es la hija mayor de Eddard y Catelyn Stark. Al principio, es una joven ingenua con sueños de ser una dama y casarse con un príncipe, pero su tiempo en Desembarco del Rey y su matrimonio forzado con Tyrion Lannister la obligan a madurar rápidamente. A lo largo de la serie, Sansa se convierte en una mujer astuta y fuerte, aprendiendo a navegar los peligros y las intrigas políticas de Poniente.",
  image: sansaImage,
  banner: starkBanner,
  characterLink: "/characters/sansastark",
};

const branStark = {
  name: "Bran Stark",
  alias: "The Three-Eyed Raven",
  allAlias: [
    "Príncipe",
    "Señor de Invernalia",
    "Rey de los Ándalos y los Primeros Hombres",
    "Señor de los Seis Reinos",
    "Protector del Reino",
  ],
  filiacion: ["Casa Stark"],
  familia: [
    "Eddard Stark - Padre",
    "Catelyn Tully - Madre",
    "Robb Stark - Hermano",
    "Sansa Stark - Hermana",
    "Arya Stark - Hermana",
    "Rickon Stark - Hermano",
    "Jon Nieve - Primo",
  ],
  desc: "Brandon 'Bran' Stark es el hijo mediano de Eddard y Catelyn Stark. Tras un misterioso accidente que lo deja paralizado de la cintura para abajo, Bran comienza a experimentar visiones y sueños proféticos. Eventualmente, descubre que tiene la habilidad de warg, o entrar en la mente de otros seres vivos, y se convierte en el Cuervo de Tres Ojos, una entidad mística con la capacidad de ver el pasado, el presente y el futuro.",
  image: branImage,
  banner: starkBanner,
  characterLink: "/characters/branstark",
};

const daenerys = {
  name: "Daenerys Targaryen",
  alias: "Mother of Dragons",
  allAlias: [
    "Dany",
    "Daenerys de la Tormenta",
    "Mysha",
    "La hija del Dragón",
    "La Reina al otro lado del Mar",
    "La Reina Dragón",
    "Rompedora de Cadenas",
    "Madre de dragones",
  ],
  filiacion: ["Casa Targaryen"],
  familia: [
    "Aerys II Targaryen - Padre",
    "Rhaella Targaryen - Madre",
    "Rhaegar Targaryen - Hermano",
    "Viserys Targaryen - Hermano",
    "Drogo - Esposo",
    "Rhaego - Hijo",
  ],
  desc: "Daenerys Targaryen es la última hija de Aerys II Targaryen, el Rey Loco, derrocado durante la Rebelión de Robert. Exiliada desde niña, Daenerys crece en Essos bajo la protección de su hermano Viserys. Tras casarse con el líder dothraki Khal Drogo, comienza su transformación de una joven tímida a una poderosa reina conocida como la Madre de Dragones. Su objetivo es recuperar el Trono de Hierro y liberar a los oprimidos.",
  image: daenerysImage,
  banner: targaryenBanner,
  characterLink: "/characters/daenerystargaryen",
};

const rhaegarTargaryen = {
  name: "Rhaegar Targaryen",
  alias: "The last dragon",
  desc: "Rhaegar Targaryen fue el príncipe heredero de los Siete Reinos, hijo de Aerys II Targaryen. Era conocido por su belleza, habilidad en la batalla y su amor por la música. Su aparente secuestro de Lyanna Stark desencadenó la Rebelión de Robert, aunque más tarde se revela que los dos estaban enamorados y casados en secreto. La muerte de Rhaegar en la Batalla del Tridente marcó el comienzo del fin de la dinastía Targaryen.",
  image: rhaegarImage,
  banner: targaryenBanner,
  characterLink: "/characters/rhaegartargaryen",
};

const tyrionLannister = {
  name: "Tyrion Lannister",
  alias: "El Medio-hombre",
  desc: "Tyrion Lannister es el hijo menor de Tywin Lannister y Joanna Lannister. Es conocido por su ingenio, su capacidad de estrategia y su agudo sentido del humor, a menudo usando su inteligencia para compensar su baja estatura y su estatus como enano en una sociedad que lo discrimina. Aunque es miembro de una de las familias más poderosas de los Siete Reinos, sufre el desprecio de su padre y su hermana Cersei.",
  image: tyrionImage,
  banner: lannisterBanner,
  characterLink: "/characters/tyrionlannister",
};

const jaimeLannister = {
  name: "Jaime Lannister",
  alias: "El Matarreyes",
  desc: "Jaime Lannister, también conocido como el Matarreyes, es el hijo mayor de Tywin Lannister y el hermano gemelo de Cersei. Es un caballero altamente capacitado y miembro de la Guardia Real. Es conocido por haber asesinado al Rey Aerys II Targaryen, ganándose el apodo de 'Matarreyes'. Jaime tiene una relación incestuosa con su hermana Cersei, lo que complica aún más su ya turbio legado.",
  image: jaimeImage,
  banner: lannisterBanner,
  characterLink: "/characters/jaimelannister",
};

const cerseiLannister = {
  name: "Cersei Lannister",
  alias: "Reina Regente",
  desc: "Cersei Lannister es la hija mayor de Tywin Lannister y la hermana gemela de Jaime. Es ambiciosa, manipuladora y decidida a mantener y aumentar el poder de su familia. A lo largo de la serie, Cersei muestra una habilidad para la intriga política y un deseo implacable de proteger a sus hijos y su posición en el trono. Su relación incestuosa con Jaime y su odio hacia Tyrion son elementos centrales de su personaje.",
  image: cerseiImage,
  banner: lannisterBanner,
  characterLink: "/characters/cerseilannister",
};

export {
  ariaStark,
  branStark,
  cerseiLannister,
  daenerys,
  eddardStark,
  jaimeLannister,
  jonSnow,
  rhaegarTargaryen,
  sansaStark,
  tyrionLannister,
};
