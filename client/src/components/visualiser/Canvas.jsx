import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { Box } from "@material-ui/core";
import { purple, grey, red, lightBlue } from "@material-ui/core/colors";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

const Canvas = (props) => {
  const HEIGHT = 30;
  const WIDTH = 75;
  const SQUARE_DIMENSION = 25;
  const DEFAULT_START = { x: 14, y: 52 };
  const DEFAULT_END = { x: 14, y: 19 };
  const colorMap = {
    unvisited: grey[50],
    start: purple[400],
    end: red[500],
    obstacle: grey[900],
    open: purple[400],
    path: red[500],
  };

  const [grid, setGrid] = useState(() => {
    const gridArr = [];
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        gridArr.push({
          x: j,
          y: i,
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
      <button onClick={clearGrid}>123</button>
      <Stage width={props.width} height={props.height}>
        <Layer>
          {grid.map((rect) => {
            return (
              <Rect
                y={rect.x * SQUARE_DIMENSION + 1}
                x={rect.y * SQUARE_DIMENSION + 1}
                width={SQUARE_DIMENSION}
                height={SQUARE_DIMENSION}
                fill={colorMap[rect.type]}
                stroke={lightBlue[200]}
                strokeWidth={1}
              />
            );
          })}
        </Layer>
      </Stage>
    </Box>
  );
};

export default Canvas;
