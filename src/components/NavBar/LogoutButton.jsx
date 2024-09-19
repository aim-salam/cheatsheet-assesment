import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <Button sx={{ marginLeft: "30px" }} onClick={handleLogout}>
      Log out
    </Button>
  );
}

export default LogoutButton;
