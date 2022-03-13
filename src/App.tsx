import ToDoListProvider from './ToDoListProvider';
import ListContainer from './ListContainer';

const App = () => {
  console.log('App');

  return (
    <ToDoListProvider>
      <ListContainer />
    </ToDoListProvider>
  );
};

export default App;
