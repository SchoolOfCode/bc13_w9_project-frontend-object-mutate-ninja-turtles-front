import React from "react";
import Slider from "../../Slider/Slider";
import TopicItem from "./TopicItem/TopicItem";

function TopicList({ toDos, changeSlider }) {
  return (
    <div>
      <ul>
        {toDos.map((todo, i) => (
          <TopicItem key={i} text={todo} changeSlider={() => changeSlider(i)} />
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
