// import components
import { useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Service from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">JOHN ALEX</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
