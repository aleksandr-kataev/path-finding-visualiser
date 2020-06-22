import React from "react";
import { Stage, Layer, Rect } from "react-konva";

const Grid = (props) => {
  return (
    <Stage width={props.width} height={props.height}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={100}
          height={100}
          fill={"red"}
          shadowBlur={10}
        />
      </Layer>
    </Stage>
  );
};
export default Grid;

//wrpa everyting in box element easier sizing
