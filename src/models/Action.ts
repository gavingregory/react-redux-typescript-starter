/**
 * An Action, with optional payload & error.
 */
export interface Action<P> {
  type: string;
  payload?: P;
  error?: string;
}
