import React from 'react';
import { TableCell, TableRow, Typography } from '@material-ui/core';
import * as D from 'date-fns/fp';
import { Review } from './ReviewsTable';
import AvatarCell from '../common/AvatarCell';

const DATETIME_FORMAT = 'dd/MM/yyyy HH:mm:ss';

interface Props {
  review: Review;
}

const ReviewRow = (props: Props) => {
  const { review } = props;

  return (
    <TableRow hover key={review.id}>
      <AvatarCell id={review.to.id} name={review.to.name} />
      <AvatarCell id={review.from.id} name={review.from.name} />
      <TableCell>
        <Typography variant="body1">{review.feedback}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">
          {review.submittedAt &&
            D.format(DATETIME_FORMAT, new Date(review.submittedAt))}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">
          {D.format(DATETIME_FORMAT, new Date(review.createdAt))}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default React.memo(ReviewRow);
