import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import { ReviewCard } from "molecules/Cards";

export const HomeReview = ({ apiData }) => {
  return (
    <>
      <Box py={{ xs: "6rem", lg: "8rem" }} px={{ xs: "2.4rem", lg: "10rem" }}>
        <Grid gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr" }}>
          <Box>
            <Box
              height={{ xs: "6.4rem", lg: "7rem" }}
              width={{ xs: "6.4rem", lg: "7rem" }}
              borderRadius="50%"
              bg="secondary.500"
              top={{ xs: "-3rem", lg: "-2rem" }}
              left={{ xs: "50%", lg: "78%" }}
              position="absolute"
              zIndex={1}
            />
            <Text
              fontSize={{ xs: "1.6rem", lg: "4rem" }}
              color="darkblue.500"
              as="h2"
              fontWeight="600"
              mt="0rem"
              maxWidth={{ xs: "25.7rem", lg: "57rem" }}
              lineHeight={{ xs: "1.9rem", lg: "4.8rem" }}
              zIndex={3}
            >
              {apiData?.title?.replace(/<[^>]+>|&nbsp;/g, "")}
            </Text>
            <Box mt="4.6rem" pl="2rem">
              {apiData?.pointers?.map((items) => {
                return (
                  <Flex alignItems="center" mb={{ xs: "2.6rem", lg: "5.9rem" }} key={items.id}>
                    <Box
                      height={{ xs: "1.8rem", lg: "2.4rem" }}
                      width={{ xs: "1.8rem", lg: "2.4rem" }}
                      borderRadius="50%"
                      _hover={{ backgroundColor: "#403BCB" }}
                      cursor="pointer"
                      border="1px solid #204ECF"
                    />

                    <Box ml="2rem">
                      <Text
                        fontWeight="600"
                        fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
                        lineHeight={{ xs: "1.9rem", lg: "2.1rem" }}
                        maxWidth={{ xs: "26.3rem", lg: "unset" }}
                        color="darkblue.500"
                      >
                        {items.title}
                      </Text>
                      <Text
                        fontWeight="300"
                        fontSize="1.6rem"
                        color="darkblue.500"
                        maxWidth={{ xs: "26.3rem", lg: "44rem" }}
                        lineHeight={{ xs: "2.4rem", lg: "1.9rem" }}
                        mt="0.8rem"
                      >
                        {items.description}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
          </Box>
          <Box ml={{ xs: "1rem", lg: "unset" }} mt={{ xs: "4.1rem", lg: "15rem" }}>
            <Box transform="rotate(6deg)" zIndex={2}>
              <ReviewCard
                src={apiData?.cards[0]?.image?.url}
                alt="robert"
                name={apiData?.cards[0]?.name}
                post={apiData?.cards[0]?.designation}
                body={apiData?.cards[0]?.description}
              />
            </Box>
            <Box
              mt={{ xs: "3rem", lg: "6rem" }}
              ml={{ xs: "8rem", lg: "10rem" }}
              transform="rotate(-8deg)"
              zIndex={2}
            >
              <ReviewCard
                src={apiData?.cards?.[1]?.image?.url}
                alt="teresa"
                name={apiData?.cards?.[1]?.name}
                post={apiData?.cards?.[1]?.designation}
                body={apiData?.cards?.[1]?.description}
              />
            </Box>
            <Box
              position="absolute"
              top={{ xs: "11rem", lg: "20rem" }}
              left={{ xs: "12%", lg: "2rem" }}
              height={{ xs: "7.7rem", lg: "15rem" }}
              width={{ xs: "7.7rem", lg: "15rem" }}
              bg="secondary.500"
              borderRadius="50%"
              zIndex={1}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};
