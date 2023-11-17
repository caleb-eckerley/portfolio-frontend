import React from "react";
import ReactDOM from "react-dom/client";
// import "/bootstrap-icons/font/bootstrap-icons.scss";
//import App from './App.jsx'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AboutContainer from "./AboutContainer.jsx";
import "/src/style/index.scss";

import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    {/* <img src="bi-house-fill.svg" className="bi-house-fill" /> */}
    <AboutContainer data={jsonData} />
    <Footer footerText={jsonData.footerText} />
  </React.StrictMode>
);
