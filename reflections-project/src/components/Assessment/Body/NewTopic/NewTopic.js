import React, { useState } from "react";
import DropDown from "../../DropDown/DropDown";

function NewTopic({ onData }) {
  const [optionState, setOptionState] = useState("");
  const [text, setText] = useState("");

  function monitorState(e) {
    e.preventDefault();
    onData(optionState);
    resetInputField();
  }

  const handleUserInput = (e) => {
    setOptionState(e.target.value);
  };

  const resetInputField = () => {
    setOptionState("");
  };

  return (
    <form onSubmit={monitorState}>
      <div>
        <h3>Start of new topic area</h3>
        <input
          placeholder="Enter your topic..."
          onChange={handleUserInput}
          value={optionState}
        />
        <button>Add</button>
      </div>
    </form>
  );
}

export default NewTopic;
