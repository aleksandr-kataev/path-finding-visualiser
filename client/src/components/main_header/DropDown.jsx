import React from "react";
import { useRef, useState, useEffect } from "react";
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
  const [data, setData] = useState([]);
  const [err, setError] = useState();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const fetchedAlgorithms = async () => {
    const res = await axios({
      method: "get",
      url: "/db",
      //DEV http://localhost:5000/db
      responseType: "stream",
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    fetchedAlgorithms();
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
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
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id='menu-list-grow'>
                    {!err ? (
                      data.map((item, i) => (
                        <MenuItem key={i} onClick={handleClose}>
                          {item.name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem> Failed to retreive data {data[0]}</MenuItem>
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
