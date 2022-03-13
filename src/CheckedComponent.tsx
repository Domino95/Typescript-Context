import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { ReducerToDoListType, type HandleIsDoneAction } from './ToDoListTypes';

interface CheckedComponentProps {
  id: number;
  isDone: boolean;
  dispatch: React.Dispatch<HandleIsDoneAction>;
}

const CheckedComponent = ({ isDone, id, dispatch }: CheckedComponentProps) => {
  console.log('CHECKED');
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const payload = { id, isDone: checked };
    dispatch({ type: ReducerToDoListType.HANDLE_IS_DONE, payload });
  };

  return <Checkbox checked={isDone} onChange={handleChecked} />;
};

export default React.memo(CheckedComponent);
