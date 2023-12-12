//Node imports
import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap-icons/font/bootstrap-icons.scss";

//Font imports
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

//Style imports
import "/src/style/index.scss";
import "/src/style/glassy.scss";

//Component imports
import Header from "/src/Header.jsx";
import AboutContainer from "/src/AboutContainer.jsx";
import IconLink from "/src/components/IconLink.jsx";
import NavigationBar from "/src/components/NavigationBar.jsx";
import ExperiencePlate from "/src/components/ExperiencePlate.jsx";

//Dummy data import
import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <AboutContainer data={jsonData} />
      <NavigationBar
        navList={[
          { text: "Work", href: "" },
          { text: "Projects", href: "" },
          { text: "Skills", href: "" }
        ]}
      />
      <div style={{ paddingTop: "1rem" }}>
        <ExperiencePlate
          jobTitleProp={"NetSuite Developer"}
          employerProp={"Solution Source"}
          jobStartProp={"September 1, 2022"}
          jobEndProp={"July 31, 2023"}
          contentListProp={Array(15).fill("hello", 0, 15)}
        />
      </div>
    </div>
    {/* <IconLink iconClass='bi-house' text='testing testing 123 testing' /> */}
  </React.StrictMode>
);
