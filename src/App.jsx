import React from "react";
import { Routes, Route } from "react-router-dom";

//components:
import Navpar from "./Bar/Navpar.jsx";
import HomePage from "./HomeFile/HomePage.jsx";
import RealEstate from "./StateFile/RealState.jsx";
import Services from "./ServicesFile/Services.jsx";
import AboutUs from "./AboutUsFile/AboutUs.jsx";
import Communication from "./CommunicationFile/Communication.jsx";
import DetailsRealState from "./StateFile/infoRealState/DetailsRealState.jsx"
import ScrollToTop from "./ScrollToTop";


//imgs:
import bgImg from "./photo/bigphoto.svg";
import Footer from "./Footer.jsx";
function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >

        <div style={{paddingTop: "20px",}}>
          <ScrollToTop />
          <Navpar />
          {/* {ROUTES} */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/realEstate" element={<RealEstate />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/Communication" element={<Communication />} />
            <Route path="/product/:id" element={<DetailsRealState />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
