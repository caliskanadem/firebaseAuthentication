import React from "react";
import {
  TextField,
  CssBaseline,
  Button,
  Box,
  Container,
  Link,
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignUp = () => {
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
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
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
