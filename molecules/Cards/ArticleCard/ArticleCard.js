import React from "react";
import { Box, Text, Flex } from "atoms";
import Image from "next/image";
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

export const ArticleCard = ({ src, alt, title, tag1, tag2, body, tags, url }) => {
  return (
    <>
      <Box>
        <Link href={url} passHref>
          <a>
            <Box height="20.8rem" width="100%">
              {src ? (
                <Image src={src} alt={alt} layout="fill" />
              ) : (
                <Image src="/images/default-image.svg" alt="default-image" layout="fill" />
              )}
            </Box>
          </a>
        </Link>

        <Box
          bg="white"
          px={{ xs: "1.6rem", lg: "2.4rem" }}
          mt={{ xs: "-1rem", lg: "-2rem" }}
          py="3.5rem"
          borderBottomLeftRadius="2.4rem"
          borderBottomRightRadius="2.4rem"
        >
          <Flex mt={{ xs: "-1.5rem", lg: "unset" }} flexWrap="wrap">
            {tags &&
              tags?.slice(0, 2)?.map((item) => {
                return (
                  <Link key={item.id} href={`/${item?.slug}`} passHref>
                    <a>
                      <BoxStyle
                        bg="secondary.100"
                        px="1.2rem"
                        py="0.5rem"
                        cursor="pointer"
                        borderRadius="0.5rem"
                        mr="0.8rem"
                        mb="0.8rem"
                      >
                        <Text
                          as="h3"
                          my="0rem"
                          fontWeight="500"
                          fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                          lineHeight="1.9rem"
                          color="darkblue.500"
                        >
                          #{item?.name.slice(0, 12)}
                        </Text>
                      </BoxStyle>
                    </a>
                  </Link>
                );
              })}
            {tag1 && (
              <Box bg="secondary.100" px="1.2rem" py="0.5rem" borderRadius="0.5rem">
                <Text
                  fontWeight="500"
                  fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                  lineHeight="1.9rem"
                  color="darkblue.500"
                >
                  {tag1}
                </Text>
              </Box>
            )}
            {tag2 && (
              <Box ml="0.8rem" bg="secondary.100" px="1.2rem" py="0.5rem" borderRadius="0.5rem">
                <Text
                  fontWeight="500"
                  fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                  lineHeight="1.9rem"
                  color="darkblue.500"
                >
                  {tag2}
                </Text>
              </Box>
            )}
          </Flex>

          <Text
            as="h3"
            fontWeight="600"
            fontSize={{ xs: "1.6rem", lg: "2rem" }}
            color="darkblue.500"
            mt={{ xs: "1.7rem", lg: "2.5rem" }}
            lineHeight={{ xs: "1.9rem", lg: "2.4rem" }}
            height="8rem"
            style={{ wordBreak: "break-all" }}
          >
            {title?.slice(0, 50)}
          </Text>

          {body && (
            <Text
              as="p"
              fontWeight="300"
              fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
              color="darkblue.500"
              mt="1.6rem"
              lineHeight={{ xs: "2rem", lg: "2.7rem" }}
            >
              {body?.slice(0, 100)}...
            </Text>
          )}
          <Link href={url} passHref>
            <a>
              <Flex mt="4.2rem" alignItems="center" cursor="pointer">
                <Text
                  fontWeight="600"
                  fontSize="1.6rem"
                  color="primary.500"
                  mt="1.6rem"
                  lineHeight="1.9rem"
                >
                  Lees verder
                </Text>
                <Box ml="1rem" mt="1.5rem" width="1.8rem" height="1.2rem">
                  <Image src="/images/learn-more.svg" alt="learn-more" layout="fill" />
                </Box>
              </Flex>
            </a>
          </Link>
        </Box>
      </Box>
    </>
  );
};
