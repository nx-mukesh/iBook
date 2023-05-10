import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Divider } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    marginTop: 'auto',
    color: '#fff',
    background: '#172337'
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  category: {
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  social: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
        <div className={classes.categories}>
          <div className={classes.category}>
            <Typography variant='subtitle1'>Service</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet</Typography>
          </div>
          <div className={classes.category}>
            <Typography variant='subtitle1'>About Us</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet</Typography>
          </div>
          <div className={classes.category}>
            <Typography variant='subtitle1'>Contact Details</Typography>
            <Typography variant='body2'>123 Main St, Anytown USA</Typography>
          </div>
          <div className={classes.category}>
            <Typography variant='subtitle1'>Address</Typography>
            <Typography variant='body2'>(123) 456-7890</Typography>
          </div>
        </div>
        <Divider />
        <div className={classes.social}>
          <Typography variant='body2'>Follow us on social media:</Typography>
          <Link href='#' className={classes.icon}>
            <FacebookIcon />
          </Link>
          <Link href='#' className={classes.icon}>
            <TwitterIcon />
          </Link>
          <Link href='#' className={classes.icon}>
            <InstagramIcon />
          </Link>
        </div>
      </footer>
  );
};

export default Footer;
