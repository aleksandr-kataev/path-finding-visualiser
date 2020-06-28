import React, { useState, createContext, useEffect } from "react";

export const AlgoContext = createContext();

export const AlgoProvider = (props) => {
  const [algo, setAlgo] = useState({
    DEFAULT_START: { x: 18, y: 14 },
    DEFAULT_END: { x: 56, y: 14 },
    type: null,
    start: { x: null, y: null },
    end: { x: null, y: null },
    obstacles: [],
    path: [],
  });
  useEffect(() => {
    if (algo.start === algo.end) {
      throw new Error("Algo context returned true to algo.start===algo.end");
    }
    if (
      algo.obstacles.findIndex(
        (obstacle) => obstacle.x === algo.start.x && obstacle.y === algo.start.y
      ) !== -1
    ) {
      throw new Error(
        `Obstacle at ${algo.obstacles.findIndex(
          (obstacle) =>
            obstacle.x === algo.start.x && obstacle.y === algo.start.y
        )} is the same as start point`
      );
    }
    if (
      algo.obstacles.findIndex(
        (obstacle) => obstacle.x === algo.end.x && obstacle.y === algo.end.y
      ) !== -1
    ) {
      throw new Error(
        `Obstacle at ${algo.obstacles.findIndex(
          (obstacle) => obstacle.x === algo.end.x && obstacle.y === algo.end.y
        )} is the same as end point`
      );
    }
  }, [algo]);
  return (
    <AlgoContext.Provider value={[algo, setAlgo]}>
      {props.children}
    </AlgoContext.Provider>
  );
};
