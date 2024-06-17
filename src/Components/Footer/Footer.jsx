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

function Footer() {
  return (
    <footer className="flex w-full bg-[#101113b6]">
      <nav className="flex flex-row gap-4">
        <ul className="m-0 flex flex-col justify-evenly border-r-2 p-4">
          {links.map((elem) => (
            <li key={elem.name}>
              <Link className="hover:text-gray-500" to={elem.to}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="p-2">
          <h3 className="text-xl font-bold">Stark:</h3>
          {starkCharacters.map((elem) => (
            <li key={elem.name}>
              <Link className="hover:text-gray-400" to={elem.to}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="p-2">
          <h3 className="text-xl font-bold">Targaryen:</h3>
          {targaryenCharacters.map((elem) => (
            <li key={elem.name}>
              <Link className="hover:text-gray-400" to={elem.to}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
