import React, { useContext, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { Box } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";
import { GridNode, GridStart, GridEnd } from "./GridNode";
import { grey, lightBlue } from "@material-ui/core/colors";

//const DEFAULT_START = { x: 14, y: 19 };
//const DEFAULT_END = { x: 14, y: 55 };
const Canvas = (props) => {
  const HEIGHT = 30;
  const WIDTH = 75;
  const SQUARE_DIMENSION = 25;
  const DEFAULT_START = { x: 18, y: 14 };
  const DEFAULT_END = { x: 56, y: 14 };
  const [algo, setAlgo] = useContext(AlgoContext);
  const rows = new Array(HEIGHT).fill(0);
  const grid = rows.map(() => {
    return new Array(WIDTH).fill(0);
  });

  useEffect(() => {
    setAlgo({
      ...algo,
      start: { x: DEFAULT_START.x, y: DEFAULT_START.y },
      end: { x: DEFAULT_END.x, y: DEFAULT_END.y },
    });
  }, []);

  const clearObstacles = () => {
    setAlgo({ ...algo, obstacles: [] });
  };

  const clearGrid = () => {
    setAlgo({
      ...algo,
      start: { x: DEFAULT_START.x, y: DEFAULT_START.y },
      end: { x: DEFAULT_END.x, y: DEFAULT_END.y },
      obstacles: [],
      path: [],
    });
  };

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
