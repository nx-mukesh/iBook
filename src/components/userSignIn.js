import {useState} from 'react';
import {CircularProgress} from '@material-ui/core';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function UserSignIn() {
  const [formValue, setFormValue] = useState({email:'', password:''});
  const [loading, setLoading] = useState(false);
  const  theme = createTheme();


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(async()=>{
      try {
        const response = await axios.post('/api/register', formValue);
        console.log(response.data);
        setLoading(false)
        console.log("userData", formValue)
      } catch (err) {
        setLoading(false)
        console.log(err);
      }
    },300)
    
  };
  
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='sm'>
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              autoFocus
              name='email'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              autoFocus
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              onChange={handleChange}
            />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            <Button type='submit' fullWidth variant='contained' style={{ marginTop:30, padding:10, borderRadius:5}}>
              {loading ? <CircularProgress size={24} /> : 'Sign In'}
            </Button>
            <Grid container mt={2}>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/auth/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
