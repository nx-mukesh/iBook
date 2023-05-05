import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@material-ui/icons';
import {useState} from 'react';

export default function ProductDetails({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <CardMedia
          style={{ height: '100%', width: '100%', backgroundSize: 'contain' }}
          image={product.image}
          title={product.name}
        />
      </div>
      <div style={{ flex: 1, padding: '16px' }}>
        <CardHeader
          title={product.name}
          subheader={product.variants[0].name}
          action={
            <IconButton onClick={handleFavoriteClick}>
              {isFavorite ? <FavoriteOutlined color="secondary" /> : <FavoriteBorderOutlined />}
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {product.price}
          </Typography>
          {product.variants.map((variant) => (
            <Typography key={variant.id} variant="body2" color="textSecondary">
              {variant.name}: {variant.value}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="large">
            Buy Now
          </Button>
          <Button variant="contained" color="secondary" size="large" style={{ marginLeft: '16px' }}>
            Add to Cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
