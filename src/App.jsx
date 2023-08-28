import React, { useEffect } from "react";
import MyNavbar from "./Navbar";
import Myname from "./Myname";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";
import Resume from "./Resume"
import Contact from "./Contact"
import AOS from "aos";
import "aos/dist/aos.css";
import Technology from "./technology";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <MyNavbar />
      <Myname />
    
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 className="heading">Portfolio</h1>
        <h2 className="subheading">YouTodo</h2>
        <Portfolio />
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="subheading">YouTodo</h2>
        <Portfolio />
      </div>
      <div data-aos="fade-up" data-aos-duration="2000">
        <h2 className="subheading">YouTodo</h2>
        <Portfolio />
      </div>
      <div data-aos="fade-up" data-aos-duration="2000">
      <Aboutme />
      <Resume />
      <Footer />
      </div>
      

    </div>
  );
}

export default App;
