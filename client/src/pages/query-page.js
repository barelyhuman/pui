import React, { useState } from "react";
import Padding from "../components/padding";
import Spacer from "../components/spacer";
import Button from "../components/button";
import getPort from "../lib/get-port";
import fit from "@barelyhuman/fit";

export default (props) => {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState({});

  const runQuery = () => {
    fit(`http://localhost:${getPort()}/api/run/query`)
      .post({
        connectionId: window.sessionStorage.getItem("connectionId"),
        sqlQuery: query,
      })
      .then((data) => {
        setQueryResult(data.data);
      })
      .catch((err) => {
        setQueryResult(err.error.error);
      });
  };

  return (
    <>
      <Padding all={8}>
        <textarea
          placeholder="SQL QUERY"
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <Spacer y={1} />
        <div className="flex">
          <div className="flex-one"></div>
          <Button onClick={runQuery}>Run Query</Button>
          <div className="flex-one"></div>
        </div>
        <div className="flex output">
          <div className="flex-one">
            <pre>{JSON.stringify(queryResult, null, 2)}</pre>
          </div>
        </div>
      </Padding>

      <style jsx>
        {`
          textarea {
            width: 100%;
            height: 150px;
            resize: none;
            outline: var(--black);
            border: 2px solid rgba(12, 12, 13, 0.1);
            border-radius: 4px;
            box-sizing: border-box;
            padding: 8px;
          }

          textarea:focus {
            border-color: var(--black);
          }

          pre {
            overflow-x: auto;
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
          }
        `}
      </style>
    </>
  );
};
