import React from "react";
import { Box, Text, Grid, Button, Flex } from "atoms";
import Image from "next/image";
import MemoArrowRight from "public/assets/icons/ArrowRight";
import { theme } from "styles";
import Link from "next/link";

export const RateCard = ({ src, alt, title, percent, button, url }) => {
  return (
    <>
      <Box bg="white" width="100%" borderRadius="0.4rem" p="2.4rem">
        <Grid gridTemplateColumns="1.5fr 1fr" alignItems="center" gridColumnGap="4rem">
          <Grid
            gridTemplateColumns={{ xs: "5rem auto auto", md: "1fr 1fr 1fr" }}
            gridColumnGap="1.2rem"
            alignItems="center"
          >
            <Box height={{ xs: "1.2rem", md: "2.4rem" }} width={{ xs: "4.7rem", md: "9.4rem" }}>
              {src && <Image src={src} alt={alt} height={24} width={94} objectFit="contain" />}
            </Box>
            <Text
              fontSize={{ xs: "1.3rem", lg: "2rem" }}
              color="darkblue.500"
              fontWeight="600"
              my="0rem"
              textAlign={{ md: "center" }}
              lineHeight={{ xs: "1.5rem", lg: "2.4rem" }}
            >
              {title}
            </Text>
            {percent && (
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="secondary.100"
                borderRadius="3.2rem"
                px="1.6rem"
                py="0.4rem"
              >
                <Text
                  fontSize={{ xs: "1.3rem", lg: "1.8rem" }}
                  color="darkblue.500"
                  fontWeight="600"
                  my="0rem"
                  lineHeight={{ xs: "1.5rem", lg: "2.1rem" }}
                >
                  {percent}
                </Text>
              </Flex>
            )}
          </Grid>
          <Box ml={{ md: "auto" }}>
            <a target="_blank" rel="noreferrer" href={url ? url : "/"}>
              <Flex justifyContent="center" alignItems="center" cursor="pointer">
                <Text
                  pr={{ xs: "0.5rem", md: "1rem" }}
                  fontSize={{ xs: "1.4rem", md: "1.6rem" }}
                  fontWeight="600"
                  color="blue.300"
                >
                  {button}
                </Text>
                <MemoArrowRight fill={theme.colors.blue[300]} height="1.6rem" width="1.8rem" />
              </Flex>
            </a>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
