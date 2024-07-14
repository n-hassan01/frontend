// import components
import { useEffect, useState } from "react";
import Navbar from "./Layouts/Navbar";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
// import Projects from "./components/Projects";
import Service from "./components/Services";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Works from "./components/Works";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
// api services
import { getMenuPageInfoService } from "./Services/apiServices";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    getMenuPageInfoService()
      .then((response) => {
        if (response.data.statusCode === 200) {
          setPageInfo(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  const menus = [];
  pageInfo.forEach((item) => {
    if (item.url === "#home") {
      menus.push(<Hero key="home" />);
    }
    if (item.url === "#about") {
      menus.push(<Hireme key="about" />);
    }
    if (item.url === "#educations") {
      menus.push(<Educations key="educations" />);
    }
    if (item.url === "#skills") {
      menus.push(<Skills key="skills" />);
    }
    if (item.url === "#works") {
      menus.push(<Works key="works" />);
    }
    if (item.url === "#services") {
      menus.push(<Service key="services" />);
    }
    if (item.url === "#contact") {
      menus.push(<Contact key="contact" />);
    }
  });

  return (
    <div className="">
      <Navbar></Navbar>
      {menus.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default App;
