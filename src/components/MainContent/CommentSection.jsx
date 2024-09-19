import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      if (editingIndex !== null) {
        const updatedComments = [...comments];
        updatedComments[editingIndex] = comment;
        setComments(updatedComments);
        setEditingIndex(null);
      } else {
        setComments([...comments, comment]);
      }
      setComment("");
    }
  };

  const handleEditComment = (index) => {
    setComment(comments[index]);
    setEditingIndex(index);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <List sx={{ mt: 3 }}>
        {comments.map((c, index) => (
          <ListItem key={index}>
            <ListItemText primary={c} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEditComment(index)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteComment(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Comments</Typography>
      <TextField
        fullWidth
        label="Add a comment"
        variant="outlined"
        value={comment}
        onChange={handleCommentChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleCommentSubmit}>
        {editingIndex !== null ? "Update" : "Submit"}
      </Button>
    </Box>
  );
};

export default CommentSection;
