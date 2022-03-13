import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { ToDoListContext } from './ToDoListProvider';
import DeleteButton from './DeleteButton';
import CheckedComponent from './CheckedComponent';
import type { OneToDo } from './ToDoListTypes';

export default function ListToDoes() {
  const { toDoesList, dispatch } = useContext(ToDoListContext);

  console.log('LIST');

  if (!toDoesList.length) return <h1>Enter to does</h1>;

  return (
    <>
      {toDoesList.map((toDo: OneToDo) => (
        <div
          key={toDo.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: '2px solid black',
          }}
        >
          <CheckedComponent
            isDone={toDo.isDone}
            dispatch={dispatch}
            id={toDo.id}
          />
          <Typography
            variant="subtitle1"
            component="h1"
            sx={{ width: '100%', textAlign: 'center' }}
          >
            {toDo.title}
          </Typography>
          <DeleteButton id={toDo.id} dispatch={dispatch} />
        </div>
      ))}
    </>
  );
}
