import { useState, useEffect } from "react";

function useHomePage() {
  const [topic, setTopic] = useState({
    topic: "Callback",
    type: "grandchildren",
    imageLink: "https://images.cheatsheet.cam/images/image-1726661465665.webp",
    tables: [
      {
        table: "Introduction",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          // emoji: true
        },
      },
    ],
  });

  useEffect(() => {
    // Cleanup the event listener on component unmount
  }, []);

  return { topic, setTopic };
}

export default useHomePage;
