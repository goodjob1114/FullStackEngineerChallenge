import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '../../theme/theme';
import LogoLink from '../LogoLink';

interface Props {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
  },
}));

const Topbar = (props: Props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <LogoLink />
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Topbar);
