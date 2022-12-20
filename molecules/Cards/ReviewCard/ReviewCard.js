import React from "react";
import { Box, Text, Flex } from "atoms";
import Image from "next/image";

export const ReviewCard = ({ src, alt, name, post, body }) => {
  return (
    <>
      <Box
        height={{ xs: "9.5rem", lg: "18.4rem" }}
        width={{ xs: "24.5rem", lg: "47.2rem" }}
        bg="white"
        borderRadius="1.6rem"
        boxShadow="0px 4px 36px rgba(142, 142, 142, 0.1)"
        px={{ xs: "1.6rem", lg: "3.4rem" }}
        py={{ xs: "1.2rem", lg: "2.7rem" }}
      >
        <Flex alignItems="center">
          <Box>
            {src && (
              <Box height={{ xs: "3.2rem", lg: "6.4rem" }} width={{ xs: "3.2rem", lg: "6.4rem" }}>
                <Image src={src} alt={alt} height={100} width={100} className="circular--square" />
              </Box>
            )}
          </Box>
          <Box ml={{ xs: "0.6rem", lg: "1.6rem" }}>
            <Text
              fontWeight="600"
              fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
              color="darkblue.500"
              lineHeight={{ xs: "1.4rem", lg: "1.9rem" }}
            >
              {name}
            </Text>
            <Text
              fontWeight="300"
              fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
              color="darkblue.500"
              lineHeight="1.9rem"
            >
              {post}
            </Text>
          </Box>
        </Flex>
        <Text
          mt="1rem"
          fontWeight="300"
          fontSize={{ xs: "0.9rem", lg: "1.8rem" }}
          color="darkblue.500"
          lineHeight={{ xs: "1.1rem", lg: "2.1rem" }}
        >
          {body}
        </Text>
      </Box>
    </>
  );
};
