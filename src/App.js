import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  const [tasks, settasks] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="textR">To Do Tasks</h1>
        <Input current={tasks} add={settasks} />
        <ListContainer current={tasks} current={tasks} del={settasks} />
      </header>
    </div>
  );
}

export default App;
