import React from "react";

import Spacer from "./components/spacer";
import Padding from "./components/padding";
import SavedConnection from "./pages/saved-connection";
import NewConnection from "./pages/new-connection";

const App = () => {
  return (
    <>
      <h1 align="center">PUI</h1>
      <p align="center">
        <small>Minimal Postgres UI</small>
      </p>
      <div className="flex justify-center">
        <Padding all={2}>
          <SavedConnection />
        </Padding>
        <Spacer x={10} />
        <Padding all={2}>
          <NewConnection />
        </Padding>
      </div>
    </>
  );
};

export default App;
