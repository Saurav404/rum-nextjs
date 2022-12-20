import React from "react";
import Markdown from "markdown-to-jsx";

import { Text } from "atoms";

export const MarkdownText = ({ children, ...props }) => {
  return (
    <Markdown
      options={{
        overrides: {
          h3: {
            component: Text,
            props: {
              fontSize: "20px",
              color: "primary.1",
              fontWeight: 600,
            },
          },
          p: {
            component: Text,
            props,
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
};
