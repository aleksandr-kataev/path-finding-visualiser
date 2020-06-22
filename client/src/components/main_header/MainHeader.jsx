import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DropDown from "./DropDown";
import { Button } from "@material-ui/core";
import { AlgoContext } from "../AlgoContext";

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

  return (
    <div className={props.className}>
      <AppBar elevation={0} position='static'>
        <Toolbar className={classes.item}>
          <Typography variant='h6'>Pathfinding Visualiser</Typography>
          <Button variant='contained'>Visualise {algo.type}</Button>
          <DropDown></DropDown>
          <Button variant='contained'>Clear walls</Button>
          <Button variant='contained'>Clear path</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;
