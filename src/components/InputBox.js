import styled from "styled-components";

const InputBoxContainer = styled.div`
  position: absolute;
  min-height: 10%;
  min-width: 100%;
  background-color: aliceblue;
`;

const InputBoxRoot = styled.div`
  min-height: 90%;
  background-color: black;
`;
const InputBoxTextBox = styled.input`
  min-width: inherit;
  min-height: inherit;
`;

function InputBox() {
  return (
    <InputBoxContainer>
      <InputBoxRoot>
        <InputBoxTextBox />
      </InputBoxRoot>
    </InputBoxContainer>
  );
}

export default InputBox;
