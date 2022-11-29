import React, { useState } from "react";

function NewTopic({ addTopic }) {
  const [topicInput, setTopicInput] = useState("");

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
