import React, { useState } from "react";
import Padding from "./components/padding";
import NewConnection from "./pages/new-connection";
import QueryPage from "./pages/query-page";
import NotFound from "./pages/not-found";

const routes = {
  HOME: (router) => <NewConnection router={router} />,
  QUERYPAGE: (router) => <QueryPage router={router} />,
};

const App = () => {
  const [selectedRoute, setSelectedRoute] = useState("HOME");

  return (
    <>
      <h1 align="center">PUI</h1>
      <p align="center">
        <small>Minimal Postgres UI</small>
      </p>
      <div className="flex justify-center flex-one">
        <Padding all={2}>
          {routes[selectedRoute](setSelectedRoute) || <NotFound />}
        </Padding>
      </div>
    </>
  );
};

export default App;
