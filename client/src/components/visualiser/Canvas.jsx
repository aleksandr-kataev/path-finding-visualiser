import React, { useContext, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { Box } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";
import { GridNode, GridStart, GridEnd } from "./GridNode";
import { grey, lightBlue } from "@material-ui/core/colors";

const Canvas = (props) => {
  const HEIGHT = 30;
  const WIDTH = 75;
  const SQUARE_DIMENSION = 25;
  const [algo, setAlgo] = useContext(AlgoContext);
  const rows = new Array(HEIGHT).fill(0);
  const grid = rows.map(() => {
    return new Array(WIDTH).fill(0);
  });

  useEffect(() => {
    setAlgo({
      ...algo,
      start: { x: algo.DEFAULT_START.x, y: algo.DEFAULT_START.y },
      end: { x: algo.DEFAULT_END.x, y: algo.DEFAULT_END.y },
    });
  }, []);

  return (
    <Box>
      <Stage width={props.width} height={props.height}>
        <Layer>
          {grid.map((row, y) => {
            return row.map((_, x) => {
              return (
                <Rect
                  x={x * SQUARE_DIMENSION + 1}
                  y={y * SQUARE_DIMENSION + 1}
                  width={SQUARE_DIMENSION}
                  height={SQUARE_DIMENSION}
                  fill={grey[50]}
                  stroke={lightBlue[200]}
                  strokeWidth={1}
                />
              );
            });
          })}
          {algo.start.x !== null && (
            <GridStart
              node={{
                x: algo.start.x,
                y: algo.start.y,
                dimension: SQUARE_DIMENSION,
              }}
            />
          )}
          {algo.end.x !== null && (
            <GridEnd
              node={{
                x: algo.end.x,
                y: algo.end.y,
                dimension: SQUARE_DIMENSION,
              }}
            />
          )}
          {algo.obstacles.length > 0 &&
            algo.obstacles.map((obstacle) => {
              return (
                <GridNode
                  node={{
                    x: obstacle.x,
                    y: obstacle.y,
                    dimension: SQUARE_DIMENSION,
                    type: "obstacle",
                  }}
                />
              );
            })}
        </Layer>
      </Stage>
    </Box>
  );
};

export default Canvas;

//https://konvajs.org/docs/react/Simple_Animations.html

//https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components

//create a separate component for node in there have a animation function a prop that makes the node visible/unvisible for the delayed render
