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
import { changeName, changeEmail, changePassword } from "../redux/authSlice";

const SignUp = () => {
  const { name, email, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
    // changeName(e);
  };
  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
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
            Sign Up
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            required
            autoComplete="name"
            autoFocus
            onChange={handleNameChange}
            value={name}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
            Sign In
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Link>Already have an Account? Sign In</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
