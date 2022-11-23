import React from "react";
import { useState, useEffect } from "react";
import NewTopic from "./Body/NewTopic/NewTopic";
import TopicList from "./Body/TopicsList/TopicList";
import DropDown from "./DropDown/DropDown";
import Slider from "./Slider/Slider";

function Assessment() {
  const [toDos, setToDos] = useState(["test"]);
  const [sliderValue, setSliderValue] = useState(4);
  // const [dropDownState, setDropDownState] = useState(" "); //preset of dropdown menu
  // // const [topicListState, setTopicListState] = useState([]);

  // function addFunction(event, optionState) {
  //   //create object to store the topic and value
  //   const newTopicObject = {
  //     topic: optionState,
  //     score: 5, // preset to 5//TopicScore
  //   };
  //   console.log(newTopicObject);

  //   const newState = [...dropDownState, newTopicObject];
  //   setDropDownState(newState);
  function addToDo(text) {
    setToDos([...toDos, text]);
    //We need a function to track the change of state of the sliders
  }

  function changeSlider(text) {
    console.log("slider change");
    // setSliderValue();
    console.log(text);
  }

  return (
    <div>
      <h1> Self-assessment Tool</h1>
      <h1> Week Number : </h1>
      <NewTopic onData={addToDo} />
      <TopicList toDos={toDos} changeSlider={changeSlider}></TopicList>
      <button>Submit All</button>
    </div>
  );
}

export default Assessment;
