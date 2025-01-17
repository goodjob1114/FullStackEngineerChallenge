import React, { useState, useCallback } from 'react';
import * as R from 'ramda';
import clsx from 'clsx';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@material-ui/core';
import { makeStyles } from '../../theme/theme';
import UserRow, { User } from './UserRow';

interface Props {
  className?: string;
  users: User[];
}

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));

const UsersTable = (props: Props) => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = useCallback(
    event => {
      const selectedUsers = event.target.checked
        ? users.map(user => user.id)
        : [];

      setSelectedUsers(selectedUsers);
    },
    [users]
  );

  const handleSelectOne = useCallback((user: User, isSelected: boolean) => {
    setSelectedUsers(selectedUsers =>
      isSelected
        ? R.union(selectedUsers, [user.id])
        : R.filter(id => id !== user.id, selectedUsers)
    );
  }, []);

  const handlePageChange = useCallback((event, page) => {
    setPage(page);
  }, []);

  const handleRowsPerPageChange = useCallback(event => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.inner}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedUsers.length === users.length}
                    color="primary"
                    indeterminate={
                      selectedUsers.length > 0 &&
                      selectedUsers.length < users.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                {/* The empty cell for Edit buttons */}
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .sort((a, b) => b.createdAt - a.createdAt)
                .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                .map(user => (
                  <UserRow
                    key={user.id}
                    selected={selectedUsers.includes(user.id)}
                    user={user}
                    onSelectedChange={handleSelectOne}
                  />
                ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

export default React.memo(UsersTable);
