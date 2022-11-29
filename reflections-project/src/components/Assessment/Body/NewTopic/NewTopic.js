import React, { useState } from "react";

function NewTopic({ addTopic }) {
  const [topicInput, setTopicInput] = useState("");

  /** This is a description of the handleAddButtonClick function.
   * Resets input field once the user has entered a topic and clicked add which adds that topic to the topic list
   */
  function handleAddButtonClick(e) {
    e.preventDefault();
    addTopic(topicInput);
    resetInputField();
  }

  const handleUserInput = (e) => {
    setTopicInput(e.target.value);
  };

  const resetInputField = () => {
    setTopicInput("");
  };

  return (
    <form onSubmit={handleAddButtonClick}>
      <div>
        <h3>Start of new topic area</h3>
        <input
          placeholder="Enter your topic..."
          onChange={handleUserInput}
          value={topicInput}
        />
        <button>Add</button>
      </div>
    </form>
  );
}

export default NewTopic;
