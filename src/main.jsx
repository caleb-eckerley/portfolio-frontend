import React from "react";
import ReactDOM from "react-dom/client";
// import "/bootstrap-icons/font/bootstrap-icons.scss";
//import App from './App.jsx'
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import AboutMe from "./about-me.jsx";
import ContactMe from "./contact-me.jsx";
import "../public/style/index.scss";

import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    {/* <img src="bi-house-fill.svg" className="bi-house-fill" /> */}
    <AboutMe aboutMeText={jsonData.aboutMeText} chipArray={jsonData.chips} />
    <ContactMe />
    <Footer footerText={jsonData.footerText} />
  </React.StrictMode>
);
