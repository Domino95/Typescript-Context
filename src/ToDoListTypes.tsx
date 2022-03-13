import React from 'react';

export enum ReducerToDoListType {
  ADD_TODO,
  DELETE_TODO,
  HANDLE_IS_DONE,
}

export interface ToDoListProviderProps {
  children: JSX.Element;
}

export interface TodoContext {
  toDoesList: ToDoList;
  dispatch: React.Dispatch<ReducerActions>;
}

export interface OneToDo {
  id: number;
  isDone: boolean;
  title: string;
  date: Date;
}

export type ToDoList = OneToDo[];

export interface CreateTodoAction {
  type: ReducerToDoListType.ADD_TODO;
  payload: OneToDo;
}

export interface DeleteTodoAction {
  type: ReducerToDoListType.DELETE_TODO;
  payload: { id: OneToDo['id'] };
}

export interface HandleIsDoneAction {
  type: ReducerToDoListType.HANDLE_IS_DONE;
  payload: { id: OneToDo['id']; isDone: OneToDo['isDone'] };
}

export type ReducerActions =
  | CreateTodoAction
  | DeleteTodoAction
  | HandleIsDoneAction;
