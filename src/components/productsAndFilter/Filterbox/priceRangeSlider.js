import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import {useSelector, useDispatch} from 'react-redux'

const useStyles = makeStyles({
  root: {
    margin: 10,

    color: "black"
  },
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "black",
      color: "#fff"
    }
  }
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

export function RangeSlider() {
  const classes = useStyles();
  const sliderValue = useSelector(state => state.priceRange);
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    dispatch({ type: 'CHANGE_SLIDER_VALUE', payload : newValue});
  };

  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        min={10}
        max={25000}
        ValueLabelComponent={ValueLabelComponent}
        value={value}
        onChange={handleChange}
      /> */}
      <span>Min : {sliderValue[0]}</span>
      <Slider
        valueLabelDisplay="off"
        min={1000}
        max={100000}
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        value={sliderValue}
        onChange={handleChange}
      />
      <span>Max : {sliderValue[1]}</span>
    </div>
  );
}
