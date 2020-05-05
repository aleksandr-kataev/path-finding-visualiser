import React, { useRef, useState, useEffect } from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const DropDown = () => {
  const [data, setData] = useState({ algorithms: [], err: null });
  const [algo, setAlgo] = useState(null);
  const [open, setOpen] = useState(false);

  const anchorRef = useRef(null);
  const classes = useStyles();

  const fetchedAlgorithms = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:5000/db",
      //DEV http://localhost:5d00/db
      responseType: "json",
    })
      .then((res) => {
        setData({ ...data, algorithms: res.data });
      })
      .catch((err) => {
        setData({ ...data, err: err });
      });
  };

  useEffect(() => {
    fetchedAlgorithms();
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (name, event) => {
    setOpen(false);
    setAlgo(name);
  };

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
        >
          Algorithms
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
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
