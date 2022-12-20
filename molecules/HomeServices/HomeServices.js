import React from "react";
import { Box, Text, Image, Grid, Flex } from "atoms";
import { TestimonialCard } from "molecules/Cards";
import Link from "next/link";

export const HomeServices = ({ apiData, apiData2 }) => {
  return (
    <>
      <Box py={{ xs: "10rem", lg: "10rem" }} overflow="hidden">
        {/* rectangle design */}
        <Box position="absolute" left={{ xs: "-2rem", lg: "14%" }} top={{ xs: "4rem", lg: "6rem" }}>
          <Image
            src={apiData.bg_image_left_top.url}
            alt="blue"
            height={{ xs: "13rem", lg: "21rem" }}
            width={{ xs: "9rem", lg: "10rem" }}
          />
        </Box>
        <Box
          position="absolute"
          left={{ lg: "87%" }}
          right={{ xs: "-3rem", lg: "unset" }}
          top={{ xs: "21rem", lg: "22rem" }}
        >
          <Image
            src={apiData.bg_image_right_top.url}
            alt="green"
            height={{ xs: "13rem", lg: "21rem" }}
            width={{ xs: "9rem", lg: "10rem" }}
          />
        </Box>
        <Box position="absolute" left="0rem" top={{ xs: "128rem", lg: "67rem" }} zIndex={3}>
          <Image
            src={apiData.bg_image_left_bottom.url}
            alt="green"
            height={{ xs: "14.1rem", lg: "21rem" }}
            width={{ xs: "8rem", lg: "10rem" }}
          />
        </Box>
        <Box
          position="absolute"
          right={{ xs: "-0.5rem", lg: "5.4rem" }}
          top={{ xs: "75rem", lg: "59rem" }}
        >
          <Image
            src={apiData.bg_image_right_bottom.url}
            alt="green"
            height={{ xs: "9rem", lg: "12rem" }}
            width={{ xs: "6rem", lg: "7rem" }}
          />
        </Box>
        {/* main section */}
        <Flex alignItems="center" flexDirection="column">
          <Text
            fontSize={{ xs: "2rem", lg: "3.6rem" }}
            color="darkblue.500"
            fontWeight="600"
            as="h2"
            mt="1rem"
            maxWidth={{ xs: "32.7rem", lg: "57rem" }}
            textAlign="center"
            lineHeight={{ xs: "2.4rem", lg: "4.3rem" }}
          >
            {apiData?.title?.replace(/<[^>]+>|&nbsp;/g, "")}
          </Text>
        </Flex>
        <Box display={{ xs: "none", lg: "block" }}>
          <Grid
            gridTemplateColumns="1fr"
            px={{ xs: "1.6rem", lg: "14.5rem" }}
            gridRowGap="3rem"
            justifyItems={{ xs: "center", lg: "unset" }}
            mt="8rem"
            mb="18rem"
          >
            {apiData?.sections?.map((items) => {
              return (
                <Box key={items.id}>
                  <Box height={1} width="100%" bg="secondary.100" opacity="50%" />
                  <Box mt={{ xs: "2.4rem", lg: "4rem" }} px={{ lg: "12rem" }}>
                    <Text fontSize="2rem" color="darkblue.500" fontWeight="600" lineHeight="2.4rem">
                      {items.title}
                    </Text>
                    <Grid
                      gridTemplateColumns={{ xs: "1fr", lg: "repeat(3,1fr)" }}
                      gridColumnGap="12rem"
                      gridRowGap="1.8rem"
                      mt="2.4rem"
                    >
                      {items?.links?.map((value) => {
                        return (
                          <Link href={value.url === null ? "/" : value.url} passHref key={value.id}>
                            <a>
                              <Text
                                fontSize="1.8rem"
                                color="primary.500"
                                fontWeight="300"
                                lineHeight="2.7rem"
                                key={value.id}
                                cursor="pointer"
                              >
                                {value.name}
                              </Text>
                            </a>
                          </Link>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
        <Box display={{ xs: "block", lg: "none" }} mt="1.8rem">
          <Box px="1.6rem">
            <Grid gridTemplateColumns="1fr" gridRowGap="2.4rem">
              {apiData?.sections?.map((items) => {
                return (
                  <Box key={items.id}>
                    <Box height={1} width="100%" bg="secondary.100" opacity="50%" />
                    <Text
                      fontSize="1.6rem"
                      color="darkblue.500"
                      textAlign="center"
                      fontWeight="600"
                      lineHeight="1.9rem"
                      py={{ xs: "2rem", lg: "unset" }}
                    >
                      {items?.title}
                    </Text>
                    <Grid
                      gridTemplateColumns="1fr"
                      justifyItems="center"
                      gridRowGap="6.4rem"
                      mb="4rem"
                    >
                      {items?.links?.map((value, ind) => {
                        return (
                          <Box key={value.id}>
                            <Link
                              href={value.url === null ? "/" : value.url}
                              passHref
                              key={value.id}
                            >
                              <a>
                                <Text
                                  fontSize="1.6rem"
                                  textAlign="center"
                                  color="primary.500"
                                  fontWeight="300"
                                  lineHeight="1.9rem"
                                  mt={
                                    ind === 1 || ind === 4 || ind === 7
                                      ? "-4rem"
                                      : ind === 2 || ind === 5 || ind === 8
                                      ? "-6rem"
                                      : ind === 3 || ind === 6
                                      ? "-2.4rem"
                                      : "0rem"
                                  }
                                >
                                  {value.name}
                                </Text>
                              </a>
                            </Link>
                          </Box>
                        );
                      })}
                    </Grid>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        </Box>

        <Box px={{ xs: "2.4rem", lg: "10rem" }} pt={{ xs: "5rem", lg: "unset" }}>
          <TestimonialCard apiData2={apiData2} />
        </Box>
      </Box>
    </>
  );
};
