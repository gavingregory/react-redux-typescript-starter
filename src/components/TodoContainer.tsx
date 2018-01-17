import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State as BaseState, Todo } from 'models';
import { NumberMap } from 'models';
import { FlexColWidth } from 'enums';
import { addTodo } from 'modules/todo';
import { Container, Grid } from 'semantic-ui-react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

interface OwnProps {
  todos: NumberMap<Todo>;
  addTodo: () => void
}

const toArray = (todos: NumberMap<Todo>): Todo[] => {
  return Object.keys(todos).map((key) => todos[key]);
}

class TodoContainer extends React.Component<OwnProps> {
  render () {
    const { todos, addTodo } = this.props;
    return (
    <Container>
      <Grid columns='equal'>
        <Grid.Column>
            <TodoList todos={toArray(todos)} />
        </Grid.Column>
        <Grid.Column>
            <TodoAdd onAdd={addTodo} />
        </Grid.Column>
      </Grid>
    </Container>
    );
  }
}

const mapStateToOwnProps = (state: BaseState, ownOwnProps: OwnProps) => ({ todos: state.todos });

const mapDispatchToOwnProps = (dispatch: Dispatch<BaseState>) => ({
  addTodo: (name: string) => { dispatch(addTodo(name)); } 
});

export default connect(mapStateToOwnProps, mapDispatchToOwnProps)(TodoContainer);
