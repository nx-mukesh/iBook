import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


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
      <img className={classes.logo} src='/logo2.png' alt="Logo" />
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          <Link href='/product'>
            <div style={{ textDecoration: 'none', color: 'inherit' }}>iBook.com</div>
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
