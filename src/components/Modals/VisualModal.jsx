import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 800,

  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  // p: 4,
};

export default function VisualModal({ visual, open, handleClose }) {
  console.log(visual);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CardMedia component="img" image={visual} alt="Visual image" />
      </Box>
    </Modal>
  );
}
