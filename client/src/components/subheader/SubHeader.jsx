import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { purple, grey, blueGrey, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "white",
    position: "static",
    height: "100%",
  },
  barItem: {
    display: "flex",
    alignItems: "center",
    "&>*": {
      marginRight: theme.spacing(1),
      color: grey[900],
    },
  },
  toolBar: {
    height: "100%",
    "&>*": {
      marginRight: theme.spacing(7),
      margin: theme.spacing(3),
    },
  },
  unvisitedNodes: {
    width: "24px",
    height: "24px",
    outline: `1px solid ${blueGrey[500]}`,
  },
  visitedNodes: {
    width: "24px",
    height: "24px",
    color: `1px ${blueGrey[900]}`,
  },
  path: {
    width: "24px",
    height: "24px",
    color: `1px ${red[500]}`,
  },
  obstacles: {
    width: "24px",
    height: "24px",
    color: `1px ${grey[900]}`,
  },
}));

const SubHeader = (props) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.barItem}>
            <ArrowForwardIosIcon style={{ color: purple[500] }} />
            <Typography variant='h6'>Start</Typography>
          </Box>
          <Box className={classes.barItem}>
            <LocationSearchingIcon style={{ color: purple[500] }} />
            <Typography variant='h6'>Target node</Typography>
          </Box>
          <Box className={classes.barItem}>
            <Box className={classes.unvisitedNodes}></Box>
            <Typography variant='h6'>Unvisited nodes</Typography>
          </Box>
          <Box className={classes.barItem}>
            <Box className={classes.visitedNodes}></Box>
            <Typography variant='h6'>Visited nodes</Typography>
          </Box>
          <Box className={classes.barItem}>
            <Box className={classes.path}></Box>
            <Typography variant='h6'>Shortest path</Typography>
          </Box>
          <Box className={classes.barItem}>
            <Box className={classes.obstacles}></Box>
            <Typography variant='h6'>Obstacles</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SubHeader;
//use BlurOn icon to animate the algorithm

//double arrow icon for start
//LocationSearching for finish
