import React from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Link,
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword } from "../redux/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  console.log(email, password);

  const handleChangeEmail = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const handleChangePassword = (e) => {
    dispatch(changePassword(e.target.value));
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box component="form" sx={{ mt: 4 }}>
          <Avatar
            sx={{
              mx: "auto",
              backgroundColor: "primary.main",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Sign In
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Sign In
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Link>Forgot Password?</Link>
            <Link>Don't have an account? Sign Up</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;
