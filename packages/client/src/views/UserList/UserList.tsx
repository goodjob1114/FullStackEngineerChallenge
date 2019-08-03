import React, { useState } from 'react';
import mockData from './data';
import { makeStyles } from '../../theme/theme';
import UsersToolbar from './UsersToolbar';
import UsersTable from './UsersTable';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default React.memo(UserList);
