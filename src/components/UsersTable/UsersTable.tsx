import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import _ from 'lodash';
import { IUser } from 'src/types';

interface UsersTableProps {
  users: IUser[];
  cellsToDisplay: { key: string; label: string }[];
}

const UsersTable = ({ users, cellsToDisplay }: UsersTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Users list">
        <TableHead>
          <TableRow>
            {cellsToDisplay.map((cell) => (
              <TableCell key={cell.key}>{cell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              {cellsToDisplay.map((cell) => (
                <TableCell key={cell.key}>{_.get(user, cell.key)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { UsersTable };
