import * as React from 'react';
import { Todo } from 'models';
import { List } from 'semantic-ui-react'

interface OwnProps {
  todos: Todo[]
}

const TodoList: React.SFC<OwnProps> = (props: OwnProps) => (
  <List divided relaxed>
    {
      props.todos.map((todo) => (
        <List.Item key={todo.id}>
          <List.Icon name='write square' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header>
              {todo.name}
            </List.Header>
            <List.Description>
              {todo.created.toDateString()} at {todo.created.toTimeString()}
            </List.Description>
          </List.Content>
        </List.Item>
      ))
    }
  </List>
);
export default TodoList;
