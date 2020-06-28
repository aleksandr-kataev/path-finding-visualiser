import React from "react";
import { useEffect, useContext, useState } from "react";
import Canvas from "./Canvas";
import { Grid, Box } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";

const Visualiser = (props) => {
  const [isLeftMouseDown, setIsLeftMouseDown] = useState(false);
  const [isRightMouseDown, setIsRightMouseDown] = useState(false);
  const [algo, setAlgo] = useContext(AlgoContext);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      setIsLeftMouseDown(true);
    }
    if (event.button === 2) {
      setIsRightMouseDown(true);
    }
  };

  const handleMouseUp = (event) => {
    event.stopPropagation();
    if (event.button === 0) {
      setIsLeftMouseDown(false);
      registerObstacle(event);
    }
    if (event.button === 2) {
      setIsRightMouseDown(false);
      removeObstacle(event);
    }
  };

  const handleMouseMove = (event) => {
    if (isLeftMouseDown) {
      registerObstacle(event);
    }
    if (isRightMouseDown) {
      removeObstacle(event);
    }
  };

  const removeObstacle = (event) => {
    const x = Math.trunc(event.nativeEvent.offsetX / 25);
    const y = Math.trunc(event.nativeEvent.offsetY / 25);
    if (
      !(
        (x === algo.end.x && y === algo.end.y) ||
        (x === algo.start.x && y === algo.start.y)
      )
    ) {
      if (
        algo.obstacles.findIndex(
          (obstacle) => obstacle.x === x && obstacle.y === y
        ) !== -1
      ) {
        setAlgo({
          ...algo,
          obstacles: algo.obstacles.filter(
            (elem) => elem.x !== x || elem.y !== y
          ),
        });
      }
    }
  };

  const registerObstacle = (event) => {
    const x = Math.trunc(event.nativeEvent.offsetX / 25);
    const y = Math.trunc(event.nativeEvent.offsetY / 25);
    if (
      !(
        (x === algo.end.x && y === algo.end.y) ||
        (x === algo.start.x && y === algo.start.y)
      )
    ) {
      if (
        algo.obstacles.findIndex(
          (obstacle) => obstacle.x === x && obstacle.y === y
        ) === -1
      ) {
        setAlgo({
          ...algo,
          obstacles:
            algo.obstacles.length < 1
              ? [{ x: x, y: y }]
              : [...algo.obstacles, { x: x, y: y }],
        });
      }
    }
  };

  return (
    <Grid
      className={props.className}
      container
      alignItems='center'
      justify='center'
    >
      <Box
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onContextMenu={handleContextMenu}
      >
        <Canvas height={751} width={1876}></Canvas>
      </Box>
    </Grid>
  );
};
export default Visualiser;
