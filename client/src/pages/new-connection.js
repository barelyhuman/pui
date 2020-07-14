import React from "react";
import Padding from "../components/padding";
import Spacer from "../components/spacer";
import Input from "../components/input";
import Button from "../components/button";

export default (props) => {
  function handleConnect() {}

  return (
    <>
      <h2>New Connection</h2>
      <Padding all={1}>
        <Input type="text" placeholder="Host" />
        <Spacer y={2} />
        <Input type="text" placeholder="Port" />
        <Spacer y={2} />
        <Input type="text" placeholder="Username" />
        <Spacer y={2} />
        <Input type="password" placeholder="Password" />
        <Spacer y={2} />
        <Input type="text" placeholder="Database Name" />
        <Spacer y={2} />
        <div className="flex">
          <Spacer fill></Spacer>
          <Button className="ml-auto" onClick="handleConnect()">
            Connect
          </Button>
        </div>
      </Padding>
    </>
  );
};
