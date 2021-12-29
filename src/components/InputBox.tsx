import styled from "styled-components";

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
  min-width: 15em;
  min-height: 1.5em;
`;
const InputBoxTextBox = styled.input`
  min-width: inherit;
  min-height: inherit;
  padding : 0.1em;
  border: 0.1em;
  font-size: xx-large;
`;

function InputBox() {
  return (
    <InputBoxContainer>
      <InputBoxRoot>
        <InputBoxTextBox placeholder="What needs to be done?" />
      </InputBoxRoot>
    </InputBoxContainer>
  );
}

export default InputBox;
