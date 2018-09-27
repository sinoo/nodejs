export default function(reducer) {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
  };

  return function(state = initialState, action = {}) {
    let { past, present, future } = state;
    switch (action.type) {
      case 'UNDO':
        let previous = past[past.length - 1];
        return {
          past: past.slice(0, past.length - 1),
          present: previous,
          future: [present, ...future],
        };
      case 'REDO':
        let next = future[0];
        return {
          past: [...past, present],
          present: next,
          future: future.slice(1),
        };
      default:
        let newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
}