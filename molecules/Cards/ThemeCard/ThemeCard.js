import React from "react";
import { Box, Text, Flex } from "atoms";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const BoxStyle = styled(Box)`
  &:hover {
    border: 1px solid #050e29;
    h3 {
      color: #403bcb;
      text-decoration: underline;
      text-underline-offset: 0.3rem;
      text-decoration-thickness: 1px;
    }
  }
`;
export const ThemeCard = ({ heading, description, image, url, alt }) => {
  return (
    <>
      <Link href={url ? url : "/"} passHref>
        <a>
          <BoxStyle
            borderRadius="0px 16px 16px 16px"
            border="1px solid transparent"
            bg="background.100"
            p={{ xs: "1.6rem", lg: "2.4rem" }}
          >
            <Flex>
              <Box>
                <Text
                  as="h3"
                  my="0rem"
                  fontSize="2rem"
                  color="darkblue.500"
                  fontWeight={{ xs: "700", lg: "600" }}
                >
                  {heading}
                </Text>
                <Text
                  mt="0.8rem"
                  fontSize="1.4rem"
                  color="darkblue.500"
                  fontWeight={{ xs: "400", lg: "300" }}
                >
                  {description}
                </Text>
              </Box>
              <Box height="3.2rem" width="3.2rem">
                <Image
                  src={image ? image : "/images/dollar-bag.svg"}
                  alt={alt ? alt : "dollar-bag"}
                  layout="fill"
                />
              </Box>
            </Flex>
          </BoxStyle>
        </a>
      </Link>
    </>
  );
};
