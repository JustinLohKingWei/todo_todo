import styled from "styled-components";
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
  const data = {
    todoList: [
      ["todo1", true],
      ["todo2", false],
    ],
  };

  return (
    <InputBoxContainer>
      <InputBoxRoot>
        <InputBoxTextBox placeholder="What needs to be done?" />
        <ListBox/>
      </InputBoxRoot>
    </InputBoxContainer>
  );
}

export default InputBox;
