import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { purple, grey, red, lightBlue } from "@material-ui/core/colors";

const Grid = (props) => {
  const HEIGHT = 30;
  const WIDTH = 75;
  const SQUARE_DIMENSION = 25;
  /**
   * 2d array to store the grid's content
   * 0 = unvisited node, grey[50]
   * 1 = start node, start icon, icon=purple[500], color=grey[50]
   * 2 = end node, end icon, icon=purple[500], color=grey[50]
   * 3 = obstacle node, grey[900]
   * 4 = visited node, purple[400]
   * 5 = path, red[500]
   */

  const initGrid = () => {
    const rowsArray = new Array(HEIGHT).fill(0);
    const gridArray = rowsArray.map(() => {
      return new Array(WIDTH).fill(0);
    });
    //setting start node and end node
    //gridArray[14][19] = 1;
    //gridArray[14][54] = 2;
    return gridArray;
  };

  const [grid, setGrid] = useState(initGrid);

  const resetGrid = () => {
    setGrid(initGrid);
  };

  const clearObstacles = () => {
    setGrid(
      grid.map((row) => {
        return row.map((cell) => {
          if (cell === 3) {
            return (cell = 0);
          }
          return cell;
        });
      })
    );
  };

  return (
    <Box>
      <Stage width={props.width} height={props.height}>
        <Layer>
          {grid.map((row, y) => {
            return row.map((cell, x) => {
              let color = null;
              let icon = null;
              switch (cell) {
                case 0:
                  color = grey[50];
                  break;
                case 1:
                  color = grey[50];
                  icon = "start";
                  break;
                case 2:
                  color = grey[50];
                  icon = "end";
                  break;
                case 3:
                  color = grey[900];
                  break;
                case 4:
                  color = purple[400];
                  break;
                case 5:
                  color = red[500];
                  break;
                default:
              }
              return (
                <Rect
                  y={y * SQUARE_DIMENSION + 1}
                  x={x * SQUARE_DIMENSION + 1}
                  width={SQUARE_DIMENSION}
                  height={SQUARE_DIMENSION}
                  fill={color}
                  stroke={lightBlue[300]}
                  strokeWidth={1}
                />
              );
            });
          })}
        </Layer>
      </Stage>
    </Box>
  );
};
export default Grid;
