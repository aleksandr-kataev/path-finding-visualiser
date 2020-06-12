import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DropDown from "./DropDown";
import { Button } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";

const useStyles = makeStyles((theme) => ({
  item: {
    marginRight: theme.spacing(5),
  },
}));

const MainHeader = () => {
  const classes = useStyles();
  const [algo, setAlgo] = useContext(AlgoContext);
  return (
    <div>
      <AppBar elevation={0} position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.item}>
            Pathfinding Visualiser
          </Typography>
          <Button variant='contained' className={classes.item}>
            Visualise {algo.type}
          </Button>
          <DropDown className={classes.item}></DropDown>
          <Button variant='contained' className={classes.item}>
            Clear walls
          </Button>
          <Button variant='contained' className={classes.item}>
            Clear path
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;
