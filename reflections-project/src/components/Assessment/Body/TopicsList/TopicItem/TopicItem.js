import React from "react";
import { useState } from "react";
import "./TopicItem.css";

function TopicItem({ text, sliderValue, setSliderValue }) {
  return (
    <div className="slidecontainer">
      <li id="topicNames">
        <div class="topicStats">
          {text} <span class="sliderValue">{sliderValue}</span>
        </div>

        <input
          onChange={(e) =>
            console.log(e.target.value) || setSliderValue(e.target.value)
          }
          type="range"
          min="1"
          max="10"
          className="slider"
          id="myRange"
        />
        {/* <p id="rangeValue">10</p> */}
        {/* <input type="range" min="1" max="10" onClick={Slider}></input> */}
      </li>
    </div>
  );
}

export default TopicItem;

{
  /* <div className="slider-parent">
  <div className="slider-parent">
    <input
      type="range"
      min="1"
      max="10"
      value={value}
      onChange={({ target: { value: radius } }) => {
        onChange(radius);
      }}
    />
    <div className="buble">{value}</div>
  </div>
  ;<div className="buble">{value}</div>
</div>; */
}
