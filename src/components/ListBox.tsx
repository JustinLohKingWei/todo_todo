import styled from "styled-components";
import { todoProp } from "../data/todoProps";
import { SetStateAction, Dispatch } from "react";

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
  display: flex;
  min-width: 100%;
  min-height: 1em;
  font-size: large;
  margin: 0.25em;

  justify-content: space-evenly;
`;

const DeleteButton = styled.div`
  background-color: red;
  min-height: 100%;
  min-width: 3em;
`;
type ListBoxProps = {
  listData: todoProp;
  setData: Dispatch<SetStateAction<todoProp>>;
};

function ListBox({ listData, setData }: ListBoxProps) {
  return (
    <ListBoxRoot>
      {listData.todoList.map((data, index) => {
        return (
          <ListBoxItem>
            {index + 1}. {data.name} is{" "}
            {data.completed ? "Completed" : "Not Completed"}
            <DeleteButton
              onClick={() =>
                setData((d) => ({
                  todoList: d.todoList.filter(
                    (item) => item.name !== data.name
                  ),
                }))
              }
            />
          </ListBoxItem>
        );
      })}
    </ListBoxRoot>
  );
}

export default ListBox;
