import React from "react";
import "./List.css";

const ListCard = (props) => {
  const deletehandler = (keyId) => {
    let taskCopy = [...props.current];
    console.log(keyId);
    taskCopy = taskCopy.filter((task) => task.key !== keyId);
    props.delete(taskCopy);
    console.log(props.current);
  };

  return (
    <div className="SingleList">
      <h5>{props.children}&nbsp;</h5>
      <button onClick={() => deletehandler(props.keyId)}>Delete</button>
    </div>
  );
};

export default ListCard;
