import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import AboutContainer from "./AboutContainer.jsx";
import "bootstrap-icons/font/bootstrap-icons.scss"; //Bootstrap Icon Library
import "/src/style/glassy.scss"; //CSS Module
import "/src/style/index.scss";

import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <AboutContainer data={jsonData} />
  </React.StrictMode>
);
