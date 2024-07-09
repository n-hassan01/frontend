import emailjs from "@emailjs/browser";
import { createElement, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import icons from react-icons
// import { BiUser } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdCall, MdOutlineFacebook } from "react-icons/md";
// import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
// import { TbSmartHome } from "react-icons/tb";
// api services
import { getContactPageInfoService } from "../Services/apiServices";

const Contact = () => {
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  const [pageInfo, setPageInfo] = useState({});
  useEffect(() => {
    getContactPageInfoService()
      .then((response) => {
        setPageInfo(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  const contact = {
    title: pageInfo.pageInfo?.title || "",
    subtitle: pageInfo.pageInfo?.subtitle || "",
    social_media: pageInfo.contentInfo || [],
  };

  let updatedIcons = contact.social_media.map((media) => {
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
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins"
                  href={content.description}
                  target="_blank"
                >
                  {content.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
