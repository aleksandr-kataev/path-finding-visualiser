import React from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect } from "react-konva";

const Square = (props) => {
  return (
    <Rect
      x={props.x}
      y={y.props}
      width={props.length}
      height={props.length}
      fill={props.color}
    />
  );
};
export default Square;
//https://github.com/konvajs/react-konva
//https://codesandbox.io/s/ykqw8r4r21
