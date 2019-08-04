import React, { useCallback } from 'react';
import { Checkbox, TableCell, TableRow, Typography } from '@material-ui/core';
import * as D from 'date-fns/fp';
import AvatarCell from '../common/AvatarCell';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: number;
}

interface Props {
  user: User;
  selected: boolean;
  onSelectedChange: (user: User, isSelected: boolean) => void;
}

const UserRow = (props: Props) => {
  const { user, selected, onSelectedChange } = props;

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
      <AvatarCell id={user.id} name={user.name} />
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
