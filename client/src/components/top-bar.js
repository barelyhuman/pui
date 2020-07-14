import React from "react";

export default (props) => {
  return (
    <>
      <div className="top-bar"></div>
      <style jsx>
        {`
          .top-bar {
            width: 100%;
            height: 32px;
            -webkit-user-select: none;
            -webkit-app-region: drag;
          }
        `}
      </style>
    </>
  );
};
