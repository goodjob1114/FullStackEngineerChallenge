import React from 'react';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import SearchInput from '../common/SearchInput';
import { makeStyles } from '../../theme/theme';

interface Props {
  className?: string;
}

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const UsersToolbar = (props: Props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        {/* TODO: implement adding users */}
        <Button color="primary" variant="contained">
          Add user
        </Button>
      </div>
      <div className={classes.row}>
        {/* TODO: implement searching */}
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
    </div>
  );
};

export default React.memo(UsersToolbar);
