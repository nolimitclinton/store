export type Action = { type: string } & Record<string, any>;
export type Reducer<S> = (state: S, action: Action) => S;

export type Store<S> = {
  getState: () => S;
  dispatch: (action: Action) => void;
  subscribe: (listener: () => void) => () => void;
};

export function createStore<S extends Record<string, any>>(
  initialState: S,
  reducer: Reducer<S>
): Store<S> {
  let state = initialState;
  let listeners: (() => void)[] = [];

  function getState() {
    return state;
  }

  function dispatch(action: Action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener: () => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  return { getState, dispatch, subscribe };
}