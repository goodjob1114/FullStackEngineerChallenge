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
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const ReviewToolbar = (props: Props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        {/* TODO: implement adding reviews */}
        <Button color="primary" variant="contained">
          Create Review
        </Button>
      </div>
      <div className={classes.row}>
        {/* TODO: implement searching */}
        <SearchInput className={classes.searchInput} placeholder="Search" />
      </div>
    </div>
  );
};

export default React.memo(ReviewToolbar);
