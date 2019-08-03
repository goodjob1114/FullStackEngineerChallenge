import React, { useCallback } from 'react';
import {
  Avatar,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import * as D from 'date-fns/fp';
import { makeStyles } from '../../theme/theme';
import { User } from './UsersTable';

interface Props {
  user: User;
  selected: boolean;
  onSelectedChange: (user: User, isSelected: boolean) => void;
}

const useStyles = makeStyles(theme => ({
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const UserRow = (props: Props) => {
  const { user, selected, onSelectedChange } = props;
  const classes = useStyles();

  const handleSelect = useCallback(() => {
    onSelectedChange(user, !selected);
  }, [user, selected, onSelectedChange]);

  return (
    <TableRow hover key={user.id} selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          color="primary"
          onChange={handleSelect}
          value="true"
        />
      </TableCell>
      <TableCell>
        <div className={classes.nameContainer}>
          <Avatar
            className={classes.avatar}
            src={`https://avatars.dicebear.com/v2/human/${user.id}.svg`}
          >
            {user.name}
          </Avatar>
          <Typography variant="body1">{user.name}</Typography>
        </div>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{user.email}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1">
          {D.format('dd/MM/yyyy', new Date(user.createdAt))}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default React.memo(UserRow);
