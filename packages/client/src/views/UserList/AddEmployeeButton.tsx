import React, { useCallback, useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@material-ui/core';
import {
  useCreateEmployeeMutation,
  GetUsersDocument,
} from '../../generatedTypes';

const AddEmployeeButton = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

  const [createEmployee, { error }] = useCreateEmployeeMutation({
    variables: {
      name,
      email,
    },
    refetchQueries: () => [{ query: GetUsersDocument }],
  });

  const handleSubmit = useCallback(async () => {
    // TODO: validate the email input
    await createEmployee();

    // TODO: handle and monitor the error
    if (error) console.error(error);

    handleClose();
  }, [createEmployee, error, handleClose]);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add employee
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new employee, please enter the email address and the
            name.
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(AddEmployeeButton);
