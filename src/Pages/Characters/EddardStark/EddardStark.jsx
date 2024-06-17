import { eddardStark } from "../../../Components/Characters/CharactersObject.jsx";
import NavCharactersResponsive from "../../../Components/Nav/NavCharactersResponsive.jsx";
import whiteBars from "../../../images/icons/bars-solid.svg";
import CharacterDesc from "../../CharacterDesc.jsx";
import CharactersMainContent from "../../CharactersMainContent.jsx";
import eddardStarkInfo from "./EddardStarkInfo.jsx";

const EddardStark = () => {
  return (
    <>
      <NavCharactersResponsive
        aditionalStyles={"max-md:bg-black max-md:rounded"}
        barsImage={whiteBars}
      />
      <main className="flex justify-evenly bg-[url('./images/patron3.jpg')] bg-fixed pt-10 font-gothic max-md:flex-col max-md:items-center max-md:pt-28">
        <CharactersMainContent charac={eddardStarkInfo} />
        <CharacterDesc char={eddardStark} />
      </main>
    </>
  );
};

export default EddardStark;
