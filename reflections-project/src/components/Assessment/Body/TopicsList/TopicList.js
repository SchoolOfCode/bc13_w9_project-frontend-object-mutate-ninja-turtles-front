import React from "react";
import TopicItem from "./TopicItem/TopicItem";

function TopicList({ topics, changeSlider, sliderValue, setSliderValue }) {
  return (
    <div>
      <ul>
        {topics.map((topic, i) => (
          <TopicItem
            key={i}
            text={topic.text}
            sliderValue={topic.value}
            setSliderValue={(value) => setSliderValue(topic.text, value)}
            changeSlider={() => changeSlider(i)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
