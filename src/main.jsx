//Node imports
import React from "react";
import ReactDOM from "react-dom/client";

//Style imports
import "/src/style/index.scss";

import App from "/src/App.jsx";

//Dummy data import
import jsonData from "../data/about-me.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App testData={jsonData} />
  </React.StrictMode>
);
