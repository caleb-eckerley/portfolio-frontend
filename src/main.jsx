import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AboutContainer from "./AboutContainer.jsx";
import "/src/style/index.scss";

import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <AboutContainer data={jsonData} />
    <Footer footerText={jsonData.footerText} />
  </React.StrictMode>
);
