import React, { useState, createContext } from "react";

export const AlgoContext = createContext();

export const AlgoProvider = (props) => {
  const [algo, setAlgo] = useState({
    type: null,
    startingPoint: { x: null, y: null },
    endingPoint: { x: null, y: null },
    obst: [],
    path: [],
  });
  return (
    <AlgoContext.Provider value={[algo, setAlgo]}>
      {props.children}
    </AlgoContext.Provider>
  );
};
