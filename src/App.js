import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Infos/Info";
import Menu from "./components/Menu/Menu";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Info />
      <Grid />
      <Footer />
    </>
  );
}

export default App;
