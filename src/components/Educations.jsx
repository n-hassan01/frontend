import { useEffect, useState } from "react";
// media
// api services
import { getEducationsPageInfoService } from "../Services/apiServices";

const Educations = () => {
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    getEducationsPageInfoService()
      .then((response) => {
        if (response.data.statusCode === 200) {
          setPageInfo(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  const educations = {
    title: pageInfo.pageInfo?.title || "Educations",
    subtitle: pageInfo.pageInfo?.subtitle || "what I learn",
    contents: pageInfo.contentInfo || [],
  };

  return (
    <section id="educations">
      <div className="md:container px-5 py-14">
        <h2
          className="title"
          data-aos="fade-down"
          style={{ textAlign: "center" }}
        >
          {educations.title}
        </h2>
        <h4
          className="subtitle"
          data-aos="fade-down"
          style={{ textAlign: "center" }}
        >
          {educations.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {educations.contents.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
              // >
              style={{ maxHeight: "600px", overflow: "auto " }}
            >
              <img
                src="https://img.freepik.com/premium-vector/graduation-hat-logo-design-template-inspiration-vector-illustration_556641-1757.jpg"
                alt="..."
                className="mx-auto"
              />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
