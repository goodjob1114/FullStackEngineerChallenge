import React from 'react';
import clsx from 'clsx';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '../../theme/theme';

interface Props {
  className?: string;
  placeholder?: string;
  onChange?: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
  },
}));

const SearchInput = (props: Props) => {
  const { className, onChange, placeholder } = props;

  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, className)}>
      <SearchIcon className={classes.icon} />
      <Input
        className={classes.input}
        placeholder={placeholder}
        disableUnderline
        onChange={onChange}
      />
    </Paper>
  );
};

export default React.memo(SearchInput);
