import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";
import YouCanBuy from "./components/YouCanBuy";
import Description from "./components/Description";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReleatedProduct from "./components/ReleatedProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <HeroSection />
      <YouCanBuy />
      <Description />
      <ReleatedProduct />
      <Footer />
    </>
  );
}

export default App;
