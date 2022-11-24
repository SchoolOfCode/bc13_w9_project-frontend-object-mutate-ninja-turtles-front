import React from "react";
import { useState, useEffect } from "react";
import NewTopic from "./Body/NewTopic/NewTopic";
import TopicList from "./Body/TopicsList/TopicList";
import DropDown from "./DropDown/DropDown";
import { Link } from "react-router-dom";
import sampleTopics from "../../libs/data.js";
import Slider from "./Slider/Slider";

function Assessment() {
  const [topics, setTopics] = useState([
    {
      text: "HTML",
      score: 7,
    },
    {
      text: "UX/UI",
      score: 8,
    },
  ]);
  const [sliderValue, setSliderValue] = useState([]);
  // const [dropDownState, setDropDownState] = useState(" "); //preset of dropdown menu

  const options = [
    { value: "sql", label: "SQL" },
    { value: "postman", label: "Postman" },
    { value: "react", label: "React" },
  ];

  function addTopic(text) {
    setTopics([...topics, { text, score: 10 }]);
    //We need a function to track the change of state of the sliders
  }

  function handleSliderChange(topictext, sliderValue) {
    console.log({ topictext, sliderValue });
    const newState = [...topics];
    newState.find((t) => t.text === topictext).score = sliderValue;
    setTopics(newState);
    console.log("endofhandle click", topics);
  }

  function submitAll() {
    //takes in topics object from handleSliderChange
    //sends to the backend database
  }

  // async function submitUserScores(topics) {
  //   setTopicScores({ subject_title: topictext, score: sliderValue });
  //   const post = await fetch(
  //     `URL`, //Dummy variable - needs actual localhost api address
  //     {
  //       method: "POST",

  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(topics) //Name of the object holding details
  //     },
  //   );

  return (
    <div>
      <h1> Self-assessment Tool</h1>
      <h1> Week Number : 6 </h1>
      <NewTopic onData={addTopic} />
      <TopicList
        topics={topics}
        sliderValue={sliderValue}
        setSliderValue={handleSliderChange}
      ></TopicList>

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

// <DropDown options={options} />
