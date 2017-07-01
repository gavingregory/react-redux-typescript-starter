import { NumberMap } from 'models';
import { Todo } from 'models';

/**
 * State represents the base state in the redux store.
 */
export class State {
  constructor (
    public todos: NumberMap<Todo>
  ) {}
}
