import React, { useRef, useState, useEffect, useContext } from "react";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  makeStyles,
  Button,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { AlgoContext } from "../AlgoContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const [algo, setAlgo] = useContext(AlgoContext);
  const anchorRef = useRef(null);
  const classes = useStyles();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSetAlgo = (item) => {
    setAlgo({
      ...algo,
      type: item.name,
      isWeighted: item.isWeighted,
      isShortest: item.isShortest,
    });
    handleClose();
  };

  return (
    <div className={props.className}>
      <div className={classes.root}>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
        >
          Algorithms
          <ArrowDropDownIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id='menu-list-grow'>
                    {!props.data.err ? (
                      props.data.algorithms.map((item, i) => (
                        <MenuItem
                          key={i}
                          onClick={(e) => handleSetAlgo(item, e)}
                        >
                          {item.name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem>Failed to retrieve data</MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default DropDown;
