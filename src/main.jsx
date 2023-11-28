//Node imports
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.scss";

//Font imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//Style imports
import "/src/style/index.scss";
import "/src/style/glassy.scss";

//Component imports
import Header from "/src/Header.jsx";
import AboutContainer from "/src/AboutContainer.jsx";
import IconLink from "/src/components/IconLink.jsx";

//Dummy data import
import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <AboutContainer data={jsonData} />

    {/* <IconLink iconClass='bi-house' text='testing testing 123 testing' /> */}
  </React.StrictMode>
);
