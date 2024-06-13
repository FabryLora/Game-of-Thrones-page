import Characters from "../Components/Characters/Characters.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import NavCharactersResponsive from "../Components/Nav/NavCharactersResponsive.jsx";

function CharactersPage() {
  return (
    <>
      <NavCharactersResponsive></NavCharactersResponsive>
      <Characters></Characters>
      <Footer></Footer>
    </>
  );
}

export default CharactersPage;
