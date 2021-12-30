import styled from "styled-components";
import { todoItemProp, todoProp } from "../data/todoProps";

const ListBoxRoot = styled.div`
  min-height: 1em;
  min-width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const ListBoxItem = styled.div`
  min-width: 100%;
  min-height: 1em;
  font-size: large;
  margin: 0.25em;
`;

function ListBox( listData : todoProp) {

  return (
    <ListBoxRoot>
      {listData.todoList.map((data, index) => {
        return (
          <ListBoxItem>
            {index+1}. {data.name} is {data.completed? "Completed":"Not Completed"}
          </ListBoxItem>
        );
      })}
    </ListBoxRoot>
  );
}

export default ListBox;
