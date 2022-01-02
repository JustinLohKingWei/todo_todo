import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const SelectorRoot = styled.div`
  display: flex;
  min-width: inherit;
  min-height: 1.5em;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: white;
`;

const SelectorButton = styled.button`
`

type DisplaySelectorProps = {
    setDisplay : Dispatch<SetStateAction<string>>;
}

function DisplaySelector({setDisplay}:DisplaySelectorProps) {
  return <SelectorRoot>
      <SelectorButton onClick={()=>setDisplay("All")}>All</SelectorButton>
      <SelectorButton onClick={()=>setDisplay("Incomplete")}>Incomplete</SelectorButton>
      <SelectorButton onClick={()=>setDisplay("Complete")}>Complete</SelectorButton>
  </SelectorRoot>;
}

export default DisplaySelector