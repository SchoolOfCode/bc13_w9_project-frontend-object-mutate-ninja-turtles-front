import React from "react";
import { useState } from "react";
import NewTopic from "./Body/NewTopic/NewTopic";
import TopicList from "./Body/TopicsList/TopicList";
import { Link } from "react-router-dom";

function Assessment() {
  const [topics, setTopics] = useState([
    {
      text: 'SQL',
      score: 4
    },
    {
      text: 'Testing',
      score: 5
    },
    {
      text: 'UX/UI',
      score: 7
    }

  ]);
  const [sliderValue, setSliderValue] = useState([]);

  /** This is a description of the addTopic function.
   * Spreads the current topics array and adds the new text(topic) inputed by user and presets the slider score to 10, the new topic and score render on the Topic List component.
   * This function is passed down as a prop to the TopicList component.
   */
  function addTopic(text) {
    setTopics([...topics, { text, score: 10 }]);
  }

  /** This is a description of the handleSliderChange function.
   * This function takes in two key/value pairs(topicText and sliderValue).
   * This function is activated when a user moves the slider function to a new value.
   * It is passed down as a prop to the TopicList and further into the TopicItem component.
   * The find function identifies the slider being moved through the text(topic) key and assigns the slidervalue key a new value(score).
   */
  function handleSliderChange(topictext, sliderValue) {
    console.log({ topictext, sliderValue });
    const newState = [...topics];
    newState.find((t) => t.text === topictext).score = sliderValue;
    setTopics(newState);
    console.log("endofhandle click", topics);
  }

  /** This is a description of the submitUserScores function.
   * Function sends a fetch(POST) request to the API and passes the body.
   * Submits user scores to the Reviews table.
   * This functions takes in a topics array of objects. Body reqs score and topic_id from each object.
   */
  async function submitUserScores(topics) {
    const post = await fetch("http://localhost:3001/api/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        topic_id: 1,
        score: topics[0].score,
        date_added: "2022-11-25",
        bootcamper_id: 1,
      }),
    });

    const response = await post.json();
    if (response) {
      alert("Info submitted!");
    }
    console.log("Data", response);
  }

  return (
    <div>
      <h1> Self-assessment Tool</h1>
      <h1> Week Number : 6 </h1>
      <NewTopic addTopic={addTopic} />
      <TopicList
        topics={topics}
        sliderValue={sliderValue}
        setSliderValue={handleSliderChange}
      ></TopicList>

      <Link to="/summary" className="submitAllContainer">
        <button
          className="submitAllButton"
          onClick={() => {
            submitUserScores(topics);
          }}
        >
          Submit All
        </button>
      </Link>
    </div>
  );
}
export default Assessment;
