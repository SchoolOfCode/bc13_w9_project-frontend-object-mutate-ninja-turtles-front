import React from "react";
import { useState } from "react";
import NewTopic from "./Body/NewTopic/NewTopic";

function Assessment() {
  // const [dropDownState, setDropDownState] = useState("please select") //preset of dropdown menu
  // const [topicListState, setTopicListState] = useState([])

  // function addFunction(event, dropDownState)
  //   //create object to store the topic and value
  // const newTopicObject = {
  //   topic: dropDownState,
  //   score: topicScore, // preset to 0
  // };
  // console.log(newTopicObject);

  // const newState = [...topicListState, newTopicObject];
  // setTopicListState(newState);

  return (
    <div>
      <h1> Self-assessment Tool</h1>
      <h1> Week Number : </h1>
      {/* <NewTopic addFunction= {addFunction} /> */}
      <NewTopic />
    </div>
  );
}

export default Assessment;
