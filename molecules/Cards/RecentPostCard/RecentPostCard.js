import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import Image from "next/image";
import { format } from "date-fns";
import nl from "date-fns/locale/nl";
import Link from "next/link";
import styled from "styled-components";

const BoxStyle = styled(Box)`
  &:hover {
    cursor: pointer;
    background: #403bcb;
    > div,
    h3 {
      color: #ffffff !important;
    }
  }
`;

export const RecentPostCard = ({ src, alt, title, body, tags, date, url }) => {
  return (
    <>
      <Box>
        <Grid gridTemplateColumns={{ xs: "1fr", lg: "17.6rem 1fr" }} gridColumnGap="3.2rem">
          <Link href={url} passHref>
            <a>
              <Box
                width={{ lg: "17.6rem" }}
                height={{ lg: "13.6rem" }}
                display={{ xs: "none", lg: "block" }}
                borderRadius="0.4rem"
                overflow="hidden"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src="/images/default-image.svg"
                    alt="default-image"
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </Box>
            </a>
          </Link>

          <Box>
            <Link href={url} passHref>
              <a>
                <Box>
                  <Text
                    as="h3"
                    my="0rem"
                    fontSize={{ xs: "1.6rem", lg: "2rem" }}
                    fontWeight="600"
                    color="darkblue.500"
                    lineHeight={{ xs: "1.8rem", lg: "2.3rem" }}
                  >
                    {title}
                  </Text>
                  <Text
                    as="p"
                    fontSize={{ xs: "1.4rem", lg: "1.4rem" }}
                    fontWeight="300"
                    color="gray.700"
                    mt="1.2rem"
                    lineHeight={{ xs: "2.3rem", lg: "2.3rem" }}
                  >
                    {body?.slice(0, 100)}...
                  </Text>
                </Box>
              </a>
            </Link>

            <Flex mt={{ xs: "1.2rem", lg: "2.6rem" }} alignItems="center">
              <Flex flexWrap="wrap">
                {tags &&
                  tags?.slice(0, 2)?.map((item) => {
                    return (
                      <Link key={item.id} href={`/${item?.slug}`} passHref>
                        <a>
                          <BoxStyle bg="blue.10" borderRadius="0.5rem" mr="0.8rem" cursor="pointer">
                            <Text
                              as="h3"
                              my="0rem"
                              fontWeight="500"
                              fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                              lineHeight="1.9rem"
                              color="darkblue.500"
                              mx="1.2rem"
                              py={{ xs: "0.3rem", lg: "0.25rem" }}
                            >
                              #{item?.name?.slice(0, 12)}
                            </Text>
                          </BoxStyle>
                        </a>
                      </Link>
                    );
                  })}
              </Flex>
              {/* <Box borderRadius="0.5rem" bg="blue.10">
                <Text
                  fontSize={{ xs: "1.6rem", lg: "1.6rem" }}
                  fontWeight="600"
                  color="darkblue.500"
                  lineHeight={{ xs: "1.9rem", lg: "1.9rem" }}
                  mx="1.2rem"
                  my={{ xs: "0.3rem", lg: "0.25rem" }}
                >
                  #uurtarief
                </Text>
              </Box> */}
              <Box ml="0.8rem" height="0.6rem" width="0.6rem" bg="gray.700" borderRadius="50%" />
              <Text
                ml="0.8rem"
                fontSize={{ xs: "1.2rem", lg: "1.2rem" }}
                fontWeight="400"
                color="gray.700"
                lineHeight={{ xs: "2.4rem", lg: "2.4rem" }}
              >
                {format(new Date(date), "eeee, dd MMMM yyyy", { locale: nl })}
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
