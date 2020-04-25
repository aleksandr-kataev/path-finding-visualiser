import React from "react";
import MainHeader from "./components/MainHeader";
import SubHeader from "./components/SubHeader";
import Visualiser from "./components/Visualiser";
import { Grid } from "@material-ui/core";
import "./App.scss";

const App = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <MainHeader />
      </Grid>
      <Grid item>
        <SubHeader />
      </Grid>
      <Grid item>
        <Visualiser />
      </Grid>
    </Grid>
  );
};
export default App;

//#97dffc
//#858ae3
//#613dc1
