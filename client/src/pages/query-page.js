import React from "react";
import Padding from "../components/padding";
import Spacer from "../components/spacer";
import Button from "../components/button";

export default (props) => {
  return (
    <>
      <Padding all={8}>
        <textarea placeholder="SQL QUERY"></textarea>
        <Spacer y={1} />
        <div className="flex">
          <div className="flex-one"></div>
          <Button>Run Query</Button>
          <div className="flex-one"></div>
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
        `}
      </style>
    </>
  );
};
