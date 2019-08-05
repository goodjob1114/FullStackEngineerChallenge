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
import {
  useUpdateReviewMutation,
  GetReviewsDocument,
} from '../../generatedTypes';

interface Props {
  id: string;
  toUserName: string;
  feedback?: string;
}

const EditReviewButton = ({
  id,
  toUserName,
  feedback: defaultFeedback,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState(defaultFeedback || '');

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleFeedbackChange = useCallback(e => {
    setFeedback(e.target.value);
  }, []);

  const [updateReview, { error }] = useUpdateReviewMutation({
    variables: {
      id,
      feedback,
    },
    refetchQueries: () => [{ query: GetReviewsDocument }],
  });

  const handleSubmit = useCallback(async () => {
    // TODO: validate the email input
    await updateReview();

    // TODO: handle and monitor the error
    if (error) console.error(error);

    handleClose();
  }, [updateReview, error, handleClose]);

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
        <DialogTitle id="form-dialog-title">Edit review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit the review to {toUserName}, update the feedback field.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="feedback"
            label="Feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(EditReviewButton);
