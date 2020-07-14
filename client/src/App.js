import React from "react";
import Padding from "./components/padding";
import NewConnection from "./pages/new-connection";

const App = () => {
  return (
    <>
      <h1 align="center">PUI</h1>
      <p align="center">
        <small>Minimal Postgres UI</small>
      </p>
      <div className="flex justify-center flex-one">
        <Padding all={2}>
          <NewConnection />
        </Padding>
      </div>
    </>
  );
};

export default App;
