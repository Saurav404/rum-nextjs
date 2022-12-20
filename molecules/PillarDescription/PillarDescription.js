import React, { useState, useEffect } from "react";

import { Box, Text, Grid, Image, Flex, Button } from "atoms";
import Link from "next/link";
import { CommentSectionPillar } from "organisms";
import CarretIcon from "public/assets/icons/CarretIcon";
import LikeIcon from "public/assets/icons/LikeIcon";
import { debounce } from "utils/utilities";
import CommentIcon from "public/assets/icons/CommentIcon";
import DownloadIcon from "public/assets/icons/DownloadIcon";
import Markdown from "markdown-to-jsx";
import { PillarSummary, SocialSectionTags } from "molecules";
import axios from "axios";
import styled from "styled-components";
import {
  BlogExactCard,
  BlogExactQuoteCard,
  ComparisonCard,
  PointerCard,
  BusinessLogoCard,
} from "molecules/Cards";
import { ShareModal } from "../Modal/ShareModal";
import { BusinessTypeCard } from "molecules/Cards/BusinessTypeCard";

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
      font-size: 13px;
      padding-top: 9px;
      padding-bottom: 9px;
    }
    table {
      border-collapse: collapse;
      margin-left: -3rem;
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
  a {
    font-weight: 300;
    font-size: 1.8rem;
    color: blue;
  }
  li {
    font-weight: 300;
    font-size: 1.8rem;
  }
  max-width: 80rem;
  @media only screen and (max-width: 600px) {
    a {
      font-weight: 300;
      font-size: 1.5rem;
      color: blue;
    }
    li {
      font-weight: 300;
      font-size: 1.5rem;
    }
    max-width: 35rem;
  }
`;
export const PillarDescription = ({ blogs }) => {
  const [showComment, setShowComment] = useState(false);
  const [like, setLike] = useState(
    blogs?.likeCounter !== null ? parseInt(blogs?.likeCounter, 10) : parseInt(0, 10)
  );
  const [highlight, setHighlight] = useState("");
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const handleScroll = (id) => {
    setHighlight(id);
    const elemRect = document.getElementById(id)?.offsetTop || 0;
    window.scrollTo({ top: elemRect + 980, behavior: "smooth" });
  };
  useEffect(() => {
    const section = document.querySelectorAll("section[id]");
    const arr = [];
    section.forEach((sec) => {
      arr.push({ offset: sec.offsetTop, id: sec.id });
    });

    window.onscroll = () =>
      debounce(() => {
        const top = window.scrollY - 880;
        arr.reverse().some(({ offset, id }) => {
          if (top > offset) {
            setHighlight(id);
            return false;
          }
          return true;
        });
      });
  }, []);

  const handleComment = () => {
    setShowComment(true);
  };

  const likePost = async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pillars/${blogs.slug}`);
      setLike(like + 1);
    } catch (e) {
      console.error(e);
    }
  };
  const path = "/";

  const cardData = blogs?.pillar_content_sections?.find(
    (c) => c.__component === "sections.business-type-picks"
  );
  const richData = blogs?.pillar_content_sections?.find(
    (c) => c.__component === "sections.blog-rich-text-component"
  );

  return (
    <>
      {cardData && (
        <Box mt="6rem">
          <BusinessTypeCard data={cardData} />
        </Box>
      )}
      {/* <Box display={{ xs: "none", lg: "block" }}>
        {blogs?.summary_section && (
          <PillarSummary apiData={blogs?.summary_section} handleScroll={handleScroll} />
        )}
      </Box> */}
      <Box>
        {blogs?.pillar_content_sections?.[0]?.__component ===
          "sections.blog-rich-text-component" && (
          <Box pt={{ lg: "5rem" }} pb={{ lg: "10rem" }}>
            {/* colored side rectangles */}
            {blogs?.summary_section && (
              <>
                <Box
                  position="absolute"
                  right="0rem"
                  top="150rem"
                  zIndex={1}
                  display={{ xs: "none", lg: "block" }}
                >
                  <Image
                    src="/images/green-side-box.svg"
                    alt="green-box"
                    height="24rem"
                    width="12rem"
                  />
                </Box>
                <Box
                  position="absolute"
                  left="-1rem"
                  top="226rem"
                  zIndex={1}
                  display={{ xs: "none", lg: "block" }}
                >
                  <Image
                    src="/images/blue-side-box.svg"
                    alt="green-box"
                    height="24rem"
                    width="12rem"
                  />
                </Box>
                <Box
                  position="absolute"
                  right="0rem"
                  top="260rem"
                  zIndex={1}
                  display={{ xs: "none", lg: "block" }}
                >
                  <Image
                    src="/images/blue-right-box.svg"
                    alt="green-box"
                    height="13rem"
                    width="9rem"
                  />
                </Box>
              </>
            )}

            {/* main section */}
            <Grid
              gridTemplateColumns={{ xs: "1fr", lg: "2.6fr 1fr" }}
              gridRowGap={{ xs: "2rem" }}
              gridColumnGap={{ lg: "10rem" }}
              zIndex={3}
              px={{ xs: "2.5rem", lg: "11rem" }}
            >
              <Box order={{ xs: "1", lg: "unset" }} width={{ lg: "75rem" }}>
                <Box mt={{ xs: "1rem", lg: "4rem" }}>
                  {richData &&
                    richData?.sections?.map((item) => {
                      return (
                        <section id={item.uid} key={item.id}>
                          {item?.content && (
                            <BoxStyle2>
                              <Markdown
                                options={{
                                  overrides: {
                                    h1: {
                                      component: Text,
                                      props: {
                                        as: "h1",
                                        my: "0rem",
                                        fontWeight: 800,
                                        fontSize: { xs: "2.8rem", lg: "4.8rem" },
                                        color: "darkblue.500",
                                        lineHeight: { xs: "3.2rem", lg: "5.8rem" },
                                      },
                                    },
                                    h2: {
                                      component: Text,
                                      props: {
                                        as: "h2",
                                        my: "0rem",
                                        fontWeight: 600,
                                        fontSize: { xs: "2rem", lg: "2.8rem" },
                                        color: "darkblue.500",
                                        lineHeight: { xs: "3.2rem", lg: "5.8rem" },
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
                                      },
                                    },

                                    p: {
                                      component: Text,
                                      props: {
                                        as: "p",
                                        my: "0rem",
                                        fontWeight: 300,
                                        fontSize: { xs: "1.5rem", lg: "1.8rem" },
                                        color: "darkblue.500",
                                        lineHeight: { xs: "2.4rem", lg: "2.1rem" },
                                        mt: { xs: "1.6rem", lg: "1.7rem" },
                                        mb: { xs: "1.6rem", lg: "2.7rem" },
                                      },
                                    },
                                  },
                                }}
                              >
                                {item?.content}
                              </Markdown>
                            </BoxStyle2>
                          )}
                          {blogs.pillar_content_sections?.slice(1)?.map((card) => {
                            return (
                              <Grid gridTemplateColumns="1fr" key={card.id}>
                                {card.__component === "sections.blog-website-review-component" &&
                                  card.uid === item.uid && (
                                    <Box key={card.id} my="2.4rem">
                                      <BlogExactCard
                                        src={card?.logo?.url}
                                        height={card?.logo?.height}
                                        width={card?.logo?.width}
                                        title={card?.title}
                                        subtitle={card?.heading_below_title}
                                        body={card?.description}
                                        pricing={card?.pricing}
                                        pricing_text={card?.pricing_text}
                                        reviews={card?.review_stars}
                                        ratings={card?.ratings}
                                        visit_website_cta={card?.visit_website_cta}
                                        view_reviews_cta={card?.view_reviews_cta}
                                      />
                                    </Box>
                                  )}

                                {card.__component === "sections.blog-get-quote-section" &&
                                  card.uid === item.uid && (
                                    <Box key={card.id} my="1rem">
                                      <BlogExactQuoteCard
                                        body1={card?.content?.replace(/<[^>]+>|&nbsp;/g, "")}
                                        src={card?.logo?.url}
                                        alt="logo"
                                        width={card?.logo?.width}
                                        height={card?.logo?.height}
                                        get_quote_button={card?.get_quote_button}
                                      />
                                    </Box>
                                  )}

                                {card.__component === "sections.blog-table-section" &&
                                  card.uid === item.uid && (
                                    <Box>
                                      <Text
                                        fontSize={{ xs: "1.6rem", lg: "2rem" }}
                                        lineHeight={{ xs: "1.8rem", lg: "2.4rem" }}
                                        color="darkblue.500"
                                        fontWeight="600"
                                        mb={{ xs: "2rem", lg: "3rem" }}
                                      >
                                        {card?.title}
                                      </Text>
                                      {card?.table_content?.map((value) => {
                                        return (
                                          <BoxStyle key={value.id}>
                                            {value.table_content && (
                                              <Markdown
                                                options={{
                                                  overrides: {
                                                    h3: {
                                                      component: Text,
                                                      props: {
                                                        fontWeight: 600,

                                                        fontSize: { xs: "1.5rem", lg: "1.8rem" },
                                                        color: "darkblue.500",
                                                        lineHeight: { xs: "1.8rem", lg: "2rem" },
                                                        mt: { xs: "1.6rem", lg: "4rem" },
                                                      },
                                                    },

                                                    p: {
                                                      component: Text,
                                                      props: {
                                                        fontWeight: 300,
                                                        fontSize: { xs: "1.5rem", lg: "1.8rem" },
                                                        color: "darkblue.500",
                                                        lineHeight: { xs: "2.4rem", lg: "2.1rem" },
                                                        mt: { xs: "1.6rem", lg: "1.7rem" },
                                                        mb: { xs: "1.6rem", lg: "2.7rem" },
                                                      },
                                                    },
                                                    table: {
                                                      props: {
                                                        width: "100%",
                                                      },
                                                    },
                                                  },
                                                }}
                                              >
                                                {value?.table_content}
                                              </Markdown>
                                            )}
                                          </BoxStyle>
                                        );
                                      })}
                                    </Box>
                                  )}
                                {card.__component === "sections.blog-colored-pointers-section" &&
                                  card.uid === item.uid && (
                                    <Grid
                                      gridTemplateColumns={{ xs: "1fr", lg: "repeat(2,1fr)" }}
                                      gridGap="3.2rem"
                                      my="2rem"
                                    >
                                      {card?.cards?.map((value) => {
                                        return (
                                          <PointerCard
                                            key={value.id}
                                            color={value?.bg_color}
                                            title={value?.title}
                                            subtitle={value?.pointers}
                                          />
                                        );
                                      })}
                                    </Grid>
                                  )}
                                {card.__component === "sections.blog-business-logo-section" &&
                                  card.uid === item.uid && (
                                    <Box>
                                      <BusinessLogoCard
                                        logo={card?.logo}
                                        title={card?.title}
                                        url={card?.url}
                                        link_icon={card?.link_icon}
                                      />
                                    </Box>
                                  )}
                                {card?.__component === "components.blog-button-component" && (
                                  <>
                                    {card?.buttons?.map((btn) => {
                                      return (
                                        <Link href={btn?.url ? btn?.url : "/"} passHref>
                                          <a>
                                            <Button
                                              id="blog-button"
                                              variant="primary"
                                              bg="primary.500"
                                              height="4.8rem"
                                              width={{ xs: "15.6rem", lg: "15.6rem" }}
                                            >
                                              <Text pr="1rem">{btn?.name}</Text>
                                            </Button>
                                          </a>
                                        </Link>
                                      );
                                    })}
                                  </>
                                )}
                                {card?.__component === "components.success-right-component" &&
                                  card.uid === item.uid && (
                                    <ComparisonCard
                                      key={card.id}
                                      title={card?.title}
                                      description={card?.description}
                                      bg={card?.bg_color}
                                      button={card?.button}
                                      discount={card?.discount_rate_text}
                                      discount_img={card?.icon?.url}
                                      image={card?.image?.url}
                                    />
                                  )}
                              </Grid>
                            );
                          })}
                        </section>
                      );
                    })}
                  <SocialSectionTags
                    helpFul={blogs?.wasHelpful}
                    notHelpFul={blogs?.wasNotHelpful}
                    apidata={blogs?.social_media_section}
                    slug={blogs?.slug}
                    likedata={blogs?.like_dislike_component}
                    tags={blogs?.tags}
                  />
                </Box>
              </Box>
              {blogs?.summary_section && (
                <Box
                  position={{ xs: "unset", lg: "sticky" }}
                  display={{ xs: "none", lg: "inline-block" }}
                  className={{ lg: "float-align" }}
                  top={{ lg: "12rem" }}
                  height={{ lg: "85rem" }}
                  order={{ xs: "0", lg: "unset" }}
                  mt={{ xs: "2.3rem", lg: "4rem" }}
                >
                  <Box
                    width={{ xs: "100%", lg: "28rem" }}
                    borderRadius="0.8rem"
                    bg="gray.500"
                    py={{ xs: "1.6rem", lg: "2.4rem" }}
                    height="40.7rem"
                  >
                    <Text
                      px="2.4rem"
                      fontWeight="600"
                      color="darkblue.500"
                      fontSize={{ xs: "2rem", lg: "1.7rem" }}
                      lineHeight={{ xs: "2.4rem", lg: "2.1rem" }}
                    >
                      Samenvatting
                    </Text>
                    <Box
                      top={{ lg: "4.5rem" }}
                      width="100%"
                      zIndex={4}
                      opacity="1"
                      position="absolute"
                      height="6rem"
                      backgroundImage="linear-gradient(180deg, #F5F5F5 18.84%, rgba(245, 245, 245, 0) 100%)"
                    />
                    <Grid
                      gridTemplateColumns="1fr"
                      gridRowGap="1.6rem"
                      pt={{ xs: "0.8rem", lg: "3rem" }}
                      pb={{ xs: "0.8rem", lg: "2rem" }}
                      overflowX="auto"
                      className="hide-scrollbar"
                      height="32rem"
                      px="2.4rem"
                    >
                      {blogs?.summary_section?.pointers?.map((items) => {
                        return (
                          <Box
                            zIndex={1}
                            key={items.id}
                            display={items.title ? "block" : "none"}
                            cursor="pointer"
                            onClick={() => handleScroll(items.link)}
                          >
                            <Flex alignItems="baseline">
                              <CarretIcon fill={items.link === highlight ? "#204ECF" : "#050E29"} />
                              <Text
                                ml="1.1rem"
                                fontSize={{ xs: "1.5rem", lg: "1.4rem" }}
                                fontWeight="400"
                                color={items.link === highlight ? "primary.500" : "darkblue.500"}
                                maxWidth={{ xs: "25rem", lg: "20.9rem" }}
                                lineHeight={{ xs: "2.4rem", lg: "2.1rem" }}
                              >
                                {items.title}
                              </Text>
                            </Flex>
                          </Box>
                        );
                      })}
                    </Grid>
                    <Box
                      top={{ lg: "33rem" }}
                      width="100%"
                      zIndex={4}
                      opacity="1"
                      position="absolute"
                      height="6rem"
                      backgroundImage="linear-gradient(180deg, #F5F5F5 18.84%, rgba(245, 245, 245, 0) 100%)"
                      transform="rotate(-180deg)"
                    />
                  </Box>

                  <Box
                    width="28rem"
                    display={{ xs: "none", lg: "block" }}
                    height={1}
                    bg="darkblue.500"
                    mt="1.6rem"
                    opacity="10%"
                  />
                  <Box display={{ xs: "none", lg: "block" }}>
                    <Flex mt="1.6rem">
                      <Flex alignItems="center">
                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          bg="gray.500"
                          height="3.2rem"
                          width="3.2rem"
                          borderRadius="50%"
                          cursor="pointer"
                          _hover={{ transform: "scale(1.1)" }}
                          onClick={likePost}
                        >
                          <LikeIcon />
                        </Flex>
                        <Text ml="1rem" fontWeight="300" color="gray.700" fontSize="1.4rem">
                          {like ? like : "0"}
                        </Text>
                      </Flex>
                      <Flex alignItems="center" ml="1.6rem">
                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          bg="gray.500"
                          height="3.2rem"
                          width="3.2rem"
                          borderRadius="50%"
                          onClick={handleComment}
                          cursor="pointer"
                        >
                          <CommentIcon />
                        </Flex>
                        <Text ml="1rem" fontWeight="300" color="gray.700" fontSize="1.4rem">
                          {blogs.comments?.length ? blogs.comments?.length : "0"}
                        </Text>
                      </Flex>
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        bg="gray.500"
                        height="3.2rem"
                        width="3.2rem"
                        borderRadius="50%"
                        ml="auto"
                        mr="1.6rem"
                        cursor="pointer"
                      >
                        <Box onClick={() => setModal(!modal)}>
                          <DownloadIcon />
                        </Box>
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
              )}
            </Grid>
          </Box>
        )}
      </Box>

      {showComment && (
        <Box
          position="fixed"
          top={0}
          width="100vw"
          height="100vh"
          zIndex={5}
          bg="rgba(0, 0, 0, 0.4)"
        >
          <CommentSectionPillar blogs={blogs} onClick={() => setShowComment(false)} />
        </Box>
      )}
      {modal && <ShareModal path={path} isOpen={modal} closeModal={closeModal} />}
    </>
  );
};
