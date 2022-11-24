import React from "react";
import TopicItem from "./TopicItem/TopicItem";

function TopicList({ topics, sliderValue, setSliderValue }) {
  return (
    <div>
      <ul>
        {topics.map((topic, i) => (
          <TopicItem
            key={i}
            text={topic.text} //Doesn't like on submit
            sliderValue={topic.score}
            setSliderValue={(value) => setSliderValue(topic.text, value)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
