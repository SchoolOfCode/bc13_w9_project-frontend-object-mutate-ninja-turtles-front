import React from "react";
import "./TopicItem.css";

function TopicItem({ text, sliderValue, setSliderValue }) {
  return (
    <div className="slidecontainer">
      <li id="topicNames">
        <div className="topicStats">
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
      </li>
    </div>
  );
}

export default TopicItem;
