import { useEffect, useState } from "react";
// import icons from react-icons
// import { BiUser } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdCall, MdOutlineFacebook } from "react-icons/md";
// import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
// import { TbSmartHome } from "react-icons/tb";
// api services
import { getWorksPageInfoService } from "../Services/apiServices";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageInfo, setPageInfo] = useState({});
  useEffect(() => {
    getWorksPageInfoService()
      .then((response) => {
        if (response.data.statusCode === 200) {
          setPageInfo(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  const works = {
    title: pageInfo.pageInfo?.title || "Works",
    subtitle: pageInfo.pageInfo?.subtitle || "what I have done",
    contents: pageInfo.contentInfo || [],
  };

  let updatedIcons = works.contents.map((media) => {
    if (media.icon === "email") {
      media.icon = GrMail;
    }
    if (media.icon === "phone") {
      media.icon = MdCall;
    }
    if (media.icon === "instagram") {
      media.icon = BsInstagram;
    }
    if (media.icon === "linekedin") {
      media.icon = FaLinkedin;
    }
    if (media.icon === "facebook") {
      media.icon = MdOutlineFacebook;
    }
    if (media.icon === "twitter") {
      media.icon = FaTwitter;
    }
    return media;
  });

  return (
    <section id="works">
      <div className="md:container px-5 pt-14">
        <h2
          className="title"
          data-aos="fade-down"
          style={{ textAlign: "center" }}
        >
          {works.title}
        </h2>
        <h4
          className="subtitle"
          data-aos="fade-down"
          style={{ textAlign: "center" }}
        >
          {works.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {works.contents.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.icon || ""} alt="..." className="h-24" />
                <div>
                  <p className="sm:text-base text-sm">{content.description}</p>
                  <br />
                  <h6>{content.title}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Works;
