import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import ResponsiveNav from "./Components/Nav/ResponsiveNav.jsx";

function App() {
  return (
    <>
      <ResponsiveNav />
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
