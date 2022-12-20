import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid, Text } from "atoms";
import styled from "styled-components";

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

export const ChecklistStartCard = ({ title, description, src, alt, url }) => {
  return (
    <>
      <Link href={url ? url : "/"} passHref>
        <a>
          <Box>
            <BoxStyle
              py={{ xs: "2.6rem", lg: "3.2rem" }}
              px="2.4rem"
              width="fit-content"
              borderRadius="0px 24px 24px 24px"
              border="1px solid transparent"
              bg="gray.500"
            >
              <Grid
                gridTemplateColumns="auto 1fr"
                gridGap={{ xs: "1.5rem", lg: "2rem" }}
                alignItems="center"
              >
                <Box
                  width={{ xs: "7.2rem", lg: "9.7rem" }}
                  height={{ xs: "7.2rem", lg: "9.7rem" }}
                  my="auto"
                >
                  <Image src={src} alt={alt} layout="fill" className="circular--square" />
                </Box>
                <Box>
                  <Text
                    fontWeight="700"
                    fontSize={{ xs: "1.2rem", lg: "1.8rem" }}
                    lineHeight={{ xs: "1.6rem", lg: "2rem" }}
                    color="darkblue.500"
                    as="h3"
                    my="0rem"
                  >
                    {title}
                  </Text>
                  <Text
                    mt="0.8rem"
                    fontWeight="400"
                    fontSize={{ xs: "1.2rem", lg: "1.4rem" }}
                    lineHeight={{ xs: "1.5rem", lg: "1.8rem" }}
                  >
                    {description}
                  </Text>
                </Box>
              </Grid>
            </BoxStyle>
          </Box>
        </a>
      </Link>
    </>
  );
};
