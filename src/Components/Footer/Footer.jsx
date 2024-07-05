import { Link } from "react-router-dom";

const links = [
  { name: "Inicio", to: "/" },
  { name: "Personajes", to: "/characters" },
  { name: "Making of GOT", to: "/makingof" },
  { name: "Valoraciones", to: "/valoraciones" },
];

const starkCharacters = [
  { name: "Jon Snow", to: "/characters/jonsnow" },
  { name: "Sansa", to: "/characters/sansastark" },
  { name: "Arya", to: "/characters/aryastark" },
  { name: "Eddard", to: "/characters/eddardstark" },
  { name: "Bran", to: "/characters/branstark" },
];

const targaryenCharacters = [
  { name: "Daenerys", to: "/characters/daenerys" },
  { name: "Rhaegar", to: "/characters/rhaegartargaryen" },
];

const lannisterCharacter = [
  { name: "Tyrion", to: "/characters/daenerys" },
  { name: "Cersei", to: "/characters/rhaegartargaryen" },
  { name: "Jaime", to: "/characters/daenerys" },
];

function Footer() {
  return (
    <footer className="flex w-full bg-[#101113b6] max-md:flex-col ">
      <nav className="flex flex-row gap-4">
        <ul className="m-0 flex flex-col justify-evenly p-4 max-md:flex-row max-md:gap-4 max-md:py-10 max-md:text-sm md:border-r-2">
          {links.map((elem) => (
            <li key={elem.name}>
              <Link className="hover:text-gray-500" to={elem.to}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="p-2 max-md:hidden">
          <h3 className="text-xl font-bold">Stark:</h3>
          {starkCharacters.map((elem) => (
            <li key={elem.name}>
              <Link className="hover:text-gray-400" to={elem.to}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="p-2 max-md:hidden">
          <h3 className="text-xl font-bold">Targaryen:</h3>
          {targaryenCharacters.map((elem) => (
            <li key={elem.name}>
              <Link className="hover:text-gray-400" to={elem.to}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="p-2 max-md:hidden">
          <h3 className="text-xl font-bold">Lannister:</h3>
          {lannisterCharacter.map((elem) => (
            <li key={elem.name}>
              <Link className="hover:text-gray-400" to={elem.to}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative w-full">
        <h5 className="absolute bottom-1 right-2 text-gray-600 max-md:right-32">
          © 2024 Fabrizio Lora
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
