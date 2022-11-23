import React from "react";
import { useState, useEffect } from "react";
import NewTopic from "./Body/NewTopic/NewTopic";
import TopicList from "./Body/TopicsList/TopicList";
import DropDown from "./DropDown/DropDown";
import { Link } from "react-router-dom";
import sampleTopics from "../../libs/data.js";
import Slider from "./Slider/Slider";

function Assessment() {
  const [topics, setTopics] = useState([]);
  const [sliderValue, setSliderValue] = useState([]);
  const [weekTracker, setWeekTracker] = useState(sampleTopics);
  // const [dropDownState, setDropDownState] = useState(" "); //preset of dropdown menu

  //useReducer to add a case for every
  //Array[] push each slider into

  const options = [
    { value: "sql", label: "SQL" },
    { value: "postman", label: "Postman" },
    { value: "react", label: "React" },
  ];

  function addTopic(text) {
    setTopics([...topics, { text, score: 0 }]);
    //We need a function to track the change of state of the sliders
  }

  function addSliderValue() {
    console.log("slider change");
    // setSliderValue();
    setSliderValue([...sliderValue, sliderValue]);
  }

  function handleSliderChange(topictext, sliderValue) {
    console.log({ topictext, sliderValue });
    const newState = [...topics];
    newState.find((t) => t.text === topictext).score = sliderValue;
    setTopics(newState);
  }

  function submitAll(event, optionState, slidernumber) {
    console.log(topics);
    const newWeekTrackerObj = {
      week: 2,
      topic: topics, //Think this should be optionState but I'm confused
      score: sliderValue, //How do we get this value?
    };
    console.log(newWeekTrackerObj);

    const newState = [...weekTracker, newWeekTrackerObj];
    setWeekTracker(newState);
    console.log(weekTracker);
  }

  return (
    <div>
      <h1> Self-assessment Tool</h1>
      <h1> Week Number : 6 </h1>
      <NewTopic onData={addTopic} />
      <TopicList
        topics={topics}
        addSliderValue={addSliderValue}
        sliderValue={sliderValue}
        setSliderValue={handleSliderChange}
      ></TopicList>
      <DropDown options={options} />
      <Link to="/summary" className="submitAllContainer">
        <button
          className="submitAllButton"
          onClick={(e) => {
            submitAll(e);
          }}
        >
          Submit All
        </button>
      </Link>
    </div>
  );
}

export default Assessment;
