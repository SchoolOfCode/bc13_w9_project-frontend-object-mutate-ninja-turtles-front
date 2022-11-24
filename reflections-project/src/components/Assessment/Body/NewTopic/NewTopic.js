import React, { useState } from "react";
import DropDown from "../../DropDown/DropDown";

function NewTopic({ onData }) {
  const [optionState, setOptionState] = useState("");

  // function Input({ onData }) {
  //   const [text, setText] = useState("");

  function monitorState(e) {
    e.preventDefault();
    onData(optionState);
    setOptionState("");
  }

  return (
    <form onSubmit={monitorState}>
      <div>
        <h3>Start of new topic area</h3>
        <input
          placeholder="Enter your topic..."
          // options={options}
          onChange={(e) => setOptionState(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
}

export default NewTopic;
