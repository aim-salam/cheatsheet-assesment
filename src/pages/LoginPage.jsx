import React, { useRef } from "react";
import {
  Avatar,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/store";
function LoginPage() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (usernameRef.current && passwordRef.current) {
      login(usernameRef.current, passwordRef.current);
    } else {
      alert(`Please enter a username and password`);
    }
  };

  function login(username, password) {
    if (username === "aimsalam@hotmail.com" && password === "123") {
      navigate("/");
      dispatch(setUsername(usernameRef.current));
      // alert("Succesful login!");
    } else {
      alert("User not found. Please sign in again");
    }
  }

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
          }}
        >
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component={"h1"} variant="h5" sx={{ textAlign: "center" }}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter username"
            fullWidth
            required
            autoFocus
            type="email"
            sx={{ mb: 2 }}
            onChange={(e) => {
              usernameRef.current = e.target.value;
            }}
          ></TextField>
          <TextField
            placeholder="Enter password"
            fullWidth
            required
            autoFocus
            type="password"
            sx={{ mb: 2 }}
            onChange={(e) => {
              passwordRef.current = e.target.value;
            }}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </Box>
      </Paper>
      <Typography color="#B4B4B8">hint : aimsalam@hotmail.com, 123</Typography>
    </Container>
  );
}

export default LoginPage;
