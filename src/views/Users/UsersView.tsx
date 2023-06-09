import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Container, Box, TextField } from '@mui/material';
import _ from 'lodash';
import { useRootStore } from 'src/context/root-store/root-store.context';
import { UsersTable } from 'src/components/UsersTable';

const UsersView = observer(() => {
  const { usersStore } = useRootStore();
  const { filteredUsers, isLoading, cellsToDisplay, fetchUsers, changeFilter } = usersStore;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleFilterChange: React.ChangeEventHandler<HTMLInputElement> = (event) => changeFilter(event.target.value);

  return (
    <Container>
      <Box sx={{ pt: 2 }}>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <TextField label="Text to filter" variant="outlined" sx={{ mb: 2 }} onChange={handleFilterChange} />
            <UsersTable users={filteredUsers} cellsToDisplay={cellsToDisplay} />
          </>
        )}
      </Box>
    </Container>
  );
});

export { UsersView };
