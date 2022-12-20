import React from "react";
import { Grid, Text, Box } from "atoms";
import Image from "next/image";

export const ChecklistArticle = ({ image, alt, title, description }) => {
  return (
    <>
      <Box>
        <Grid gridTemplateColumns="10rem auto">
          <Box height="10rem" width="10rem">
            <Image
              src={image ? image : "/images/article-cover.svg"}
              alt={alt ? alt : "cover"}
              height={88}
              width={88}
            />
          </Box>
          <Box ml="1rem">
            <Text
              fontSize={{ xs: "1.5rem", lg: "1.6rem" }}
              lineHeight={{ lg: "2rem" }}
              fontWeight="600"
              color="darkblue.500"
              style={{ wordBreak: "break-all" }}
            >
              {title?.slice(0, 80)}...
            </Text>
            <Text
              fontSize="1.2rem"
              lineHeight="1.5rem"
              fontWeight="300"
              color="darkblue.500"
              mt="0.4rem"
            >
              {description?.slice(0, 100)}...
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
