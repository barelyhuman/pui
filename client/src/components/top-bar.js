import React from "react";
import Spacer from "./spacer";

export default (props) => {
  return (
    <>
      <div className="top-bar"></div>
      <Spacer y={2} />
      <div className="children">{props.children}</div>
      <style jsx>
        {`
          .top-bar {
            position: sticky;
            top: 0;
            width: 100%;
            background: var(--white);
            height: 32px;
            -webkit-user-select: none;
            -webkit-app-region: drag;
          }
          .children {
            max-height: calc(100vh - 40);
            overflow-y: auto;
          }
        `}
      </style>
    </>
  );
};
