import React from "react";

export default function Spacer(props) {
  const spacingMultiplier = 8;
  return (
    <>
      <div className="padding">{props.children}</div>
      <style jsx>
        {`
          .padding {
            width: 100%;
            box-sizing: border-box;
            padding-top: ${(props.all || props.top) * spacingMultiplier}px;
            padding-bottom: ${(props.all || props.bottom) *
            spacingMultiplier}px;
            padding-left: ${(props.all || props.left) * spacingMultiplier}px;
            padding-right: ${(props.all || props.right) * spacingMultiplier}px;
          }
        `}
      </style>
    </>
  );
}
