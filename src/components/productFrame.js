import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function ProductFrame({ product }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {product.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={2} mt={1} key={item.name}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.image} title={item.name} />
            <CardContent>
              <Link href='/product/1'>
                <Typography gutterBottom variant='h5' component='h2'>
                  {item.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {item.writer}
                </Typography>
                <Typography variant='h6' color='textSecondary' component='h6'>
                  Price: Rs. {item.price ? item.price : 230}
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductFrame;
