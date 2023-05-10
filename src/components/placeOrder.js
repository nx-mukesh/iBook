import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import Link from 'next/link';
// import {Margin} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    maxWidth: '800px',
    marginLeft: '215px',
  },
  button: {
    position: 'absolute', // set position to absolute
    top: '50%', // center vertically
    right: theme.spacing(5), // set a right margin
    transform: 'translateY(-50%)', // adjust the button to the center
  },
}));
const PlaceOrderButton = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div>
          <h2>Total Line Item: 05</h2>
        </div>
        <p>Make sure you have sufficient quantity</p>
      </CardContent>
      <Link href='/order/checkout'>
        <Button size='large' variant='contained' color='primary' className={classes.button}>
          Place Order
        </Button>
      </Link>
    </Card>
  );
};

export default PlaceOrderButton;
