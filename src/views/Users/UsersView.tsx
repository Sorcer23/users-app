import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Container, Box } from '@mui/material';
import _ from 'lodash';
import { useRootStore } from 'src/context/root-store/root-store.context';
import { UsersTable } from 'src/components/UsersTable';

const UsersView = observer(() => {
  const { usersStore } = useRootStore();
  const { users, isLoading, cellsToDisplay, fetchUsers } = usersStore;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container>
      <Box sx={{ pt: 2 }}>
        {isLoading ? 'Loading...' : <UsersTable users={users} cellsToDisplay={cellsToDisplay} />}
      </Box>
    </Container>
  );
});

export { UsersView };
