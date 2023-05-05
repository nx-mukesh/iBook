import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    backgroundColor: '#F4F4F4',
  },
  heading: {
    marginBottom: theme.spacing(4),
  },
  subheading: {
    marginBottom: theme.spacing(2),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" className={classes.heading}>
            About Us
          </Typography>
          <Typography variant="h5" component="h2" className={classes.subheading}>
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Welcome to our online bookstore, where we offer a curated selection of award-winning books, biographies, poetry, and more. Our mission is to provide our customers with a diverse collection of literature that not only entertains, but also informs and inspires.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            We believe that books have the power to transform lives, and we're passionate about sharing the joy of reading with others. That's why we carefully handpick each book in our collection, ensuring that they meet our high standards for quality and content.
          </Typography>
          <Typography variant="h5" component="h2" className={classes.subheading}>
            Our Promise
          </Typography>
          <Typography variant="body1" className={classes.text}>
            At our bookstore, you'll find books that explore a wide range of topics and genres, from biographies and memoirs that showcase the lives of great leaders, to award-winning novels and poetry collections that captivate and inspire. Whether you're looking for a thought-provoking read or a light-hearted escape, we have something for everyone.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            We also pride ourselves on offering a user-friendly online shopping experience, with easy navigation and secure checkout. We understand that your time is valuable, and we're committed to making your shopping experience as convenient and enjoyable as possible.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://via.placeholder.com/500x500" alt="Books" />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
