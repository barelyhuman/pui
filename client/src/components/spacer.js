import React from "react";

export default function Spacer(props) {
  let display = "block";

  const style = {
    height: 1,
    width: 1,
    display: props.inline ? "inline-block" : display,
  };

  if (props.fill) {
    display = "flex";
    style.flex = "1 1";
  }

  const spacingMultiplier = 8;

  if (props.x) {
    style.marginLeft = spacingMultiplier * props.x;
  }

  if (props.y) {
    style.marginTop = spacingMultiplier * props.y;
  }

  return <div style={style}>{props.children}</div>;
}
