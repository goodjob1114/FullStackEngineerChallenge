import React, { ReactNode } from 'react';
import { makeStyles } from '../../theme/theme';
import Topbar from './Topbar';

interface Props {
  children?: ReactNode;
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%',
  },
  content: {
    height: '100%',
  },
}));

const Minimal = (props: Props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default React.memo(Minimal);
