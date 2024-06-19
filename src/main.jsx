import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AryaStark from "./Pages/Characters/AryaStark/AryaStark.jsx";
import BranStark from "./Pages/Characters/BranStark/BranStark.jsx";
import DaenerysTargaryen from "./Pages/Characters/DaenerysTargaryen/DaenerysTargaryen.jsx";
import EddardStark from "./Pages/Characters/EddardStark/EddardStark.jsx";
import JonSnow from "./Pages/Characters/jonSnow/JonSnow.jsx";
import SansaStark from "./Pages/Characters/SansaStark/SansaStark.jsx";
import CharactersPage from "./Pages/CharactersPage.jsx";
import MakingOf from "./Pages/MakingOf.jsx";
import Valoraciones from "./Pages/Valoraciones.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/characters",
    element: <CharactersPage />,
  },
  {
    path: "/characters/jonsnow",
    element: <JonSnow />,
  },
  {
    path: "/characters/eddardstark",
    element: <EddardStark />,
  },
  {
    path: "/characters/aryastark",
    element: <AryaStark />,
  },
  {
    path: "/characters/sansastark",
    element: <SansaStark />,
  },
  {
    path: "/characters/branstark",
    element: <BranStark />,
  },
  {
    path: "/characters/daenerystargaryen",
    element: <DaenerysTargaryen />,
  },
  /* {
    path: "/characters/rhaegartargaryen",
    element: <RhaegarTargaryen />,
  }, */
  {
    path: "/makingof",
    element: <MakingOf />,
  },
  {
    path: "/valoraciones",
    element: <Valoraciones />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
