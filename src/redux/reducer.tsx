import { combineReducers } from 'redux';
import { State } from 'models';

import todos, { STATE_KEY as TODOS_STATE_KEY } from 'modules/todo';

const reducer = combineReducers<State>({
  [TODOS_STATE_KEY]: todos
});

export default reducer;
