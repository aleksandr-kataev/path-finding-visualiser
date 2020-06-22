import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    background: "blue",
    position: "static",
  },
  item: {
    "&>*": {
      marginRight: "15em",
    },
  },
});

const SubHeader = (props) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <AppBar elevation={0} className={classes.appBar}>
        <Toolbar className={classes.item}></Toolbar>
      </AppBar>
    </div>
  );
};

export default SubHeader;
