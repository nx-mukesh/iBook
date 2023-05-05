import React from 'react';
import { AboutUs } from '../components';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 350,
    margin: theme.spacing(2),
  },
  media: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginTop:"20px"
  },
  quote: {
    fontStyle: 'italic',
    margin: theme.spacing(2),
  },
  name: {
    fontWeight: 'bold',
  },
}));

const quotes = [
  {
    name: 'Malcolm X',
    quote:
      'The ability to read awoke inside of me some long dormant craving to be mentally alive.',
    image: 'https://picsum.photos/id/1018/200/200',
  },
  {
    name: 'Nelson Mandela',
    quote: 'Education is the most powerful weapon which you can use to change the world.   ....',
    image: 'https://picsum.photos/id/1025/200/200',
  },
  {
    name: 'Albert Einstein',
    quote:
      'The reading of all good books is like a conversation with the finest minds of past centuries.',
    image: 'https://picsum.photos/id/1037/200/200',
  },
];

const AboutUsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <AboutUs/>
      <Grid container direction="row" alignItems="center">
        {quotes.map((quote, index) => (
          <Card key={index} className={classes.card}>
            <CardMedia className={classes.media} image={quote.image} title={quote.name} />
            <CardContent>
              <Typography variant="body1" className={classes.quote}>
                {quote.quote}
              </Typography>
              <Typography variant="subtitle1" className={classes.name}>
                {quote.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default AboutUsPage;
