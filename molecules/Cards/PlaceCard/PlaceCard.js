import React from "react";
import Image from "next/image";

import { Box, Flex, Text } from "atoms";
import styled from "styled-components";

const BoxStyle = styled(Box)`
  .place-card:hover {
    background-color: #edf5fe;
    h3 {
      color: #204ecf !important;
    }
  }
`;

export const PlaceCard = ({ src, alt, place }) => {
  return (
    <BoxStyle>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderRadius="0rem 1.6rem 1.6rem 1.6rem"
        bg="gray.500"
        // height="16.8rem"
        pt="1rem"
        className="place-card"
        cursor="pointer"
      >
        <Box>
          <Box
            mx="auto"
            width={{ xs: "4.4rem", lg: "8rem" }}
            height={{ xs: "4.4rem", lg: "8rem" }}
            borderRadius="4rem "
            bg="white"
            ovelflow="hidden"
          >
            <Image src={src} alt={alt} width={80} height={80} />
          </Box>
          <Text
            as="h3"
            textAlign="center"
            color="darkblue.500"
            fontWeight="700"
            fontSize={{ xs: "1.2rem", lg: "1.8rem" }}
            my="2rem"
          >
            {place}
          </Text>
        </Box>
      </Flex>
    </BoxStyle>
  );
};
