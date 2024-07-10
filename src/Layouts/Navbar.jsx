import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
// api services
import { getMenuPageInfoService } from "../Services/apiServices";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    getMenuPageInfoService()
      .then((response) => {
        setPageInfo(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={30} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {pageInfo.map((item, i) => (
          <a
            href={item.url}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {/* {createElement(item.icon)} */}
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
