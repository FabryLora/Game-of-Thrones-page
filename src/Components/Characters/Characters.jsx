import { useEffect, useRef, useState } from "react";
import lannisterInitialBanner from "../../images/characters/initiallannisterbanner.jpg";
import initialBanner from "../../images/characters/initialstarkbanner.jpg";
import initialTargaryen from "../../images/characters/initialtargaryenbanner.jpg";
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

  const lanRef = useRef(null);
  const starkRef = useRef(null);
  const targaRef = useRef(null);
  const marRef = useRef(null);
  const grayRef = useRef(null);
  const baraRef = useRef(null);

  const scrollToElement = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const houses = [
    { src: Lannister, ref: lanRef },
    { src: Martell, ref: marRef },
    { src: Stark, ref: starkRef },
    { src: Targaryen, ref: targaRef },
    { src: grayjoy, ref: grayRef },
    { src: Baratheon, ref: baraRef },
  ];

  return (
    <main className="overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-3 items-center justify-items-center bg-white bg-gradient-to-b from-white from-90% to-[#1e1e1e] bg-cover bg-center bg-no-repeat pb-4 max-md:pt-24 md:grid-cols-3 md:grid-rows-2">
        {houses.map((element) => (
          <button
            key={element.ref}
            onClick={() => scrollToElement(element.ref)}
            className="md:w-[50%]"
          >
            <img src={element.src} alt="" />
          </button>
        ))}
      </div>
      {isSmallScreen ? (
        <>
          <div
            ref={starkRef}
            className="h-[200px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${initialBanner})` }}
          >
            <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
              <h2 className="text-4xl">Casa Stark</h2>
            </div>
          </div>
          <CharacterBannerSmall character={objects.jonSnow} />
          <CharacterBannerSmall character={objects.eddardStark} />
          <CharacterBannerSmall character={objects.branStark} />
          <CharacterBannerSmall character={objects.sansaStark} />
          <CharacterBannerSmall character={objects.ariaStark} />
          <div
            ref={targaRef}
            className="h-[200px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${initialTargaryen})` }}
          >
            <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
              <h2 className="text-4xl">Casa Targaryen</h2>
            </div>
          </div>
          <CharacterBannerSmall character={objects.daenerys} />
          <CharacterBannerSmall character={objects.rhaegarTargaryen} />
          <div
            ref={lanRef}
            className="h-[200px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${lannisterInitialBanner})` }}
          >
            <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
              <h2 className="text-4xl">Casa Lannister</h2>
            </div>
          </div>
          <CharacterBannerSmall character={objects.tyrionLannister} />
          <CharacterBannerSmall character={objects.cerseiLannister} />
          <CharacterBannerSmall character={objects.jaimeLannister} />
        </>
      ) : (
        <>
          <div
            ref={starkRef}
            className="h-[383px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${initialBanner})` }}
          >
            <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
              <h2 className="text-5xl">Casa Stark</h2>
            </div>
          </div>
          <CharactersBanner character={objects.jonSnow} right={true} />
          <CharactersBanner character={objects.eddardStark} />
          <CharactersBanner character={objects.branStark} right={true} />
          <CharactersBanner character={objects.sansaStark} />
          <CharactersBanner character={objects.ariaStark} right={true} />
          <div
            ref={targaRef}
            className="h-[383px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${initialTargaryen})` }}
          >
            <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
              <h2 className="text-5xl">Casa Targaryen</h2>
            </div>
          </div>
          <CharactersBanner id="targaryen" character={objects.daenerys} />
          <CharactersBanner character={objects.rhaegarTargaryen} right={true} />
          <div
            ref={lanRef}
            className="h-[383px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${lannisterInitialBanner})` }}
          >
            <div className="flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
              <h2 className="text-5xl">Casa Lannister</h2>
            </div>
          </div>
          <CharactersBanner
            id="targaryen"
            character={objects.tyrionLannister}
          />
          <CharactersBanner character={objects.cerseiLannister} right={true} />
          <CharactersBanner id="targaryen" character={objects.jaimeLannister} />
        </>
      )}
    </main>
  );
}

export default Characters;
