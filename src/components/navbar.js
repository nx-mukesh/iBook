import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(2),
    maxHeight: 50,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <img className={classes.logo} src='/logo2.png' alt='Logo' />
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          <Link href='/product'>
            <Typography variant='h6' style={{ flexGrow: 1 }}>
              <div style={{ textDecoration: 'none', color: 'inherit' }}>iBook.com</div>
            </Typography>
          </Link>
        </Typography>

        {/* Links */}
        <Link href='/about'>
          <h4 style={{ marginRight: '1rem', textDecoration: 'none', color: 'inherit' }}>About Us</h4>
        </Link>
        <Link href='/contact'>
          <h4 style={{ marginRight: '1rem', textDecoration: 'none', color: 'inherit' }}>Contact Us</h4>
        </Link>
        <Link href='/auth/signin'>
          <h4 style={{ textDecoration: 'none', color: 'inherit' }}>Login</h4>
        </Link>
        <Link href='/order/cart'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
