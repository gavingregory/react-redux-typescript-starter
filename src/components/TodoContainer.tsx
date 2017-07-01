import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { State as BaseState, Todo } from 'models';
import { NumberMap } from 'models';
import { addTodo } from 'modules/todo';

import { Row, Col } from 'react-flexbox-grid';

import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

interface Props {
  todos: NumberMap<Todo>;
  addTodo: () => void
}

const toArray = (todos: NumberMap<Todo>): Todo[] => {
  return Object.keys(todos).map((key) => todos[key]);
}

class TodoContainer extends React.Component<Props, undefined> {
  render () {
    return (
      <Row>
        <Col md={6}>
          <TodoList todos={toArray(this.props.todos)} />
        </Col>
        <Col md={6}>
          <TodoAdd onAdd={this.props.addTodo} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: BaseState, ownProps: Props) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch: Dispatch<BaseState>) => ({
  addTodo: (name: string) => { dispatch(addTodo(name)); } 
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
