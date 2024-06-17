import Footer from "../Components/Footer/Footer.jsx";
import NavCharactersResponsive from "../Components/Nav/NavCharactersResponsive.jsx";
import costumes from "../images/costumes.jpg";
import micheleemilia from "../images/emiliamichele.jpg";
import bars from "../images/icons/bars-solid.svg";
import makingof from "../images/makingof2.jpg";
import michele from "../images/michelegala.jpg";
import ramin from "../images/ramin.jpg";
import ramincompo from "../images/ramincompo.webp";
import ramincompo2 from "../images/ramincompo2.jpg";
import special1 from "../images/special1.jpg";
import special2 from "../images/special2.jpg";
import steaveandjoe from "../images/steveandjoe2.jpg";
function MakingOf() {
  return (
    <>
      <main className="bg-white">
        <NavCharactersResponsive
          barsImage={bars}
          aditionalStylesNew={"bg-black"}
        ></NavCharactersResponsive>
        {/* PRESENTACION */}
        <div
          className="h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${makingof})` }}
        >
          <div className="flex h-screen items-center justify-center bg-[rgba(0,0,0,0.7)]">
            <div className="flex flex-col items-center">
              <h3 className="text-6xl text-white max-md:text-center max-md:text-5xl">
                Making of Game of Thrones
              </h3>
              <p className="text-2xl max-md:text-xl">
                music, cloth & visual effects
              </p>
            </div>
          </div>
        </div>

        {/* CLOTHING */}
        <div className="mt-7 flex flex-col items-center font-lora">
          <div className="mb-12">
            <h2 className="text-4xl text-black max-md:text-center">
              Michele Clapton: La diseñadora detrás del impactante vestuario de
              Game Of Thrones
            </h2>
          </div>
          <div className="grid w-[75%] grid-cols-2 grid-rows-1 rounded-md shadow-2xl  max-md:flex max-md:w-full max-md:flex-col">
            <div className="flex flex-col items-center bg-white max-md:order-2">
              <div className="p-6 text-black">
                <h2 className="text-4xl">Michele Clapton</h2>
                <p className="mb-10 text-xl">Cloth designer</p>
                <p className="text-lg">
                  Michele Clapton es una diseñadora de vestuario británica. Ganó
                  en los Premios BAFTA por la serie de televisión de cuatro
                  partes The Devil&apos;s Whore en la categoría de Mejor Diseño
                  de Vestuario.
                  <br /> <br />
                  Ganó un premio Emmy por los trajes en la exitosa serie de HBO
                  Game of Thrones en 2012. Continuó ganando de nuevo en 2014 y
                  2016.
                  <br /> <br />
                  En 2016, comenzando con la temporada 6 de la épica serie de
                  fantasía de HBO Game of Thrones, April Ferry asumió las
                  funciones de Clapton como la nueva diseñadora de vestuario
                  para la mayoría de la sexta temporada. Clapton regresó más
                  tarde a la serie como diseñadora de vestuario para la séptima
                  temporada.
                  <br /> <br />
                  En 2021, Fabergé anunció una asociación con Game of Thrones.
                  Michele Clapton fue invitada a co-diseñar un objeto único en
                  forma de huevo Fabergé x Game of Thrones, simbólico de los
                  huevos de dragón de Daenerys, mientras entrelazaba sutiles
                  referencias a sus trajes destacados que celebran el paisaje a
                  su alrededor y su evolución en la trama. Las decisiones de
                  diseño están informadas por el viaje de Daenerys desde
                  exiliada huérfana hasta monarca conquistadora y su continua
                  búsqueda del Trono de Hierro. El huevo se vendió a un
                  comprador privado por 2.2 millones de dólares estadounidenses.
                  <br /> <br />
                  Tras el éxito del objeto en forma de huevo, Fabergé y Game of
                  Thrones continuaron trabajando con Michele en una nueva
                  colección de alta joyería de edición limitada, que se lanzó en
                  un evento exclusivo en Dubái.
                </p>
              </div>
            </div>

            <div className="flex items-center max-md:order-1">
              <img src={michele} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center font-lora text-black">
          <div className="grid w-[75%] grid-cols-2 grid-rows-2 shadow-2xl max-md:flex max-md:w-full max-md:flex-col">
            <div className="flex items-center max-md:order-1">
              <img src={micheleemilia} alt="" />
            </div>
            <div className="flex items-center p-5 text-lg max-md:order-2">
              <p>
                Ningún complemento es elegido al azar. Ninguno de los accesorios
                o los detalles de bordado o joyería que lucen los actores es
                arbitrario. Cada costura contribuye a contar la historia de los
                personajes, sus orígenes, las dificultades que tuvieron que
                atravesar y cómo se proyectan en relación con sus pares. Para
                definir la imagen y el estilo que identificaría a las familias
                nobles, la diseñadora realizó una investigación antropológica,
                eligiendo telas y colores en base a las tinturas naturales de
                las distintas locaciones, el clima, la psicología del personaje,
                su contexto social y su estatus. Por ejemplo, Catelyn Stark
                (Michelle Fairley) se adaptó al estilo del norte, de gamas
                grisáceas y amarronadas, a las pieles que, vale aclarar, son
                sintéticas, sin abandonar las tonalidades azules, que recuerdan
                a Riverrun. Los trajes de los Lannisters, por el contrario,
                están confeccionados en telas más livianas, ideales para el
                clima de King’s Landing, y mantienen una influencia
                renacentista, de formas más orgánicas, con el rojo y el oro como
                emblemas.
              </p>
            </div>
            <div className="flex items-center p-5 text-lg max-md:order-4">
              <p>
                Lo más importante para Clapton es mantener la verosimilitud, que
                se alcanza en los detalles más nimios. Hay un dato que
                posiblemente muchos fans no conozcan: aunque no se vean,
                Daenerys Targaryen (Emilia Clarke) siempre viste pantalones
                debajo de sus vestidos; los mismos pantalones desde la primera
                temporada. La razón es simple: la Khaleesi, a diferencia de
                Cersei, debe estar siempre lista para correr o montar un
                caballo. Otra curiosidad es que las armas, las armaduras y los
                trajes de los personajes que no provienen de familias nobles son
                perfeccionados por un equipo de diez personas que se encargan de
                avejentarlos. “Usan de todo: pintura, fuego, cera, estampados,
                escultura... es un arte aparte”, le cuenta Clapton a La Nación
                revista. Según la diseñadora, las escenas de batallas son las
                más complejas y las que requieren más trabajo y presupuesto, ya
                que, en principio, más allá de los personajes principales, los
                trajes deben acondicionarse al contexto con barro, sangre o
                marcas de guerra. Muchas veces, por el desgaste al que se expone
                la vestimenta, se producen duplicados e incluso triplicados.
              </p>
            </div>
            <div className="flex items-center max-md:order-3">
              <img src={costumes} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center">
          <iframe
            className="h-[700px] w-[1385px] max-md:h-[15rem] max-md:w-screen"
            src="https://www.youtube.com/embed/THH_UB-WRCU"
            title="Inside Game of Thrones: A Story in Cloth (HBO)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        {/* MUSIC */}

        <div className="mt-20 flex flex-col items-center font-lora">
          <div className="mb-12 flex justify-center text-center">
            <h2 className="w-[60%] text-4xl text-black max-md:w-[90%] max-md:text-3xl">
              De Game of Thrones a las escenas de amor de Idris Elba, el
              compositor Ramin Djawadi es responsable de la música que hace
              latir tu corazón.
            </h2>
          </div>
          <div className="grid w-[75%] grid-cols-2 grid-rows-1 rounded-md shadow-2xl max-md:flex max-md:w-full max-md:flex-col">
            <div className="flex flex-col items-center justify-start bg-white max-md:order-2">
              <div className="p-6 text-black">
                <h2 className="text-4xl">Ramin Djawadi</h2>
                <p className="mb-10 text-xl">Compositor</p>
                <p className="text-lg">
                  Cuando el músico Ramin Djawadi nació, Alemania todavía estaba
                  dividida en dos. Este artista alemán de ascendencia iraní se
                  ha convertido en la última década en uno de los compositores
                  más exitosos de Hollywood por su trabajo en cintas como Iron
                  Man (2008) por la que fue nominado al Grammy y Pacific Rim
                  (2013). Sin embargo, su nombre resuena en hogares de todo el
                  mundo gracias a la banda sonora de Game of Thrones, la serie
                  de televisión más popular del momento. <br /> <br />
                  La recién concluida sexta temporada de Game of Thrones ha sido
                  favorecida por audiencia y crítica, en particular su último
                  episodio, “Los vientos de invierno”, que cerró esta temporada
                  con momentos espectaculares que dejaron al público
                  boquiabierto. La calidad de esta serie es innegable: su elenco
                  es de primera, sus escritores se han liberado de las ataduras
                  de la adaptación literaria, sus productores superan todas las
                  expectativas y sus directores particularmente Miguel Sapochnik
                  han entregado episodios excelentes y de manufactura compleja.
                  Un show tan completo requería de una mano maestra para
                  infundir personalidad a su banda sonora: Ramin Djawadi. <br />{" "}
                  <br />
                  Ramin Djawadi se graduó del Berklee College of Music en 1998 y
                  a los pocos años fue reclutado por el legendario compositor
                  Hans Zimmer para Remote Control Productions, su compañía
                  especializada en música para películas. Influido por los
                  románticos del siglo XIX Brahms y Tchaikovsky parecen ser sus
                  preferidos, Djawadi se ha encargado durante seis años de
                  trazar las melodías, pautas y temas que realzan las atmósferas
                  de Game of Thrones.
                </p>
              </div>
            </div>

            <div className="flex items-center max-md:order-1">
              <img className="w-full" src={ramin} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center font-lora text-black">
          <div className="grid w-[75%] grid-cols-2 grid-rows-2 shadow-2xl max-md:flex max-md:w-full max-md:flex-col">
            <div className="flex items-center max-md:order-1">
              <img src={ramincompo} alt="" />
            </div>
            <div className="flex items-center p-5 text-lg max-md:order-2">
              <p>
                Cada pieza dentro de una banda sonora compuesta por Ramin
                Djawadi cuenta con peculiaridades que la separan del resto, sin
                embargo mantiene la coherencia del conjunto gracias a una
                cuidadosamente elegida paleta de ritmos e instrumentos. En
                Pacific Rim, por ejemplo, las cuerdas y un coro de voces juegan
                un papel fundamental para establecer atmósferas; no obstante, es
                su uso de guitarras eléctricas, sintetizadores y sonidos más
                cercanos al rock lo que concreta la personalidad de este
                soundtrack. <br /> <br />
                El eclecticismo musical de Ramin Djawadi en Game of Thrones
                puede apreciarse en las melodías correspondientes a personajes
                específicos como el de Danaerys Targaryen, cuyos ritmos de
                influencia armenia hacen eco de los terrenos y etnias con los
                que esta protagonista se encuentra. Otro ejemplo es “The Rains
                of Castamere” tema correspondiente a la familia Lannister,
                canción inspirada en letras provenientes de los libros de George
                R.R. Martin, cuya oscura melodía en diferentes versiones ya es
                un clásico de esta serie.
              </p>
            </div>
            <div className="flex items-center p-5 text-lg max-md:order-4">
              <p>
                Es imposible dejar de lado el tema principal de Game of Thrones.
                Acompañado por un montaje visual que adelanta los movimientos
                geográficos del episodio sobre un mapa animado, este track ha
                inspirado cientos de reversiones disponibles en línea, en una
                amplia variedad de géneros. De acuerdo con una entrevista de
                Ramin Djawadi en el podcast Song Exploder, lo primero que el
                compositor escribió para este tema fue el riff central, tocado
                por instrumentos de cuerda, y construyó el resto a su alrededor.
                Su inspiración para la estructura de esta melodía vino de las
                intrigas y traiciones de las que eran sujetos los protagonistas
                de la serie: mediante un juego de capas, tonalidades e
                instrumentos con el chelo al centro pues “es oscuro, y eso es
                perfecto para el show”, Djawadi evoca el mismo espíritu de Game
                of Thrones en un tema icónico.
              </p>
            </div>
            <div className="flex items-center max-md:order-3">
              <img src={ramincompo2} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center">
          <iframe
            className="h-[700px] w-[1385px] max-md:h-[15rem] max-md:w-screen"
            src="https://www.youtube.com/embed/rSMO4pHe3HE"
            title="Inside Game of Thrones: A Story in Score (HBO)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        {/* VISUAL EFFECTS */}

        <div className="mt-20 flex flex-col items-center font-lora">
          <div className="mb-12 flex justify-center text-center">
            <h2 className="w-[60%] text-4xl text-black max-md:w-[90%] max-md:text-3xl">
              Cómo los artistas de efectos visuales de &apos;Game of
              Thrones&apos; Steve Kullback y Joe Bauer derribaron el Muro
            </h2>
          </div>
          <div className="grid w-[75%] grid-cols-2 grid-rows-1 rounded-md shadow-2xl max-md:flex max-md:w-full max-md:flex-col">
            <div className="flex flex-col items-center justify-start bg-white max-md:order-2">
              <div className="p-6 text-black">
                <h2 className="text-4xl">Steve Kullback & Joe Bauer</h2>
                <p className="mb-10 text-xl">Visual Effects Artists</p>
                <p className="text-lg">
                  Habiendo pasado por siete temporadas cada vez más audaces de
                  la serie insignia de HBO, Game of Thrones, el productor de
                  efectos visuales Steve Kullback siempre mira una nueva
                  temporada desde la misma perspectiva: “Dios, ¿cómo diablos voy
                  a hacer esto?” Trabajando con los creativos sin restricciones
                  David Benioff y D.B. Weiss, junto con el supervisor de VFX Joe
                  Bauer, los colaboradores tienden a llegar a la misma
                  conclusión sobre el camino por delante: “Bueno, eso es
                  increíble, pero obviamente es imposible de producir”. Y, sin
                  embargo, el innovador equipo de Game of Thrones sigue
                  adelante. <br />
                  <br />
                  Con cada nueva temporada, Kullback y Bauer han visto duplicar
                  el volumen y la complejidad de su trabajo, incluso cuando la
                  cantidad de episodios por temporada sigue disminuyendo. “La
                  frase de Steve es que el trabajo se duplica en relación con el
                  tamaño de los dragones, que también se duplican de tamaño de
                  una temporada a otra, hasta la Temporada 7”, explica Bauer.{" "}
                  <br /> <br />
                  En la Temporada 7, los dragones de Dany están en plena fuerza
                  de fuego, causando estragos en la gente de Westeros. También
                  están presentes esta temporada los osos polares zombies,
                  secuencias de acción importantes en los mares y un
                  enfrentamiento aterrador entre Jon Snow y el Rey de la Noche
                  en un lago congelado. <br /> <br />
                  Pero quizás lo más notable de todo, y lo más significativo en
                  sus implicaciones para la temporada final de la serie, es ese
                  momento final en &quot;The Dragon and the Wolf&quot;, cuando
                  un dragón zombie derriba el Muro. Fue solo a través de la
                  combinación de fotografía real tomada en Islandia, modelado
                  digital y simulaciones complejas que Kullback y Bauer pudieron
                  llevar a cabo este momento transformador.
                </p>
              </div>
            </div>

            <div className="flex items-center max-md:order-1">
              <img className="w-full" src={steaveandjoe} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center text-center">
          <h3 className="w-[65%] font-lora text-2xl text-black max-md:w-[90%] max-md:text-3xl">
            Después de temporadas de gran anticipación, los dragones de Dany
            finalmente están en el centro de atención esta temporada. ¿Cuál ha
            sido el proceso para llevar a la vida a los dragones y sus
            secuencias de aliento de fuego?
          </h3>
        </div>

        <div className="mt-10 flex flex-col items-center font-lora text-black">
          <div className="grid w-[75%] grid-cols-2 grid-rows-2 shadow-2xl max-md:flex max-md:w-full max-md:flex-col">
            <div className="flex items-center max-md:order-1">
              <img src={special1} alt="" />
            </div>
            <div className="flex items-center p-5 text-lg max-md:order-2">
              <p>
                <span className="font-bold">Bauer</span>: Lo primero que hacemos
                es hacer un pre-viz, una caricatura de la cobertura del
                episodio. Vamos a los lugares donde estamos filmando, y hacemos
                modelos digitales de esos lugares por varios medios, y luego lo
                bloqueamos basándonos en storyboards o en consulta con los
                directores, reuniendo toda la información que conocemos en ese
                momento y luego contando visualmente la historia, en gran medida
                sin tener en cuenta cómo lo vamos a hacer. Solo como haciendo
                &quot;la película deseada&quot;. <br /> <br />
                Luego, empezamos a descomponerlo en partes. Lo que eso termina
                siendo en el set es ya sea una cámara volando sobre un cable que
                todos saben que se supone que es el dragón o un cono de
                estacionamiento alto en una roca en algún lugar. Cuando llegamos
                al escenario, puede ser un poste de 15 pies con una bola en la
                parte superior, o hemos cortado con láser parte de la cabeza del
                dragón, o la mayor parte de la cara, y la hemos puesto en un
                poste. Este año, esas son las técnicas. Es cualquier método que
                haga que las líneas de visión sean correctas, básicamente.{" "}
                <br /> <br />
              </p>
            </div>
            <div className="flex items-center p-5 text-lg max-md:order-4">
              <p>
                <span className="font-bold">Kullback</span>: Una vez, en la
                Temporada 3, cuando estábamos filmando en Split [Croacia] en el
                Palacio de Diocleciano, que servía como guardería de dragones,
                Dany estaba atrayendo a los dragones hacia abajo. La cámara
                seguía a Joe y a mí marioneteando cabezas de dragones de tamaño
                real, que estaban cortadas con láser. Ahora, tenemos algunas
                herramientas bastante sofisticadas para el seguimiento de
                movimiento posicional en tiempo real con Ncam, para poder usar
                los modelos de pre-viz. A veces, la actuación del dragón más
                completamente animada se integra en una escena, de modo que los
                operadores pueden seguir realmente la actuación,
                independientemente de dónde esté colocada la cámara. <br />{" "}
                <br />
                Una de las cosas que Joe ha aportado, que probablemente sea
                nuestra arma secreta, es que filmamos una cantidad enorme de
                fotografía—de elementos orgánicos, muy reales. Volviendo a la
                Temporada 5, cuando Dany es rescatada en el foso de combate,
                hablamos sobre cómo proceder con el fuego, ahora que somos
                grandes dragones malos que escupen fuego y eliminan a la gente.
                Joe dijo: &quot;Obviamente, lo que necesitamos hacer es
                pre-animar los dragones y aplicar la animación a una grúa de
                control de movimiento, poner un lanzallamas en ella, y disparar
                a la [escenografía] de verdad&quot;.
              </p>
            </div>
            <div className="flex items-center max-md:order-3">
              <img src={special2} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center pb-10">
          <iframe
            className="h-[700px] w-[1385px] max-md:h-[15rem] max-md:w-screen"
            src="https://www.youtube.com/embed/fvYv3OGaAvo"
            title="Inside Game of Thrones: A Story in Special Effects (HBO)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MakingOf;
