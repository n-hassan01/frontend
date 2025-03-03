import { useEffect, useState } from "react";
// media
import Hireme_person from "../assets/images/Hireme/person.png";
import Hireme_person2 from "../assets/images/Hireme/person2.png";
// api services
import { getHiremePageInfoService } from "../Services/apiServices";

const Hireme = () => {
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    getHiremePageInfoService()
      .then((response) => {
        if (response.data.statusCode === 200) {
          setPageInfo(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  const hireme = {
    title: pageInfo[0]?.pageTitle || "About me",
    subtitle: pageInfo[0]?.pageSubtitle || "who I am",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: pageInfo[0]?.description || "",
    btnText: "Download CV",
    btnAction: `../../src/assets/cv/${pageInfo[0]?.cv}` || "",
  };

  return (
    <section className="bg-bg_light_primary" id="about">
      <div className="md:container px-5 pt-14">
        <h2
          className="title"
          data-aos="fade-down"
          style={{ textAlign: "center" }}
        >
          {hireme.title}
        </h2>
        <h4
          className="subtitle"
          data-aos="fade-down"
          style={{ textAlign: "center" }}
        >
          {hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              <a
                href={hireme.btnAction}
                download={pageInfo[0]?.cv || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hireme.btnText}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
