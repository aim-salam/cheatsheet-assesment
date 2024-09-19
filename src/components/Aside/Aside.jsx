import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Stack,
  Typography,
  Grid2,
  Button,
} from "@mui/material";
import { topics } from "../../db/topics";
import logo from "./../../assets/logo.jpg";
import AddTopicButton from "./AddTopicButton";
import TopicModal from "../Modals/TopicModal";
const parentStyle = {
  marginTop: "40px",
  marginBottom: "10px",
  fontSize: "25px",
  avatarSize: "30px",
};

const childStyle = {
  fontSize: "17px",
  avatarSize: "25px",
};

const getStyle = (type) => (type === "parent" ? parentStyle : childStyle);

function TopicList({ setTopic }) {
  const [topicss, setTopicss] = useState(topics);

  const handleAddTopic = (topic) => {
    setTopicss([...topicss, topic]);
  };

  return (
    <Grid2
      item
      xs={12}
      sm={3}
      md={2}
      sx={{
        display: { xs: "none", sm: "block" },
        width: "250px",
      }}
    >
      <List>
        {topicss.map((topic) => {
          const { topic: topicName, type, imageLink } = topic;
          const { marginTop, marginBottom, fontSize, avatarSize } =
            getStyle(type);

          return (
            <Stack
              key={topicName}
              marginTop={marginTop}
              marginBottom={marginBottom}
              height={"40px"}
            >
              <ListItemButton
                sx={{
                  paddingLeft: "40px",
                  paddingRight: "30px",
                  paddingTop: "1px",
                  paddingBottom: "1px",
                }}
                onClick={() => {
                  setTopic(topic);
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{ width: avatarSize, height: avatarSize }}
                    alt={topicName}
                    src={imageLink || logo}
                    variant="rounded"
                  />
                </ListItemAvatar>

                <Typography
                  fontWeight={type !== "grandchildren" ? "bold" : "normal"}
                  fontSize={fontSize}
                >
                  {topic.topic}
                </Typography>
              </ListItemButton>
            </Stack>
          );
        })}
      </List>
      {/* <AddTopicButton handleAddTopic={handleAddTopic}></AddTopicButton> */}
    </Grid2>
  );
}

export default TopicList;
