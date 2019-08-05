import React, { useCallback, useState, useMemo } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import {
  useGetUsersQuery,
  useCreateReviewMutation,
  GetReviewsDocument,
} from '../../generatedTypes';

const CreateReviewButton = () => {
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const { data: { users = [] } = {} } = useGetUsersQuery();

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFromChange = useCallback(e => {
    setFrom(e.target.value);
  }, []);

  const handleToChange = useCallback(e => {
    setTo(e.target.value);
  }, []);

  const [createReview, { error }] = useCreateReviewMutation({
    variables: {
      from,
      to,
    },
    refetchQueries: () => [{ query: GetReviewsDocument }],
  });

  const handleSubmit = useCallback(async () => {
    // TODO: validate the from and to are not empty strings
    await createReview();

    // TODO: handle and monitor the error
    if (error) console.error(error);

    handleClose();
  }, [createReview, error, handleClose]);

  const userOptions = useMemo(
    () =>
      users
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(user => (
          <MenuItem key={user.id} value={user.id}>
            {user.name}
          </MenuItem>
        ))
        .concat(),
    [users]
  );

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new performance review, please select the user to review
            from and the user to review to.
          </DialogContentText>
          <FormControl required fullWidth>
            <InputLabel htmlFor="from-user">From</InputLabel>
            <Select
              name="from-user"
              inputProps={{
                id: 'from-user',
              }}
              value={from}
              onChange={handleFromChange}
            >
              {userOptions}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl required fullWidth>
            <InputLabel htmlFor="to-user">To</InputLabel>
            <Select
              name="to-user"
              inputProps={{
                id: 'to-user',
              }}
              value={to}
              onChange={handleToChange}
            >
              {userOptions}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(CreateReviewButton);
