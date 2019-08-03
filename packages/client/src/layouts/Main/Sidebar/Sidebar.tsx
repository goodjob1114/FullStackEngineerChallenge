import React from 'react';
import clsx from 'clsx';
import { Divider, Drawer } from '@material-ui/core';
import RateReview from '@material-ui/icons/RateReview';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '../../../theme/theme';
import Profile from './Profile';
import SidebarNav from './SidebarNav';
import { DrawerProps } from '@material-ui/core/Drawer';

interface Props {
  className?: string;
  onClose: () => void;
  open: boolean;
  variant: DrawerProps['variant'];
}

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props: Props) => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Reviews',
      href: '/reviews',
      icon: <RateReview />,
    },
    {
      title: 'Users',
      href: '/users',
      icon: <PeopleIcon />,
    },
    {
      title: 'Account',
      href: '/account',
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

export default React.memo(Sidebar);
