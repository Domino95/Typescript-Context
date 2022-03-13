import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CreateToDoContainer from './CreateToDoContainer';
import ListToDoes from './ListToDoes';

const ListContainer = (): JSX.Element => {
  console.log('ListContainer');
  return (
    <Container>
      <CreateToDoContainer />
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '85vh',
          padding: '10px',
          boxSizing: 'border-box',
          overflow: 'scroll',
        }}
      >
        <ListToDoes />
      </Box>
    </Container>
  );
};
export default ListContainer;
