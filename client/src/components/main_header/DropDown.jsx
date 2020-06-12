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

  const fetchedAlgorithms = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:5000/db",
      //DEV http://localhost:5000/db
      //build /db
      responseType: "json",
    })
      .then((res) => {
        console.log(res.data);
        setData({ ...data, algorithms: res.data });
        console.log(data);
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
    if (typeof name !== "object") {
      console.log(name);
      setAlgo({ ...algo, type: name });
      console.log("updated");
      console.log(algo);
      console.log(data);
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
          <ArrowDropDownIcon></ArrowDropDownIcon>
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
