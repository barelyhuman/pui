import React from "react";

export default (props) => {
  return (
    <>
      <input {...props}></input>
      <style jsx>
        {`
          input {
            box-sizing: border-box;
            width: 100%;
            height: 40px;
            padding: 0px 8px;
            outline: var(--black);
            border: 2px solid rgba(12, 12, 13, 0.1);
            border-radius: var(--border-radius-sm);
          }

          input:focus {
            border-color: var(--black);
          }
        `}
      </style>
    </>
  );
};
