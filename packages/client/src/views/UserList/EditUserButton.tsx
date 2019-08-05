import React, { useCallback, useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useUpdateUserMutation, GetUsersDocument } from '../../generatedTypes';

interface Props {
  id: string;
  name: string;
  email: string;
}

const EditUserButton = ({
  id,
  name: defaultName,
  email: defaultEmail,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const [updateUser, { error }] = useUpdateUserMutation({
    variables: {
      id,
      name,
      email,
    },
    refetchQueries: () => [{ query: GetUsersDocument }],
  });

  const handleSubmit = useCallback(async () => {
    // TODO: validate the email input
    await updateUser();

    // TODO: handle and monitor the error
    if (error) console.error(error);

    handleClose();
  }, [updateUser, error, handleClose]);

  return (
    <>
      <IconButton onClick={handleClickOpen} aria-label="edit">
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the user, change the email address or the name.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            value={name}
            onChange={handleNameChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(EditUserButton);
