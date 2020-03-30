import React from "react";
import bubbleSort from "./bubble-sort";
import selectionSort from "./selection-sort";
import insertionSort from "./insertion-sort";
import { mergeSort, merge } from "./merge-sort";
import { shuffleArray, createArray } from "./bar-array";
import "./App.css";

const bars = createArray(400);

// this class renders the bargraph that we will be sorting
class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.displayGraph = this.displayGraph.bind(this);
  }

  //displays the bar graph to be sorted
  displayGraph = () => {
    shuffleArray(bars);
    mergeSort(bars);
    return bars.map(bar => {
      let bar2 = React.createElement("div", {
        style: {
          height: `${bar * (400 / bars.length)}px`,
          width: `${200 / bars.length}px`,
          border: "solid blue 1px",
          backgroundColor: "blue"
        },
        key: bar
      });
      return bar2;
    });
  };

  render() {
    return <div>{this.displayGraph()}</div>;
  }
}

export default BarGraph;
