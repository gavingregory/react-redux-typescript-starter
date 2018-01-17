import { NumberMap } from 'models';
import { Todo, State as BaseState } from 'models';
import { Dispatch } from 'redux';
import uuid = require('uuid/v4');
import { addTodo as addTodoCreator, ADD_TODO } from 'actions/todo';

export const STATE_KEY = 'todos';
const DefaultState = {};

export default function reducer (state: NumberMap<Todo> = DefaultState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const todo: Todo = {
        id: uuid(),
        name: action.payload,
        created: new Date()
      };
      return Object.assign({}, state, {[todo.id]: todo});
    }
    default:
      return state;
  }
}

export const addTodo = (name: string) => {
  return (dispatch: Dispatch<BaseState>) => {
    dispatch(addTodoCreator(name));
  };
}
