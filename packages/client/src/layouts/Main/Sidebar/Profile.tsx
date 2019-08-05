import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '../../../theme/theme';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));

interface Props {
  className?: string;
}

const Profile = (props: Props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  // TODO: use the real user profile
  const user = {
    name: 'CT Wu',
    avatar: 'https://avatars.dicebear.com/v2/male/wuct.svg',
    bio: 'Fullstack Engineer',
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

export default React.memo(Profile);
