import React, { useEffect, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Padding from "../components/padding";
import Spacer from "../components/spacer";
import getPort from "../lib/get-port";

export default (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [host, setHost] = useState("127.0.0.1");
  const [port, setPort] = useState("5432");
  const [dbName, setDBName] = useState("");

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
        username,
        host,
        password,
        port,
        databaseName: dbName,
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
          <Input
            type="text"
            placeholder="Host"
            value={host}
            onChange={(e) => setHost(e.target.value)}
          />
          <Spacer y={1} />
          <Input
            type="text"
            placeholder="Port"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
          <Spacer y={1} />
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Spacer y={1} />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer y={1} />
          <Input
            type="text"
            placeholder="Database Name"
            value={dbName}
            onChange={(e) => setDBName(e.target.value)}
          />
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
