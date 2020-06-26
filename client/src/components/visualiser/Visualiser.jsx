import React from "react";
import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import { Grid } from "@material-ui/core";

const Visualiser = (props) => {
  return (
    <Grid
      className={props.className}
      container
      alignItems='center'
      justify='center'
    >
      <Canvas height={752} width={1877}></Canvas>
    </Grid>
  );
};
export default Visualiser;
