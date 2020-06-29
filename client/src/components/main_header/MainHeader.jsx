import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DropDown from "./DropDown";
import { Button } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  item: {
    "&>*": {
      marginRight: theme.spacing(7),
      margin: theme.spacing(2),
    },
  },
}));

const MainHeader = (props) => {
  const classes = useStyles();
  const [algo, setAlgo] = useContext(AlgoContext);
  const [data, setData] = useState({ algorithms: [], err: null });

  useEffect(() => {
    fetchAlgorithms();
  }, []);

  const clearObstacles = () => {
    setAlgo({ ...algo, obstacles: [] });
  };

  const clearGrid = () => {
    setAlgo({
      ...algo,
      start: { x: algo.DEFAULT_START.x, y: algo.DEFAULT_START.y },
      end: { x: algo.DEFAULT_END.x, y: algo.DEFAULT_END.y },
      obstacles: [],
      path: [],
    });
  };

  async function fetchAlgorithms() {
    await axios
      .get("http://localhost:5000/db")
      //DEV http://localhost:5000/db
      //build /db
      .then((res) => setData({ ...data, algorithms: res.data }))
      .catch((e) => setData({ ...data, err: e }));
  }

  return (
    <div className={props.className}>
      <AppBar elevation={0} position='static'>
        <Toolbar className={classes.item}>
          <Typography variant='h6'>Pathfinding Visualiser</Typography>
          <DropDown data={data}></DropDown>
          <Button variant='contained'>Visualise {algo.type}</Button>
          <Button variant='contained' onClick={clearObstacles}>
            Clear walls
          </Button>
          <Button variant='contained' onClick={clearGrid}>
            Clear grid
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;
