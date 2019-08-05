import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@material-ui/core';
import { makeStyles } from '../../theme/theme';
import ReviewRow from './ReviewRow';

interface User {
  id: string;
  name: string;
}

export interface Review {
  id: string;
  from: User;
  to: User;
  feedback?: string | null;
  createdAt: number;
  submittedAt?: number;
}

interface Props {
  className?: string;
  reviews: Review[];
}

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));

const ReviewsTable = (props: Props) => {
  const { className, reviews, ...rest } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = useCallback((event, page) => {
    setPage(page);
  }, []);

  const handleRowsPerPageChange = useCallback(event => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.inner}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Feedback</TableCell>
                <TableCell>Submitted at</TableCell>
                <TableCell>Created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews
                .sort((a, b) => b.createdAt - a.createdAt)
                .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                .map(review => (
                  <ReviewRow key={review.id} review={review} />
                ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={reviews.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

export default React.memo(ReviewsTable);
