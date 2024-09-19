import React from "react";
import { Stack, Avatar, Typography, AppBar } from "@mui/material";
import logo from "./../../assets/logo.jpg";
import ColorModeSwitch from "./../Switch/ColorModeSwitch";
import LogoutButton from "./LogoutButton";
import CountdownTimer from "./CountDownTimer";
import UserNameTypography from "./UserNameTypography";
function NavBar({ mode }) {
  return (
    <AppBar
      position="static"
      color="white"
      sx={{
        boxShadow: 0,
        borderBottom: 1,
        borderBottomColor: mode === "light" ? "#ddd" : "#272727",
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Avatar alt="Sigma School Logo" src={logo} sizes="60px" />

          <Typography fontSize={23} fontWeight={"600"} variant="h1">
            Cheatsheet
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <CountdownTimer></CountdownTimer>
          <ColorModeSwitch></ColorModeSwitch>
          <UserNameTypography></UserNameTypography>
          <LogoutButton></LogoutButton>
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default NavBar;
