import React from 'react';
import { InCart, PlaceOrderButton } from '@/components';
import { Container, Grid, GridItem } from '@material-ui/core';
import MyImage from '../../../../public/assets/samsungFold.jpg';
const Cart = () => {
  const products = [
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg  ',
    },
    {
      name: 'Godan',
      writer: 'Munshi Premchand',
      edition: 1999,
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
    },
    {
      name: 'Paradise Lost',
      writer: 'John Miltion',
      edition: 1945,
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
    },
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'MyImage',
    },
  ];

  const productsInCart = {
    name: 'Samsung Fold',
    description: 'This is Samsung Fold phone',
    price: 199.99,
    imageUrl: 'https://m.media-amazon.com/images/I/41kt8GCwo5L._SX300_SY300_QL70_FMwebp_.jpg',
    // imageUrl: {MyImage},
  };

  return (
    <Container>
      <InCart products={productsInCart} /><br/>
      <PlaceOrderButton />
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <GridItem>
            <InCart products={productsInCart} />
            <br />
          </GridItem>
        </Grid>
        <PlaceOrderButton />
      </Grid> */}
    </Container>
  );
};

export default Cart;
