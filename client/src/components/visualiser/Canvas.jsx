import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect, Circle, Arrow } from "react-konva";
import { Box } from "@material-ui/core";
import { purple, grey, red, lightBlue } from "@material-ui/core/colors";

const Canvas = (props) => {
  const HEIGHT = 30;
  const WIDTH = 75;
  const SQUARE_DIMENSION = 25;
  const DEFAULT_START = { x: 14, y: 19 };
  const DEFAULT_END = { x: 14, y: 55 };

  const colorMap = {
    unvisited: grey[50],
    start: grey[50],
    end: grey[50],
    obstacle: grey[900],
    open: purple[400],
    path: red[500],
  };

  const [grid, setGrid] = useState(() => {
    const gridArr = [];
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        gridArr.push({
          x: i,
          y: j,
          type:
            j == DEFAULT_START.x && i == DEFAULT_START.y
              ? "start"
              : j == DEFAULT_END.x && i == DEFAULT_END.y
              ? "end"
              : "unvisited",
        });
      }
    }
    return gridArr;
  });

  const clearObstacles = () => {
    setGrid(
      grid.map((node) => {
        if (node.type == "obstacle" || "open" || "path" || "closed") {
          return {
            ...node,
            type: "unvisited",
          };
        }
        return node;
      })
    );
  };

  const clearGrid = () => {
    setGrid(() => {
      const clearGrid = grid.map((node) => {
        if (node.type !== "unvisited") {
          return {
            ...node,
            type: "unvisited",
          };
        }
        return node;
      });

      clearGrid[
        clearGrid.findIndex(
          (node) => node.x === DEFAULT_START.x && node.y === DEFAULT_START.y
        )
      ].type = "start";

      clearGrid[
        clearGrid.findIndex(
          (node) => node.x === DEFAULT_END.x && node.y === DEFAULT_END.y
        )
      ].type = "end";

      return clearGrid;
    });
  };

  return (
    <Box>
      <Stage width={props.width} height={props.height}>
        <Layer>
          {grid.map((rect) => {
            return (
              <Rect
                x={rect.x * SQUARE_DIMENSION + 1}
                y={rect.y * SQUARE_DIMENSION + 1}
                width={SQUARE_DIMENSION}
                height={SQUARE_DIMENSION}
                fill={colorMap[rect.type]}
                stroke={lightBlue[200]}
                strokeWidth={1}
              />
            );
          })}

          {grid.map((rect) => {
            if (rect.type == "start") {
              console.log(rect);
              return (
                <Arrow
                  points={[
                    rect.x * SQUARE_DIMENSION + 1,
                    rect.y * SQUARE_DIMENSION + 13,
                    rect.x * SQUARE_DIMENSION + 25,
                    rect.y * SQUARE_DIMENSION + 13,
                  ]}
                  pointerLength={5}
                  pointerWidth={5}
                  fill='black'
                  stroke='black'
                  strokeWidth={1}
                />
              );
            }
            if (rect.type == "end") {
              return (
                <Circle
                  radius={7}
                  fill={"black"}
                  x={rect.x * SQUARE_DIMENSION + 13}
                  y={rect.y * SQUARE_DIMENSION + 13}
                />
              );
            }
          })}
        </Layer>
      </Stage>
    </Box>
  );
};

export default Canvas;
