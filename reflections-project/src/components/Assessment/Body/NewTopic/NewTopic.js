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

  const options = [
    { value: "sql", label: "SQL" },
    { value: "postman", label: "Postman" },
    { value: "react", label: "React" },
  ];
  return (
    <form onSubmit={monitorState}>
      <h3>Start of new topic area</h3>
      <input
        placeHolder="Select..."
        // options={options}
        onChange={(e) => setOptionState(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default NewTopic;
