import { useState } from "react";
import { Link } from "react-router-dom";
import bars from "../../images/icons/bars-solid.svg";
import chevron from "../../images/icons/chevron-down-solid.svg";

import logo from "../../images/logos/gameofthroneslogo.png";

const characters = [
  { name: "Jon Snow", href: "/jonsnow" },
  { name: "Arya", href: "/aryastark" },
  { name: "Sansa", href: "/sansastark" },
  { name: "Eddard", href: "/eddardstark" },
  { name: "Bran", href: "/branstark" },
  { name: "Daenerys", href: "/daenerystargaryen" },
  { name: "Rhaegar", href: "/rhaegartargaryen" },
];

function NavHomeSmall() {
  const [subIsOpen, setSubIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="absolute w-full">
      <nav className="flex items-center justify-evenly text-lg">
        <button onClick={() => setNavIsOpen(!navIsOpen)} className="h-4 w-4">
          <img src={bars} alt="" />
        </button>
        {navIsOpen && (
          <div className="absolute top-[100%] h-fit w-[95%] rounded-md bg-black">
            <ul className="flex flex-col p-4">
              <Link>Home</Link>
              <div className="flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Link to={"characters"}>Personajes</Link>
                  <button
                    onClick={() => setSubIsOpen(!subIsOpen)}
                    className="h-3 w-3 justify-self-end"
                  >
                    <img src={chevron} alt="" />
                  </button>
                </div>

                {subIsOpen && (
                  <ul className="my-3 flex flex-col border-y-2">
                    {characters.map((items) => (
                      <Link key={items.name} to={items.href}>
                        {items.name}
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
              <Link>Page3</Link>
              <Link>Page4</Link>
            </ul>
          </div>
        )}

        <Link to={"/"}>
          <img src={logo} className="w-[600px] max-md:w-[300px]" alt="" />
        </Link>

        <ul className="flex w-1/4 justify-evenly max-md:hidden">
          <Link to={"/"}>Nidea</Link>
          <Link to={"/"}>LoLos</Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavHomeSmall;
