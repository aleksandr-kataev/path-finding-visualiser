import React, { useState, createContext } from "react";

export const AlgoContext = createContext();

export const AlgoProvider = (props) => {
  const [algo, setAlgo] = useState({
    type: null,
    start: { x: null, y: null },
    end: { x: null, y: null },
    obstacles: [],
    path: [],
  });
  return (
    <AlgoContext.Provider value={[algo, setAlgo]}>
      {props.children}
    </AlgoContext.Provider>
  );
};
