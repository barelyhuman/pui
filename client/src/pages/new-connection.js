import React, { useEffect } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Padding from "../components/padding";
import Spacer from "../components/spacer";
import getPort from "../lib/get-port";

export default (props) => {
  useEffect(() => {
    if (window.sessionStorage.getItem("connectionId")) {
      props.router("QUERYPAGE");
    }
  }, []);

  function handleConnect() {
    fetch(`http://localhost:${getPort()}/api/connect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: "hello",
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        window.sessionStorage.setItem("connectionId", data.connectionId);
        props.router("QUERYPAGE");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div>
        <h2>New Connection</h2>
        <Padding all={1}>
          <Input type="text" placeholder="Host" />
          <Spacer y={1} />
          <Input type="text" placeholder="Port" />
          <Spacer y={1} />
          <Input type="text" placeholder="Username" />
          <Spacer y={1} />
          <Input type="password" placeholder="Password" />
          <Spacer y={1} />
          <Input type="text" placeholder="Database Name" />
          <Spacer y={1} />
          <div className="flex">
            <Spacer fill></Spacer>
            <Button className="ml-auto" onClick={handleConnect}>
              Connect
            </Button>
          </div>
        </Padding>
      </div>
    </>
  );
};
