import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleChangeUsername = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (event) => {
    const keyId = uuidv4();
    const InputObj = { key: keyId, value: userInput };
    const tasksCopy = [...props.current, InputObj];
    props.add(tasksCopy);
    setUserInput("");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task :&nbsp;
        <input
          type="text"
          name="task"
          value={userInput}
          onChange={handleChangeUsername}
          maxLength="23"
        />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default Input;
