import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
// import Founders from "../components/Founders";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {/* <Founders /> */}

      <Services />
      <WhyChooseUs />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;