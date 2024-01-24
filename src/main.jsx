//Node imports
import React from "react";
import ReactDOM from "react-dom/client";

//Style imports
import "/src/style/index.scss";

import App from "/src/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
