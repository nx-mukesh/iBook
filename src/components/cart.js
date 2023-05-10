import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    maxWidth: '800px',
    margin: 'auto',
  },
  media: {
    width: '200px',
    height: '200px',
    margin: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  quantityText: {
    marginRight: theme.spacing(1),
  },
}));

const InCart = (props) => {
  console.log('LOG ~ file: cart.js:42 ~ InCart ~ props:', props);
  const { products } = props;
  console.log('LOG ~ file: cart.js:42 ~ InCart ~ products:', products);
  const [quantity, setQuantity] = useState(1);
  const classes = useStyles();

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={products.imageUrl} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5">
          {products.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {products.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          ${products.price.toFixed(2)}
        </Typography>
        <Box className={classes.quantity}>
          <Typography className={classes.quantityText}>Quantity:</Typography>
          <IconButton aria-label="Decrease quantity" onClick={handleDecreaseQuantity}>
            <Remove />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton aria-label="Increase quantity" onClick={handleIncreaseQuantity}>
            <Add />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InCart;
