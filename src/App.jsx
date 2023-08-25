import "./App.css";
import BrandSlider from "./components/BrandSlider";
import Tracks from "./components/Tracks/Tracks";
import Judges from "./components/Judges";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import KickStart from "./components/KickStart";
import Prizes from "./components/Prizes";
import dot from "./assets/footer_bg.png";
import bannerVideo from "../src/assets/bacgroundVideo.mp4";

const App = () => {
  return (
    <div>
      <div className="bannerContainer">
        <video loop autoPlay muted className="bannerVideo">
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <Header />
        <Banner />
      </div>
      <KickStart />
      <BrandSlider />
      <Prizes />
      <Tracks />
      <BrandSlider />
      <Judges />
      <Support />
      <div>
        <img className="img-fluid w-100" src={dot} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
