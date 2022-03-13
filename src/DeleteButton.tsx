import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReducerToDoListType, type DeleteTodoAction } from './ToDoListTypes';

interface DeleteButtonProps {
  id: number;
  dispatch: React.Dispatch<DeleteTodoAction>;
}

type PropsAreEqual<T> = (
  prevProps: Readonly<T>,
  nextProps: Readonly<T>,
) => boolean;

const areEqual: PropsAreEqual<DeleteButtonProps> = (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  return true;
};

const DeleteButton = ({ id, dispatch }: DeleteButtonProps) => {
  console.log('DELETE');
  const handleOnClick = (): void => {
    const payload = { id };
    dispatch({ type: ReducerToDoListType.DELETE_TODO, payload });
  };

  return (
    <Button
      sx={{ marginLeft: 'auto' }}
      variant="contained"
      startIcon={<DeleteIcon />}
      onClick={handleOnClick}
    >
      Delete
    </Button>
  );
};
export default React.memo(DeleteButton, areEqual);
