import { useEffect, useState } from "react";
// media
import services_logo1 from "../assets/images/Services/logo1.png";
// api services
import { getServicesPageInfoService } from "../Services/apiServices";

const Services = () => {
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    getServicesPageInfoService()
      .then((response) => {
        setPageInfo(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);
  console.log(pageInfo);

  const title = pageInfo[0]?.pageTitle || "";
  const subtitle = pageInfo[0]?.pageSubtitle || "";

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {pageInfo.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
              // >
              style={{ maxHeight: "600px", overflow: "auto " }}
            >
              {/* <img src={content.logo} alt="..." className="mx-auto" /> */}
              <img src={services_logo1} alt="..." className="mx-auto" />
              {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-gear" /> */}
              <h6 className="my-3">{content.contentTitle}</h6>
              <p className="leading-7">{content.contentDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
