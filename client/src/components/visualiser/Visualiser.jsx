import React from "react";
import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

const Visualiser = (props) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const ref = useRef(null);
  useEffect(() => {
    setDimensions({
      height: ref.current.clientHeight,
      width: ref.current.offsetWidth,
    });
  }, [ref.current]);
  return (
    <div className={props.className} ref={ref}>
      <Grid height={dimensions.height} width={dimensions.width}></Grid>
    </div>
  );
};
export default Visualiser;

//wrpa everyting in box element easier sizing
