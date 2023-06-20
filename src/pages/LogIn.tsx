/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState, useEffect } from "react";
import type { Dispatch, ChangeEvent, FC } from 'react'
import { useNavigate } from "react-router-dom";
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { getDataFromSession } from "../utils/localstorage";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../redux/action/user";


const Login: FC = (): ReactElement => {
  const dispatch: Dispatch<any> = useDispatch();
  const data = useSelector((state: any) => state.User)

  const [formdata, setFormData] = useState({
    username: 'kminchelle',
    password: '0lelplR',
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    // 
  };

  useEffect(() => {
    dispatch(loginUser(formdata));
    const token = getDataFromSession("token");
    if (token) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FormValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formdata,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={FormValue}
            value={formdata.username}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={FormValue}
            value={formdata.password}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;