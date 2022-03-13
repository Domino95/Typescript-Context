import { createContext, useReducer, useMemo } from 'react';
import { ToDoListProviderProps, ToDoList, TodoContext } from './ToDoListTypes';
import toDoListReducer from './ToDoListReducer';

const initialState: ToDoList = [];

export const ToDoListContext = createContext<TodoContext>({
  toDoesList: [],
  dispatch: () => {},
});

const ToDoListProvider = ({ children }: ToDoListProviderProps) => {
  const [toDoesList, dispatch] = useReducer(toDoListReducer, initialState);

  const value = useMemo(() => ({ toDoesList, dispatch }), [toDoesList]);

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListProvider;
