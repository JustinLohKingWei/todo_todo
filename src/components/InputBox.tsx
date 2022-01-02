import { useState } from "react";
import styled from "styled-components";
import { todoItemProp } from "../data/todoProps";
import DisplaySelector from "./DisplaySelector";
import ListBox from "./ListBox";

const InputBoxContainer = styled.div`
  display: flex;
  min-height: 10%;
  min-width: 100%;
  background-color: #2f92e9;
  padding-top: 2%;
  padding-bottom: 2%;
  justify-content: center;
`;

const InputBoxRoot = styled.div`
  display: flex;
  min-width: 20em;
  min-height: 1.5em;
  flex-direction: column;
`;
const InputBoxTextBox = styled.input`
  min-width: inherit;
  min-height: inherit;
  padding: 0.1em;
  border: 0.1em;
  font-size: xx-large;
`;

function InputBox() {
  let todoList = {
    todoList: [
      { name: "Do the dishes", completed: false },
      { name: "Bathe the dog", completed: false },
      { name: "Write a note", completed: true },
      { name: "Shovel the snow", completed: true },
      { name: "Clean the windows", completed: true },
    ],
  };

  const [todo, setTodo] = useState(todoList);
  const [inputQuery, setInputQuery] = useState("");
  const [display, setDisplay] = useState("All");

  return (
    <InputBoxContainer>
      <InputBoxRoot>
        <InputBoxTextBox
          placeholder="What needs to be done?"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              const newTodoItem: todoItemProp = {
                name: inputQuery,
                completed: false,
              };
              let newTodo = { ...todo };
              newTodo.todoList.push(newTodoItem);
              setTodo(newTodo); 
            }
          }}
          onChange={(e) => {
            setInputQuery(e.target.value);
          }}
        />
        <ListBox listData={todo} setData={setTodo} display={display} />
          <DisplaySelector setDisplay={setDisplay}/>
      </InputBoxRoot>
    </InputBoxContainer>
  );
}

export default InputBox;
