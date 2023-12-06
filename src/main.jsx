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
import NavigationBar from "/src/components/NavigationBar.jsx";

//Dummy data import
import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AboutContainer data={jsonData} />
    <hr style={{ marginBottom: "0px" }} />
    <NavigationBar />
    <hr style={{ marginTop: "0px" }} />
    {/* <IconLink iconClass='bi-house' text='testing testing 123 testing' /> */}
  </React.StrictMode>
);
