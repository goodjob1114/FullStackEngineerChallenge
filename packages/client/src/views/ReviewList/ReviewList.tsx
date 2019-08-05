import React from 'react';
import { useGetReviewsQuery } from '../../generatedTypes';
import { makeStyles } from '../../theme/theme';
import ReviewsToolbar from './ReviewsToolbar';
import ReviewsTable from './ReviewsTable';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const ReviewList = () => {
  const classes = useStyles();
  const { data: { reviews = [] } = {} } = useGetReviewsQuery();

  return (
    <div className={classes.root}>
      <ReviewsToolbar />
      <div className={classes.content}>
        <ReviewsTable reviews={reviews} />
      </div>
    </div>
  );
};

export default React.memo(ReviewList);
