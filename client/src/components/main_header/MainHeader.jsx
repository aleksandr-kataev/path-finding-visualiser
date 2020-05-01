import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import DropDown from "./DropDown";
import { useGet } from "../../Request";

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

export default function ButtonAppBar() {
  const res = useGet("/db");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Pathfinding Visualiser
          </Typography>
          <DropDown></DropDown>
        </Toolbar>
      </AppBar>
    </div>
  );
}
