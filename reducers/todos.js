import defaultTodos from "./../defaultTodos.json";
import actions from "./../actions";

const todosReducer = (state = defaultTodos, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.value] };

    case actions.TOGGLE_TODO_COMPLETE:
      const todos = state.todos.map(
        t => (t.id === action.value ? { ...t, done: !t.done } : t)
      );
      return { ...state, todos };

    default:
      return { ...state };
  }
};

export default todosReducer;
