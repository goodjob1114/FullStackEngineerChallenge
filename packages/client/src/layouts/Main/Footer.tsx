import React from 'react';
import clsx from 'clsx';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '../../theme/theme';

interface Props {
  className?: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Footer = (props: Props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{' '}
        <Link component="a" href="https://github.com/wuct" target="_blank">
          wuct
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};

export default React.memo(Footer);
