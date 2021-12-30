import { useState } from "react";
import styled from "styled-components";
import { todoItemProp, todoProp } from "../data/todoProps";
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
      { name: "Clean the House", completed: false },
      { name: "Feed the Dog", completed: false },
      { name: "Do Homework", completed: false },
    ],
  };

  const [todo, setTodo] = useState(todoList);
  const [inputQuery, setInputQuery] = useState("");

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
        <ListBox {...todo} />
      </InputBoxRoot>
    </InputBoxContainer>
  );
}

export default InputBox;
