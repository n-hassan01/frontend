import { useEffect, useState } from "react";
// api services
import { getFooterPageInfoService } from "../Services/apiServices";

const Footer = () => {
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    getFooterPageInfoService()
      .then((response) => {
        setPageInfo(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  return (
    <footer className="p-3 text-center">
      <h6 className="mb-3">
        <a href={pageInfo[0]?.url || ""} target="_blank">
          {pageInfo[0]?.fullName || ""}
        </a>
      </h6>
      <p>{pageInfo[0]?.description || ""}</p>
    </footer>
  );
};

export default Footer;
