import React from "react";
import DropDown from "../../DropDown/DropDown";

function NewTopic(addFunction) {
  const options = [
    { value: "sql", label: "SQL" },
    { value: "postman", label: "Postman" },
    { value: "react", label: "React" },
  ];
  return (
    <div>
      <h3>Start of new topic area</h3>
      <DropDown placeHolder="Select..." options={options} />
      <button></button>
    </div>
  );
}

export default NewTopic;
