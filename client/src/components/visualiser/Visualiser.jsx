import React from "react";
import { useEffect, useRef, useState } from "react";
import GridVisualiser from "./GridVisualiser";
import { Grid } from "@material-ui/core";

const Visualiser = (props) => {
  return (
    <Grid
      className={props.className}
      container
      alignItems='center'
      justify='center'
    >
      <GridVisualiser height={752} width={1877}></GridVisualiser>
    </Grid>
  );
};
export default Visualiser;

//wrpa everyting in box element easier sizing
