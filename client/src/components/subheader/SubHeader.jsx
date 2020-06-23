import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { purple, grey, blueGrey, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  barItem: {
    display: "flex",
    alignItems: "center",
    "&>*": {
      marginRight: theme.spacing(1),
      color: grey[900],
    },
  },
  toolBar: {
    height: "80%",
    "& > :first-child": {
      marginLeft: theme.spacing(4),
    },
    "&>*": {
      marginRight: theme.spacing(10),
    },
  },
  icon: {
    width: "2.4vh",
    height: "2.4vh",
    outline: `1px solid ${blueGrey[500]}`,
  },
  desciption: {
    textAlign: "center",
    marginTop: theme.spacing(-1),
  },
}));

const SubHeader = (props) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <Grid container direction='row' className={classes.toolBar}>
        <Box className={classes.barItem}>
          <ArrowForwardIosIcon style={{ color: purple[900] }} />
          <Typography variant='h6'>Start</Typography>
        </Box>
        <Box className={classes.barItem}>
          <LocationSearchingIcon style={{ color: purple[900] }} />
          <Typography variant='h6'>Target node</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box className={classes.icon}></Box>
          <Typography variant='h6'>Unvisited nodes</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: purple[400] }}
          ></Box>
          <Typography variant='h6'>Visited nodes</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: red[500] }}
          ></Box>
          <Typography variant='h6'>Shortest path</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: grey[900] }}
          ></Box>
          <Typography variant='h6'>Obstacles</Typography>
        </Box>
      </Grid>
      <Typography className={classes.desciption} variant='h6'>
        A* is weighted and guarantee shortest path
      </Typography>
    </div>
  );
};

export default SubHeader;
//use BlurOn icon to animate the algorithm

//double arrow icon for start
//LocationSearching for finish
/**
 * <div className={props.className}>
      <Grid container direction='row' className={classes.toolBar}>
        <Box className={classes.barItem}>
          <ArrowForwardIosIcon style={{ color: purple[900] }} />
          <Typography variant='h6'>Start</Typography>
        </Box>
        <Box className={classes.barItem}>
          <LocationSearchingIcon style={{ color: purple[900] }} />
          <Typography variant='h6'>Target node</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box className={classes.icon}></Box>
          <Typography variant='h6'>Unvisited nodes</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: purple[400] }}
          ></Box>
          <Typography variant='h6'>Visited nodes</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: red[500] }}
          ></Box>
          <Typography variant='h6'>Shortest path</Typography>
        </Box>
        <Box className={classes.barItem}>
          <Box
            className={classes.icon}
            style={{ backgroundColor: grey[900] }}
          ></Box>
          <Typography variant='h6'>Obstacles</Typography>
        </Box>
      </Grid>
    </div>
 */
