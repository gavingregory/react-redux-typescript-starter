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

interface OwnProps {}

interface PropsFromState {
  todos: NumberMap<Todo>;
}

interface PropsFromDispatch {
  addTodo: (string) => void
}

const toArray = (todos: NumberMap<Todo>): Todo[] => {
  return Object.keys(todos).map((key) => todos[key]);
}

const mapStateToProps = (state: BaseState, ownOwnProps: OwnProps): PropsFromState =>
  ({ todos: state.todos });

const mapDispatchToProps = (dispatch: Dispatch<BaseState>): PropsFromDispatch =>
  ({ addTodo: (name: string) => { dispatch(addTodo(name)); } });

@connect(mapStateToProps, mapDispatchToProps)
export class TodoContainer extends React.Component<OwnProps & Partial<PropsFromState> & Partial<PropsFromDispatch>> {
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
