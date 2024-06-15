import { useEffect, useState } from "react";
import Baratheon from "../../images/houses/baratheon.png";
import grayjoy from "../../images/houses/greyjoy.png";
import Lannister from "../../images/houses/lannister.png";
import Martell from "../../images/houses/martell.png";
import Stark from "../../images/houses/stark.png";
import Targaryen from "../../images/houses/targaryen.png";
import CharacterBannerSmall from "./CharacterBannerSmall.jsx";
import CharactersBanner from "./CharactersBanner.jsx";
import * as objects from "./CharactersObject.jsx";

function Characters() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [Lannister, Martell, Stark, Targaryen, grayjoy, Baratheon];

  return (
    <main className="overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-3 items-center justify-items-center bg-white bg-gradient-to-b from-white from-90% to-[#1e1e1e] bg-cover bg-center bg-no-repeat pb-4 max-md:pt-24 md:grid-cols-3 md:grid-rows-2">
        {images.map((element) => (
          <button key={element} className="md:w-[50%]">
            <img src={element} alt="" />
          </button>
        ))}
      </div>
      {isSmallScreen ? (
        <>
          <CharacterBannerSmall character={objects.jonSnow} />
          <CharacterBannerSmall character={objects.eddardStark} />
          <CharacterBannerSmall character={objects.branStark} />
          <CharacterBannerSmall character={objects.sansaStark} />
          <CharacterBannerSmall character={objects.ariaStark} />
          <CharacterBannerSmall character={objects.daenerys} />
          <CharacterBannerSmall character={objects.rhaegarTargaryen} />
        </>
      ) : (
        <>
          <CharactersBanner character={objects.jonSnow} right={true} />
          <CharactersBanner character={objects.eddardStark} />
          <CharactersBanner character={objects.branStark} right={true} />
          <CharactersBanner character={objects.sansaStark} />
          <CharactersBanner character={objects.ariaStark} right={true} />
          <CharactersBanner id="targaryen" character={objects.daenerys} />
          <CharactersBanner character={objects.rhaegarTargaryen} right={true} />
        </>
      )}
    </main>
  );
}

export default Characters;
