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
import axios from "axios";
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
  const [data, setData] = useState({ algorithms: [], err: null });
  const [open, setOpen] = useState(false);
  const [algo, setAlgo] = useContext(AlgoContext);
  const anchorRef = useRef(null);
  const classes = useStyles();

  async function fetchAlgorithms() {
    await axios
      .get("http://localhost:5000/db")
      //DEV http://localhost:5000/db
      //build /db
      .then((res) => setData({ ...data, algorithms: res.data }))
      .catch((e) => setData({ ...data, err: e }));
  }

  useEffect(() => {
    fetchAlgorithms();
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (name, event) => {
    setOpen(false);
    if (typeof name !== "object") {
      setAlgo({ ...algo, type: name });
    }
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
                <ClickAwayListener onClickAway={(e) => handleClose(algo, e)}>
                  <MenuList autoFocusItem={open} id='menu-list-grow'>
                    {!data.err ? (
                      data.algorithms.map((item, i) => (
                        <MenuItem
                          key={i}
                          onClick={(e) => handleClose(item.name, e)}
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
