import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
const MainHeader = () => {
  const classes = useStyles();
  return (
    <AppBar postion='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Pathfinding Visualiser
        </Typography>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
        <Button variant='outlined' color='secondary'>
          Secondary
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
