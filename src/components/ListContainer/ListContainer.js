import React, { useState } from "react";
import ListCard from "../List/List";
import { v4 as uuidv4 } from "uuid";

const ListContainer = (props) => {
  return (
    <>
      {props.current.map((task) => (
        <ListCard
          key={uuidv4()}
          keyId={task.key}
          current={props.current}
          delete={props.del}
        >
          {task.value}
        </ListCard>
      ))}
    </>
  );
};

export default ListContainer;
