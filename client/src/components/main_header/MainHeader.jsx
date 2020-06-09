import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DropDown from "./DropDown";
import { Button } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MainHeader = () => {
  const classes = useStyles();
  const [algo, setAlgo] = useContext(AlgoContext);
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Pathfinding Visualiser
          </Typography>
          <Button variant='contained' color='primary'>
            Visualise {algo.type}
          </Button>
          <DropDown></DropDown>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;

//style it as a grid
