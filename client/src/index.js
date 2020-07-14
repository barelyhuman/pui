import React from "react";
import ReactDOM from "react-dom";
import querystring from "querystring";

import TopBar from "./components/top-bar";
import Spacer from "./components/spacer";

import App from "./App";

import "./index.css";

const Index = () => {
  let query = querystring.parse(global.location.search);
  let port = JSON.parse(query["?port"]);
  window.APIPORT = port;
  return (
    <>
      <TopBar>
        <App />
      </TopBar>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
