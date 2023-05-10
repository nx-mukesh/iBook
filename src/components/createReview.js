import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const CreateReview = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send review data to backend here
    setReviewSubmitted(true);
  };

  if (reviewSubmitted) {
    return (
      <Box mt={2}>
        <Typography variant="h6">Thank you for your review!</Typography>
      </Box>
    );
  }

  return (
    <Box mt={2}>
      <Typography variant="h6">Write a Review</Typography>
      <Box mt={2}>
        <form onSubmit={handleSubmit}>
          <Rating name="rating" value={rating} onChange={handleRatingChange} />
          <Box mt={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Review</FormLabel>
              <TextField
                multiline
                rows={4}
                variant="outlined"
                value={reviewText}
                onChange={handleReviewTextChange}
              />
            </FormControl>
          </Box>
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateReview;
