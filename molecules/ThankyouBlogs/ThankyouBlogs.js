import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import styled from "styled-components";
import Link from "next/link";
import MemoArrowRight from "public/assets/icons/ArrowRight";

const BoxStyle2 = styled(Box)`
  &:hover {
    cursor: pointer;
    background: #403bcb;
    > div {
      color: #ffffff !important;
    }
  }
`;

export const ThankyouBlogs = ({ data }) => {
  return (
    <>
      <Box
        bg="secondary.100"
        px={{ xs: "unset", lg: "11rem" }}
        pt={{ xs: "6rem", lg: "6rem" }}
        pb={{ xs: "3.2rem", lg: "6rem" }}
      >
        <Grid
          gridTemplateColumns={{ xs: "repeat(4,1fr)", lg: "1fr 1fr 1fr 0.7fr" }}
          gridColumnGap={{ xs: "2.5rem", lg: "2.5rem" }}
          alignItems="center"
          overflowX="auto"
          className="hide-scrollbar"
          pl={{ xs: "2rem", lg: "unset" }}
          pr={{ xs: "2rem", lg: "unset" }}
        >
          {data?.map((item) => {
            return (
              <Grid
                key={item.id}
                alignContent="space-between"
                p={{ xs: "2.4rem", lg: "3.2rem 2.4rem" }}
                bg="white"
                mt={{ xs: "1.9rem", lg: "3rem" }}
                width={{ xs: "24.6rem", lg: "unset" }}
                minHeight="38rem"
                borderRadius="0rem 2.4rem 2.4rem 2.4rem"
              >
                <Box>
                  {/* <Flex flexWrap="wrap">
                    <Link href="/" passHref>
                      <a>
                        <BoxStyle2
                          width="fit-content"
                          p="0.3rem 1.2rem"
                          mr="1rem"
                          fontWeight="600"
                          borderRadius="5px"
                          bg="blue.10"
                          mb="0.5rem"
                        >
                          <Text
                            fontWeight="600"
                            fontSize="1.6rem"
                            lineHeight="1.9rem"
                            color="darkblue.500"
                          >
                            #zzp
                          </Text>
                        </BoxStyle2>
                      </a>
                    </Link>
                  </Flex> */}

                  <Text
                    pt="2.4rem"
                    fontSize={{ xs: "1.6rem", lg: "2rem" }}
                    lineHeight={{ xs: "1.9rem", lg: "2.4rem" }}
                    fontWeight="bold"
                    height="12rem"
                  >
                    {item?.title.slice(0, 50)}...
                  </Text>
                  {item?.description && (
                    <Text
                      pt="1.6rem"
                      fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
                      lineHeight="2.7rem"
                      fontWeight="300"
                      maxWidth={{ xs: "21.6rem", lg: "unset" }}
                    >
                      {`${item?.description?.replace(/<[^>]+>/g, "").slice(0, 50)}...`}
                    </Text>
                  )}
                </Box>
                <Link href={`/${item.slug}`} passHref>
                  <a>
                    <Flex alignItems="center" cursor="pointer" width="fit-content">
                      <Text fontSize="1.6rem" fontWeight="700" color="primary.500" pr="1rem">
                        Lees Meer
                      </Text>
                      <MemoArrowRight fill="#204ECF" height="1.6rem" width="1.8rem" />
                    </Flex>
                  </a>
                </Link>
              </Grid>
            );
          })}
          <Box ml="1rem" width={{ xs: "24.6rem", lg: "unset" }}>
            <Link href="/blog" passHref>
              <a>
                <Flex alignItems="center" cursor="pointer" width="fit-content">
                  <Text fontSize="1.6rem" fontWeight="700" color="primary.500" pr="0.5rem">
                    Read More Articles
                  </Text>
                  <MemoArrowRight fill="#204ECF" height="1.6rem" width="1.8rem" />
                </Flex>
              </a>
            </Link>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
