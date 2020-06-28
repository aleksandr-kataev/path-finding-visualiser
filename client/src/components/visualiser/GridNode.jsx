import React, { useState } from "react";
import { Rect, Circle, Arrow } from "react-konva";
import { purple, grey, red, lightBlue } from "@material-ui/core/colors";

const colorMap = {
  unvisited: grey[50],
  start: grey[50],
  end: grey[50],
  obstacle: grey[900],
  open: purple[400],
  path: red[500],
};

export const GridNode = (node) => {
  const [visible, setVisible] = useState(false);
  return (
    <Rect
      x={node.node.x * node.node.dimension + 1}
      y={node.node.y * node.node.dimension + 1}
      width={node.node.dimension}
      height={node.node.dimension}
      fill={colorMap[node.node.type]}
    />
  );
};

export const GridStart = (node) => {
  return (
    <Arrow
      points={[
        node.node.x * node.node.dimension + 1,
        node.node.y * node.node.dimension + 13,
        node.node.x * node.node.dimension + 25,
        node.node.y * node.node.dimension + 13,
      ]}
      pointerLength={5}
      pointerWidth={5}
      fill='red'
      stroke='red'
      strokeWidth={2}
    />
  );
};

export const GridEnd = (node) => {
  return (
    <Circle
      radius={7}
      fill={"red"}
      x={node.node.x * node.node.dimension + 13}
      y={node.node.y * node.node.dimension + 13}
    />
  );
};
