import React from "react";
import TopicItem from "./TopicItem/TopicItem";

function TopicList({ topics, setSliderValue }) {
  return (
    <div>
      <ul>
        {topics.map((topic, i) => (
          <TopicItem
            key={i}
            text={topic.text}
            sliderValue={topic.score}
            setSliderValue={(value) => setSliderValue(topic.text, value)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TopicList;
