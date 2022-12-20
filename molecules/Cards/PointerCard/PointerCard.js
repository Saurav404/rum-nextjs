import React from "react";
import { Box, Text, Flex } from "atoms";

export const PointerCard = ({ color, title, subtitle }) => {
  return (
    <>
      <Box
        // height="24.8rem"
        py="1.6rem"
        bg={color}
        borderRadius="0rem 2.4rem 2.4rem 2.4rem"
        // overflowY="auto"
        // className="hide-scrollbar"
      >
        <Text fontsize="1.8rem" fontWeight="600" lineHeight="2.2rem" ml="3.2rem" pt="2.4rem">
          {title}
        </Text>
        {subtitle?.map((data) => {
          return (
            <Flex alignItems="center" my="1.6rem" key={data.id}>
              <Box width="10px" height="10px" borderRadius="50%" bg="darkblue.500" ml="3.2rem" />
              <Text
                ml="0.8rem"
                fontWeight="400"
                fontSize="1.5rem"
                maxWidth="30rem"
                lineHeight="2rem"
              >
                {data.pointer}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </>
  );
};
