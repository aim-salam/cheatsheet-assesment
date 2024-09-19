import React from "react";
import { useSelector } from "react-redux";
function UserNameTypography() {
  const username = useSelector((state) => state.username);
  return <div style={{ marginLeft: "20px" }}>{username}</div>;
}

export default UserNameTypography;
