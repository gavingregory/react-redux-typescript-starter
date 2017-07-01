import { Action } from 'models';

const PREFIX = 'TODO';

export const ADD_TODO = `${PREFIX}:ADD_TODO`;
export const addTodo = (name: string):Action<string> => ({ type: ADD_TODO, payload: name });
