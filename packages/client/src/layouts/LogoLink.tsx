import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '../theme/theme';

const useStyles = makeStyles(theme => ({
  img: {
    height: theme.spacing(5),
  },
}));

const LogoLink = () => {
  const classes = useStyles();

  return (
    <Link to="/">
      <img className={classes.img} alt="Logo" src="/logo-192x192.png" />
    </Link>
  );
};

export default React.memo(LogoLink);
