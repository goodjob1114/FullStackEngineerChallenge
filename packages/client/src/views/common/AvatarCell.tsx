import React from 'react';
import { TableCell, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '../../theme/theme';

interface Props {
  id: string;
  name: string;
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

const AvatarCell = ({ id, name }: Props) => {
  const classes = useStyles();

  return (
    <TableCell>
      <div className={classes.nameContainer}>
        <Avatar
          className={classes.avatar}
          src={`https://avatars.dicebear.com/v2/human/${id}.svg`}
        >
          {name}
        </Avatar>
        <Typography variant="body1">{name}</Typography>
      </div>
    </TableCell>
  );
};

export default React.memo(AvatarCell);
