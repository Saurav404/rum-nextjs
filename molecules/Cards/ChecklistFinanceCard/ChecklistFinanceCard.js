import React from "react";
import Image from "next/image";
import { Box, Text, Grid } from "atoms";

export const ChecklistFinanceCard = ({ src, alt, title, name, designation }) => {
  return (
    <>
      <Box
        width="fit-content"
        bg="white"
        p={{ xs: "1.6rem", lg: "2.4rem" }}
        borderRadius="0px 16px 16px 16px"
      >
        <Text
          maxWidth={{ lg: "32.8rem" }}
          fontWeight="400"
          fontSize={{ xs: "1.5rem", lg: "1.4rem" }}
          lineHeight={{ xs: "1.8rem", lg: "2rem" }}
          height={{ md: "8rem" }}
        >
          {title}
        </Text>
        <Grid
          mt={{ xs: "1.6rem", lg: "3.8rem" }}
          gridTemplateColumns="auto 1fr"
          gridGap="1.6rem"
          alignItems="center"
        >
          <Box
            width={{ xs: "4.8rem", lg: "6.4rem" }}
            height={{ xs: "4.8rem", lg: "6.4rem" }}
            my="auto"
          >
            <Image src={src} alt={alt} layout="fill" className="circular--square" />
          </Box>
          <Box>
            <Text
              maxWidth={{ lg: "24.8rem" }}
              fontWeight="700"
              fontSize="1.6rem"
              lineHeight="1.9rem"
            >
              {name}
            </Text>
            <Text
              mt="0.8rem"
              maxWidth="24.8rem"
              fontWeight="400"
              fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
              lineHeight={{ xs: "1.4rem", lg: "1.9rem" }}
            >
              {designation}
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
