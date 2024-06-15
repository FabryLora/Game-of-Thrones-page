import daenerysImage from "../../images/characters/Daeneryspng.png";
import ariaImage from "../../images/characters/ariapng.png";
import branImage from "../../images/characters/branpng.png";
import eddardImage from "../../images/characters/eddardpng.png";
import jonSnowImage from "../../images/characters/jonsnowpng3.png";
import rhaegarImage from "../../images/characters/rhaegarpng.png";
import sansaImage from "../../images/characters/sansapng.png";
import starkBanner from "../../images/characters/starkbanner2.jpg";
import targaryenBanner from "../../images/characters/targaryenbanner.jpg";

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
  characterLink: "characters/jonsnow",
};

const eddardStark = {
  name: "Eddard Snow",
  alias: "The Quiet Wolf",
  desc: "Eddard 'Ned' Stark es el honorable Señor de Invernalia y Guardián del Norte. Es conocido por su sentido del deber y la justicia. Tras la muerte de su mentor, Jon Arryn, Ned es llamado a Desembarco del Rey por su viejo amigo, el Rey Robert Baratheon, para servir como Mano del Rey. Sus intentos por desentrañar la verdad sobre la muerte de Jon Arryn y la legitimidad de los hijos de Robert lo llevan a un trágico destino.",
  image: eddardImage,
  banner: starkBanner,
  characterLink: "characters/eddardstark",
};

const ariaStark = {
  name: "Arya Stark",
  alias: "The cat of the Canals",
  desc: "Arya Stark es la hija menor de Eddard y Catelyn Stark. Desde pequeña, muestra un espíritu indomable y una habilidad para la lucha que no encajan con los roles tradicionales de las mujeres nobles. Tras la ejecución de su padre, Arya huye y comienza un largo viaje lleno de peligros y entrenamiento con los Hombres sin Rostro en Braavos, convirtiéndose en una asesina implacable con una lista de venganza.",
  image: ariaImage,
  banner: starkBanner,
  characterLink: "characters/aryastark",
};

const sansaStark = {
  name: "Sansa Stark",
  alias: "Queen of the north",
  desc: "Sansa Stark es la hija mayor de Eddard y Catelyn Stark. Al principio, es una joven ingenua con sueños de ser una dama y casarse con un príncipe, pero su tiempo en Desembarco del Rey y su matrimonio forzado con Tyrion Lannister la obligan a madurar rápidamente. A lo largo de la serie, Sansa se convierte en una mujer astuta y fuerte, aprendiendo a navegar los peligros y las intrigas políticas de Poniente.",
  image: sansaImage,
  banner: starkBanner,
  characterLink: "characters/sansastark",
};

const branStark = {
  name: "Bran Stark",
  alias: "The Three-Eyed Raven",
  desc: "Brandon 'Bran' Stark es el hijo mediano de Eddard y Catelyn Stark. Tras un misterioso accidente que lo deja paralizado de la cintura para abajo, Bran comienza a experimentar visiones y sueños proféticos. Eventualmente, descubre que tiene la habilidad de warg, o entrar en la mente de otros seres vivos, y se convierte en el Cuervo de Tres Ojos, una entidad mística con la capacidad de ver el pasado, el presente y el futuro.",
  image: branImage,
  banner: starkBanner,
  characterLink: "characters/branstark",
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
  characterLink: "characters/daenerystargaryen",
};

const rhaegarTargaryen = {
  name: "Rhaegar Targaryen",
  alias: "The last dragon",
  desc: "Rhaegar Targaryen fue el príncipe heredero de los Siete Reinos, hijo de Aerys II Targaryen. Era conocido por su belleza, habilidad en la batalla y su amor por la música. Su aparente secuestro de Lyanna Stark desencadenó la Rebelión de Robert, aunque más tarde se revela que los dos estaban enamorados y casados en secreto. La muerte de Rhaegar en la Batalla del Tridente marcó el comienzo del fin de la dinastía Targaryen.",
  image: rhaegarImage,
  banner: targaryenBanner,
  characterLink: "characters/rhaegartargaryen",
};

export {
  ariaStark,
  branStark,
  daenerys,
  eddardStark,
  jonSnow,
  rhaegarTargaryen,
  sansaStark,
};
