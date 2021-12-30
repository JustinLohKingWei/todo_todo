type todoItemProp = {
  name: string
  completed: boolean
};

type todoProp = {
  todoList: todoItemProp[] 
}


export type {todoItemProp , todoProp}