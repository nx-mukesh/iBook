import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  form: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
}));

function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h6' gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec interdum libero. Praesent sit amet metus
        finibus, gravida justo eget, tincidunt sapien. Nunc hendrerit quam ac tortor tincidunt, quis eleifend mauris
        lacinia. Integer quis mauris non sapien dictum euismod. Nulla facilisi. Mauris ac quam sit amet magna gravida
        consequat. Ut eu sem ut elit molestie efficitur. Nunc id tortor aliquet, commodo lectus quis, mollis nisi.
      </Typography>
      <Typography variant='h4' gutterBottom>
        Contact Us
      </Typography>
      <form className={classes.form}>
        <TextField label='Name' variant='outlined' className={classes.textField} />
        <TextField label='Email' variant='outlined' className={classes.textField} />
        <TextField label='Message' variant='outlined' multiline rows={4} className={classes.textField} />
        <div className='button' style={{display:'flex', gap:'10px'}}>
          <Button variant='contained' color='primary' className={classes.button}>
            Submit
          </Button>
          <Button variant='contained' color='danger' className={classes.button}>
            cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
