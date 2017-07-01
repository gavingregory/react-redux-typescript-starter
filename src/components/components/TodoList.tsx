import * as React from 'react';
import { Todo } from 'models';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

interface Props {
  todos: Todo[]
}

const TodoList: React.SFC<Props> = (props: Props) => (
  <List>
    <Subheader>Todo List</Subheader>
    {
      props.todos.map((todo) => (
        <ListItem key={todo.id} primaryText={todo.name} />
      ))
    }
  </List>
);
export default TodoList;
