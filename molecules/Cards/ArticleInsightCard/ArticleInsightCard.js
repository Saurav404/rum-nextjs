import React from "react";
import { Box, Text, Flex } from "atoms";
import CarretIcon from "public/assets/icons/CarretIcon";

export const ArticleInsightCard = ({ apidata, handleScroll }) => {
  return (
    <>
      <Box
        bg="gray.500"
        pt={{ xs: "2.4rem", lg: "3.2rem" }}
        pb={{ xs: "3.7rem", lg: "4rem" }}
        px={{ xs: "1.6rem", lg: "4rem" }}
        borderRadius="0px 24px 24px 24px"
        // height="32rem"
        // overflowY="auto"
        // className="hide-scrollbar"
      >
        <Text
          color="darkblue.500"
          fontSize={{ xs: "2rem", lg: "1.8rem" }}
          fontWeight="600"
          lineHeight={{ xs: "2.4rem", lg: "2.1rem" }}
        >
          {apidata?.title}
        </Text>
        {apidata?.pointers?.map((item) => {
          return (
            <Flex
              key={item.id}
              mt={{ xs: "1.6rem", lg: "2.4rem" }}
              alignItems="center"
              cursor="pointer"
              onClick={() => handleScroll(item.link)}
            >
              <CarretIcon fill="#050E29" />
              <Text
                ml="1.1rem"
                fontWeight="300"
                fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
                color="darkblue.500"
                lineHeight="2.4rem"
                textDecoration="underline"
                textUnderlineOffset="0.3rem"
                maxWidth={{ xs: "27.2rem", lg: "unset" }}
              >
                {item?.title}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </>
  );
};
