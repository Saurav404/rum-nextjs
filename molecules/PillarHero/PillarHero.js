import React from "react";
import { Box, Text, Flex, Image, Button } from "atoms";
import MemoArrowRight from "public/assets/icons/ArrowRight";
import Link from "next/link";
import { format } from "date-fns";
import nl from "date-fns/locale/nl";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

export const PillarHero = ({ apiData, title, data }) => {
  const BoxStyle = styled(Box)`
    td {
      font-size: 18px;
      padding-top: 9px;
      padding-bottom: 9px;
    }
    table {
      border-collapse: collapse;
      margin-left: -4rem;
    }

    tr:first-of-type {
      border-bottom: 2px solid #403bcb;
    }
    th:last-child,
    td:last-child,
    th:nth-last-child(1),
    td:nth-last-child(1) {
      text-align: right;
    }
    th:first-child,
    td:first-child {
      text-align: left !important;
    }

    @media only screen and (max-width: 600px) {
      td {
        font-size: 12px;
        padding-top: 9px;
        padding-bottom: 9px;
      }
      table {
        border-collapse: collapse;
        // margin-left: -3rem;
        // max-width: 100vw;
      }

      tr:first-of-type {
        border-bottom: 2px solid #403bcb;
      }

      th:last-child,
      td:last-child,
      th:nth-last-child(1),
      td:nth-last-child(1) {
        text-align: right;
      }
      th:first-child,
      td:first-child {
        text-align: left !important;
      }
    }
  `;
  const BoxStyle2 = styled(Box)`
    table,
    td,
    th {
      border: 1px solid #d3d3d3;
      text-align: center !important;
      font-weight: 500;
      font-size: 1.8rem;
      margin-left: -3.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    a {
      font-weight: 300;
      font-size: 1.8rem;
      color: blue;
    }
    li {
      font-weight: 300;
      font-size: 1.8rem;
    }
    @media only screen and (max-width: 600px) {
      //padding-right: 4rem;
      a {
        font-weight: 300;
        font-size: 1.5rem;
        color: blue;
      }
      li {
        font-weight: 300;
        font-size: 1.5rem;
      }
      table,
      td,
      th {
        border: 1px solid #d3d3d3;
        text-align: center !important;
        font-weight: 500;
        font-size: 1.5rem;
        margin-left: -3.5rem;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
    }
  `;
  return (
    <>
      <Box mb={{ lg: "-7rem" }}>
        <Box
          pt={{ lg: "1rem" }}
          pb={{ xs: "2.4rem", lg: "6.4rem" }}
          bg="background.100"
          backgroundImage={{
            xs: `url(${apiData?.banner_img_mobile?.url})`,
            lg: `url(${apiData?.banner_img_desktop?.url})`,
          }}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Box display={{ xs: "none", lg: "block" }}>
            <Flex alignItems="center" width="fit-content" pb="1.8rem" px={{ lg: "11rem" }}>
              <Link href="/blog" passHref>
                <Text
                  fontWeight="600"
                  color="darkblue.500"
                  fontSize={{ xs: "1.2rem", lg: "1.4rem" }}
                  lineHeight="1.6rem"
                  pr="1rem"
                  textDecoration="underline"
                  textUnderlineOffset="0.1rem"
                  cursor="pointer"
                >
                  Home
                </Text>
              </Link>
              <MemoArrowRight fill="#050E29" height="0.8rem" width="1.2rem" />
              <Text
                lineHeight="1.6rem"
                color="darkblue.500"
                fontWeight="300"
                fontSize={{ xs: "1.2rem", lg: "1.4rem" }}
                ml="1rem"
              >
                {title}
              </Text>
            </Flex>
          </Box>
          <Box display={{ xs: "none", lg: "block" }} px={{ xs: "2.4rem", lg: "11rem" }}>
            <Flex
              justifyContent="space-between"
              // mx="3rem"
              my="3rem"
              alignItems="center"
            >
              <Box>
                <Text
                  fontSize={{ xs: "2.6rem", lg: "4rem" }}
                  color="darkblue.500"
                  fontWeight="600"
                  as="h1"
                  my="0rem"
                  pt="0rem"
                  lineHeight={{ xs: "3.1rem", lg: "4.8rem" }}
                  textAlign={{ xs: "center", lg: "unset" }}
                  zIndex={2}
                >
                  {apiData?.title?.replace(/<[^>]+>|&nbsp;/g, "")}
                </Text>

                <Box mt="2.9rem">
                  <Flex alignItems="center">
                    <Flex alignItems="center">
                      {data?.author?.name && (
                        <Text
                          ml="1rem"
                          textDecoration="underline"
                          textUnderlineOffset="0.1rem"
                          fontWeight="400"
                          fontSize="1.5rem"
                          color="darkblue.500"
                          textTransform="uppercase"
                        >
                          by {data?.author?.name}
                        </Text>
                      )}
                    </Flex>
                    {data?.author?.name && (
                      <Flex
                        ml="1rem"
                        bg="primary.500"
                        borderRadius="50%"
                        height="0.4rem"
                        width="0.4rem"
                      />
                    )}
                    <Text ml="1rem" fontWeight="300" fontSize="1.5rem" color="darkblue.500">
                      Gewijzigd,{" "}
                      {format(new Date(data?.published_at), " dd MMMM yyyy", { locale: nl })}
                    </Text>
                  </Flex>
                </Box>
                {apiData?.isDescriptionVisible !== true ? (
                  <Box>
                    {apiData?.description && (
                      <Text
                        fontSize={{ xs: "1.5rem", lg: "2rem" }}
                        color="darkblue.500"
                        as="h3"
                        my="0rem"
                        fontWeight="300"
                        lineHeight="2.4rem"
                        textAlign={{ xs: "center", lg: "unset" }}
                        mt="1.7rem"
                        maxWidth={{ xs: "32.7rem", lg: "69.6rem" }}
                        mx={{ xs: "auto", lg: "unset" }}
                      >
                        {apiData?.description}
                      </Text>
                    )}
                  </Box>
                ) : (
                  <Box mt="2rem" maxWidth={{ xs: "32.7rem", lg: "69.6rem" }}>
                    {apiData?.description2 && (
                      <BoxStyle2>
                        <Markdown
                          options={{
                            overrides: {
                              h1: {
                                component: Text,
                                props: {
                                  fontWeight: 800,
                                  as: "h1",
                                  my: "0rem",
                                  fontSize: { xs: "2.8rem", lg: "4.8rem" },
                                  color: "darkblue.500",
                                  lineHeight: { xs: "3.2rem", lg: "5.8rem" },
                                  mt: { xs: "1.6rem", lg: "4rem" },
                                },
                              },
                              h2: {
                                component: Text,
                                props: {
                                  fontWeight: 600,
                                  as: "h2",
                                  my: "0rem",
                                  fontSize: { xs: "2rem", lg: "2.8rem" },
                                  color: "darkblue.500",
                                  lineHeight: { xs: "2.4rem", lg: "3.3rem" },
                                  mt: { xs: "1.6rem", lg: "4rem" },
                                },
                              },
                              h3: {
                                component: Text,
                                props: {
                                  fontWeight: 600,
                                  as: "h3",
                                  my: "0rem",
                                  fontSize: { xs: "2rem", lg: "2.8rem" },
                                  color: "darkblue.500",
                                  lineHeight: { xs: "2.4rem", lg: "3.3rem" },
                                  mt: { xs: "1.6rem", lg: "4rem" },
                                },
                              },
                              h4: {
                                component: Text,
                                props: {
                                  fontWeight: 400,
                                  as: "h4",
                                  my: "0rem",
                                  fontSize: { xs: "1.6rem", lg: "1.8rem" },
                                  color: "darkblue.500",
                                  lineHeight: { xs: "2.4rem", lg: "3.3rem" },
                                },
                              },
                              p: {
                                component: Text,
                                props: {
                                  fontWeight: 300,
                                  as: "p",
                                  my: "0rem",
                                  fontSize: { xs: "1.5rem", lg: "1.9rem" },
                                  color: "darkblue.500",
                                  lineHeight: { xs: "2.4rem", lg: "2.3rem" },
                                  mt: { xs: "1.6rem", lg: "1.7rem" },
                                  mb: { xs: "1.6rem", lg: "2.7rem" },
                                },
                              },
                            },
                          }}
                        >
                          {apiData?.description2}
                        </Markdown>
                      </BoxStyle2>
                    )}
                  </Box>
                )}
              </Box>
              <Image src={apiData?.bg_image_center.url} alt="bg-image" height={190} width={190} />
            </Flex>
          </Box>
          <Box display={{ xs: "block", lg: "none" }} px={{ xs: "2.4rem", lg: "21rem" }}>
            <Box display={{ xs: "block", lg: "none" }}>
              <Flex
                alignItems="center"
                width="fit-content"
                py="1rem"
                px={{ xs: "unset", lg: "11rem" }}
              >
                <Link href="/blog" passHref>
                  <Text
                    fontWeight="600"
                    color="darkblue.500"
                    fontSize={{ xs: "1.2rem", lg: "1.4rem" }}
                    lineHeight="1.6rem"
                    pr="1rem"
                    textDecoration="underline"
                    textUnderlineOffset="0.1rem"
                    cursor="pointer"
                  >
                    Home
                  </Text>
                </Link>

                <MemoArrowRight fill="#050E29" height="0.8rem" width="1.2rem" />
                <Text
                  lineHeight="1.6rem"
                  color="darkblue.500"
                  fontWeight="300"
                  fontSize={{ xs: "1.2rem", lg: "1.4rem" }}
                  ml="1rem"
                >
                  {title}
                </Text>
              </Flex>
            </Box>
            <Flex
              flexDirection="column"
              // alignItems="center"
            >
              {/* <Box>
                <Image
                  src={apiData?.bg_image_center.url}
                  alt="bg-image"
                  height={apiData?.bg_image_center.height}
                  width={apiData?.bg_image_center.width}
                />
              </Box> */}
              <Text
                fontSize={{ xs: "2.6rem", lg: "4rem" }}
                color="darkblue.500"
                fontWeight="600"
                as="h1"
                my="0rem"
                pt="3rem"
                lineHeight={{ xs: "3.1rem", lg: "4.8rem" }}
                // textAlign={{ xs: "center", lg: "unset" }}
                zIndex={2}
              >
                {apiData?.title?.replace(/<[^>]+>|&nbsp;/g, "")}
              </Text>
              <Box mt="2.9rem">
                <Flex alignItems="center">
                  <Flex alignItems="center">
                    {data?.author?.name && (
                      <Text
                        ml="1rem"
                        textDecoration="underline"
                        textUnderlineOffset="0.1rem"
                        fontWeight="400"
                        fontSize="1.5rem"
                        color="darkblue.500"
                        textTransform="uppercase"
                      >
                        by {data?.author?.name}
                      </Text>
                    )}
                  </Flex>
                  {data?.author?.name && (
                    <Flex
                      ml="1rem"
                      bg="primary.500"
                      borderRadius="50%"
                      height="0.4rem"
                      width="0.4rem"
                    />
                  )}
                  <Text ml="1rem" fontWeight="300" fontSize="1.5rem" color="darkblue.500">
                    Gewijzigd,{" "}
                    {format(new Date(data?.published_at), "dd MMMM yyyy", { locale: nl })}
                  </Text>
                </Flex>
              </Box>
              {apiData?.isDescriptionVisible === true ? (
                <Box mt="2rem" maxWidth={{ xs: "32.7rem", lg: "69.6rem" }}>
                  {apiData?.description2 && (
                    <BoxStyle2>
                      <Markdown
                        options={{
                          overrides: {
                            h1: {
                              component: Text,
                              props: {
                                fontWeight: 800,
                                as: "h1",
                                my: "0rem",
                                fontSize: { xs: "2.8rem", lg: "4.8rem" },
                                color: "darkblue.500",
                                lineHeight: { xs: "3.2rem", lg: "5.8rem" },
                                mt: { xs: "1.6rem", lg: "4rem" },
                              },
                            },
                            h2: {
                              component: Text,
                              props: {
                                fontWeight: 600,
                                as: "h2",
                                my: "0rem",
                                fontSize: { xs: "2rem", lg: "2.8rem" },
                                color: "darkblue.500",
                                lineHeight: { xs: "2.4rem", lg: "3.3rem" },
                                mt: { xs: "1.6rem", lg: "4rem" },
                              },
                            },
                            h3: {
                              component: Text,
                              props: {
                                fontWeight: 600,
                                as: "h3",
                                my: "0rem",
                                fontSize: { xs: "2rem", lg: "2.8rem" },
                                color: "darkblue.500",
                                lineHeight: { xs: "2.4rem", lg: "3.3rem" },
                                mt: { xs: "1.6rem", lg: "4rem" },
                              },
                            },
                            h4: {
                              component: Text,
                              props: {
                                fontWeight: 400,
                                as: "h4",
                                my: "0rem",
                                fontSize: { xs: "1.6rem", lg: "1.8rem" },
                                color: "darkblue.500",
                                lineHeight: { xs: "2.4rem", lg: "3.3rem" },
                              },
                            },
                            p: {
                              component: Text,
                              props: {
                                fontWeight: 300,
                                as: "p",
                                my: "0rem",
                                fontSize: { xs: "1.5rem", lg: "1.9rem" },
                                color: "darkblue.500",
                                lineHeight: { xs: "2.4rem", lg: "2.3rem" },
                                mt: { xs: "1.6rem", lg: "1.7rem" },
                                mb: { xs: "1.6rem", lg: "2.7rem" },
                              },
                            },
                          },
                        }}
                      >
                        {apiData?.description2}
                      </Markdown>
                    </BoxStyle2>
                  )}
                </Box>
              ) : (
                <Text
                  fontSize={{ xs: "1.5rem", lg: "2rem" }}
                  color="darkblue.500"
                  as="h3"
                  my="0rem"
                  fontWeight="300"
                  lineHeight="2.4rem"
                  // textAlign={{ xs: "center", lg: "unset" }}
                  mt="1.7rem"
                  maxWidth={{ xs: "33.7rem", lg: "69.6rem" }}
                  // mx={{ xs: "auto", lg: "unset" }}
                >
                  {apiData?.description}
                </Text>
              )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};
