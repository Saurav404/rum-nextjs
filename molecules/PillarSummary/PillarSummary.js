import React from "react";
import { Box, Text, Flex, Grid } from "atoms";

export const PillarSummary = ({ apiData, handleScroll }) => {
  return (
    <>
      <Box pt={{ lg: "6.6rem" }} pb={{ lg: "4rem" }} px={{ xs: "2.4rem", lg: "21rem" }}>
        <Grid gridTemplateColumns={{ xs: "1fr", lg: "1.4fr 1fr" }} gridColumnGap={{ lg: "9.2rem" }}>
          <Box
            bg="gray.500"
            py="3rem"
            px="4rem"
            borderRadius="0px 24px 24px 24px"
            // height="32rem"
            // overflowY="auto"
            // className="hide-scrollbar"
          >
            <Text
              color="darkblue.500"
              fontSize={{ lg: "2rem" }}
              fontWeight="600"
              lineHeight="2.4rem"
            >
              {apiData?.title}
            </Text>
            {apiData?.pointers?.map((item, index) => {
              return (
                <Flex mt="2rem" key={item.id} onClick={() => handleScroll(item.link)}>
                  <Text fontWeight="300" fontSize="1.8rem" color="darkblue.500" lineHeight="2.4rem">
                    {index + 1}.
                  </Text>
                  <Text
                    ml="0.4rem"
                    fontWeight="300"
                    fontSize="1.8rem"
                    color="darkblue.500"
                    lineHeight="2.4rem"
                    textDecoration="underline"
                    textUnderlineOffset="0.3rem"
                    cursor="pointer"
                  >
                    {item.title}
                  </Text>
                </Flex>
              );
            })}
          </Box>
          {/* <Box display={{ xs: "none", lg: "block" }} mt="2rem">
            <Image
              src="/images/pillar-illustration.svg"
              alt="img"
              height="33.6rem"
              width="32.2rem"
            />
          </Box> */}
        </Grid>
      </Box>
      <Box px={{ lg: "10rem" }}>
        <Box width="100%" bg="darkblue.500" height="1px" opacity="10%" />
      </Box>
    </>
  );
};
