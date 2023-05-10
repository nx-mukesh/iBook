import { useState } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Grid, Typography, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(2),
      width: '100%',
      maxWidth: '500px',
    },
  },
  submitButton: {
    backgroundColor: theme.palette.success.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
  cancelButton: {
    backgroundColor: theme.palette.error.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

const CheckoutPage = () => {
  const router = useRouter();
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    email: '',
    phoneNumber: '',
    cardNumber: '',
    cardExpiry:'',
    cvvNumber:''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/checkout', formValues);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    // Redirect user back to previous page
    router.back();
  };

  return (
    <Container className={classes.container}>
      <Typography variant='h4' gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          id='email'
          label='Email'
          variant='outlined'
          type='email'
          value={formValues.email}
          onChange={handleInputChange}
        />
        <TextField
          id='phoneNumber'
          label='Phone Number'
          variant='outlined'
          type='tel'
          inputProps={{ maxLength: 10 }}
          value={formValues.phoneNumber}
          InputProps={{
            startAdornment: <InputAdornment position='start'>+91</InputAdornment>,
            maxLength: 10,
            inputMode: 'numeric',
          }}
          onChange={handleInputChange}
        />

        <TextField
          id='cardNumber'
          label='Credit Card Number'
          variant='outlined'
          value={formValues.cardNumber}
          onChange={handleInputChange}
        />
        <Grid container gap={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='cardExpiration'
              label='Credit Card Expiration'
              variant='outlined'
              value={formValues.cardExpiry}
              inputProps={{
                maxLength: 7,
                pattern: '^[0-9]{4}-[0-9]{2}$',
                placeholder: 'MM/YYYY',
                inputMode: 'numeric',
              }}
              helperText='Formate: MM/YYYY'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id='cvvNumber'
              label='CVV Number'
              variant='outlined'
              value={formValues.cvvNumber}
              inputProps={{ maxLength: 10, inputMode: 'numeric', maxLength: 3 }}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button type='button' variant='contained' fullWidth className={classes.cancelButton} onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button type='submit' variant='contained' fullWidth className={classes.submitButton}>
              Make Payment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default CheckoutPage;
