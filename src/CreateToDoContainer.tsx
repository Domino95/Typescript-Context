import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToDoListContext } from './ToDoListProvider';
import { ReducerToDoListType } from './ToDoListTypes';
import generateRandomUuid from './helpers';

export default function CreateToDoContainer() {
  const { dispatch } = useContext(ToDoListContext);
  const [toDoTitle, setToDoTitle] = useState('');

  console.log('CREATE');

  const handleToDoTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setToDoTitle(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!toDoTitle.length) return;

    const payload = {
      id: generateRandomUuid(),
      title: toDoTitle,
      isDone: false,
      date: new Date(),
    };
    dispatch({ type: ReducerToDoListType.ADD_TODO, payload });
    setToDoTitle('');
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: '20px 0',
      }}
      onSubmit={handleOnSubmit}
    >
      <TextField
        sx={{ width: '100%', marginRight: '5px' }}
        value={toDoTitle}
        label="To Do Title"
        variant="outlined"
        onChange={handleToDoTitle}
      />
      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
}
