import React from "react";
import { useState } from "react";
import Slider from "../../../Slider/Slider";
import "./TopicItem.css";

function TopicItem({ changeSlider }) {
  const [text, setText] = useState(""); //change the text value here to different name and re add text as parameter in line 6

  // function handleChange(e) {
  //   e.preventDefault();
  //   changeSlider(text);
  //   setText("");
  // }

  return (
    <div class="slidecontainer">
      <li>
        {text}
        <input
          onChange={(e) =>
            console.log(e.target.value) || setText(e.target.value)
          }
          type="range"
          min="1"
          max="10"
          oninput="rangeValue.innerText=this.value"
          className="slider"
          id="myRange"
          // onChange={changeSlider}
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
