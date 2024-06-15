import Characters from "../Components/Characters/Characters.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import NavCharactersResponsive from "../Components/Nav/NavCharactersResponsive.jsx";
import blackBars from "../images/icons/bars-solid-black.svg";

function CharactersPage() {
  return (
    <>
      <NavCharactersResponsive barsImage={blackBars}></NavCharactersResponsive>
      <Characters></Characters>
      <Footer></Footer>
    </>
  );
}

export default CharactersPage;
