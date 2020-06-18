import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Input.css";

const Input = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleChangeUsername = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (event) => {
    if (userInput) {
      const keyId = uuidv4();
      const InputObj = { key: keyId, value: userInput };
      const tasksCopy = [...props.current, InputObj];
      props.add(tasksCopy);
      setUserInput("");
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Label">
        <label className="Textc">Task :&nbsp;</label>
        <input
          type="text"
          name="task"
          value={userInput}
          onChange={handleChangeUsername}
          maxLength="23"
          style={{ height: "25px", borderRadius: "5px" }}
        />
        &nbsp;
        <input
          type="submit"
          value="Add"
          style={{ height: "32px", borderRadius: "5px" }}
        />
      </div>
    </form>
  );
};

export default Input;
