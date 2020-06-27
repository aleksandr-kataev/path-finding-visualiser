import React from "react";
import { useEffect, useContext, useState } from "react";
import Canvas from "./Canvas";
import { Grid, Box } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";

const Visualiser = (props) => {
  const [algo, setAlgo] = useContext(AlgoContext);
  const handleClick = (event) => {
    const x = Math.trunc(event.nativeEvent.offsetX / 25);
    const y = Math.trunc(event.nativeEvent.offsetY / 25);
    if (
      !(
        (x === algo.end.x && y === algo.end.y) ||
        (x === algo.start.x && y === algo.start.y)
      )
    ) {
      setAlgo({
        ...algo,
        obstacles:
          algo.obstacles.length < 1
            ? [{ x, y }]
            : [...algo.obstacles, { x, y }],
      });
    }
  };

  return (
    <Grid
      className={props.className}
      container
      alignItems='center'
      justify='center'
    >
      <Box onMouseDown={handleClick}>
        <Canvas height={752} width={1877}></Canvas>
      </Box>
    </Grid>
  );
};
export default Visualiser;
