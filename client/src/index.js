import querystring from "querystring";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TopBar from "./components/top-bar";
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
