import React from "react";
import cx from "classnames";

export default ({ children, className, ...props }) => {
  const classNames = cx("button", className);
  return (
    <>
      <button className={classNames} {...props}>
        {children}
      </button>
      <style jsx>
        {`
          .button {
            background: var(--black);
            color: var(--white);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            padding-left: 16px;
            padding-right: 16px;
            font-size: 14px;
            width: auto;
            border: 2px solid var(--black);
            border-radius: var(--border-radius-sm);
            transition: 250ms all ease;
          }

          .button:hover {
            background: var(--white);
            color: var(--black);
          }
        `}
      </style>
    </>
  );
};
