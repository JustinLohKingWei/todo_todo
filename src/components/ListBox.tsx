import styled from "styled-components";

const ListBoxRoot = styled.div`
  min-height: 1em;
  min-width: 100%;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: #ffffff;
  display: flex;
  flex-direction : column;
`;

const ListBoxItem = styled.div`
min-width: 100%;
min-height: 1em ;
font-size : large;
margin: 0.25em
`;

function ListBox() {
  const listData = {
    todoList: [
      ["todo1", true],
      ["todo2", false],
      ["todo3", false],
      ["todo4", false],
      ["todo5", false],
      ["todo6", false],
    ],
  };

  return (
    <ListBoxRoot>
      {listData.todoList.map((data, index) => {
        return <ListBoxItem>
            {data[0]}-{index+1}
        </ListBoxItem>;
      })}
    </ListBoxRoot>
  );
}

export default ListBox;
