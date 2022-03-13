import { ReducerToDoListType, ToDoList, ReducerActions } from './ToDoListTypes';

const toDoListReducer = (state: ToDoList, action: ReducerActions) => {
  switch (action.type) {
    case ReducerToDoListType.ADD_TODO:
      return [...state, { ...action.payload }];
    case ReducerToDoListType.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ReducerToDoListType.HANDLE_IS_DONE:
      return state.map((toDo) => {
        if (toDo.id !== action.payload.id) return toDo;
        return { ...toDo, isDone: action.payload.isDone };
      });
    default:
      return state;
  }
};
export default toDoListReducer;
