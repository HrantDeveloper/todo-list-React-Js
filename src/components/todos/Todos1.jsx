import React from "react";
import TodoCtx from "./TodoCtx";
import TodoList from "./TodoList";
import TodosHead from "./TodosHead";

const Todos1 = () => {
  return (
    <TodoCtx>
      <div className="wrapper">
      <h1>todos</h1>
        <TodosHead />
        <TodoList />
      </div>
    </TodoCtx>
  );
};

export default Todos1;