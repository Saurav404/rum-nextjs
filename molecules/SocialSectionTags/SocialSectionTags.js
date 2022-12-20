import React, { useState } from "react";
import { Box, Flex, Text } from "atoms";
import Image from "next/image";
import LikeSocialIcon from "public/assets/icons/LikeSocialIcon";
import DislikeIcon from "public/assets/icons/DislikeIcon";
import Link from "next/link";
import axios from "axios";
import { theme } from "styles";

export const SocialSectionTags = ({ apidata, tags, slug, helpFul, notHelpFul }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const helpful = async () => {
    try {
      await axios
        .put(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pillars/help/${slug}?isHelpful=true`)
        .then((response) => {
          if (response.status === 200) {
            setLiked(true);
            setDisliked(false);
          } else {
            setLiked(false);
            setDisliked(false);
          }
        });
    } catch (e) {
      console.error(e);
    }
  };

  const nothelpful = async () => {
    try {
      await axios
        .put(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pillars/help/${slug}?isHelpful=false`)
        .then((response) => {
          if (response.status === 200) {
            setLiked(false);
            setDisliked(true);
          } else {
            setLiked(false);
            setDisliked(false);
          }
        });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Box>
        <Flex justifyContent="center">
          {apidata?.map((item) => {
            return (
              <Link key={item.id} href={item?.url ? item.url : "/"} passHref>
                <a>
                  <Flex
                    height="3.2rem"
                    width="3.2rem"
                    bg="primary.500"
                    borderRadius="50%"
                    alignItems="center"
                    justifyContent="center"
                    mr="1.6rem"
                    cursor="pointer"
                  >
                    <Image
                      src={item?.icon.url}
                      height={item?.icon.height}
                      width={item?.icon.width}
                      alt="fb"
                    />
                  </Flex>
                </a>
              </Link>
            );
          })}
        </Flex>
        <Flex mt="2.5rem" ml={{ xs: "5rem", lg: "unset" }} alignItems="center">
          {tags?.map((item, index) => {
            return (
              <Flex justifyContent="center" cursor="pointer" key={item?.id}>
                <Link href={`/${item?.slug}`} passHref>
                  <a>
                    <Text
                      fontSize="1.4rem"
                      fontWeight="500"
                      lineHeight="2.4rem"
                      color="primary.500"
                      textTransform="uppercase"
                      textDecoration="underline"
                      textUnderlineOffset="0.3rem"
                    >
                      #{item?.name}
                    </Text>
                  </a>
                </Link>

                {index === tags?.length - 1 ? null : (
                  <Box
                    mx="0.4rem"
                    mt="1rem"
                    height="4px"
                    width="4px"
                    borderRadius="50%"
                    bg="primary.500"
                  />
                )}
              </Flex>
            );
          })}
        </Flex>
        <Box
          display={{ xs: "none", lg: "block" }}
          mt="3.5rem"
          height={1}
          bg="darkblue.500"
          opacity="10%"
          width="100%"
        />
        <Flex
          mt={{ xs: "4rem", lg: "4.8rem" }}
          p="2.4rem"
          width="100%"
          borderRadius="0.8rem"
          border="1px solid rgba(83, 87, 101, 0.4)"
          alignItems="center"
        >
          <Text
            fontWeight="600"
            fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
            lineHeight={{ xs: "1.4rem", lg: "1.9rem" }}
            color="darkblue.500"
          >
            Vind je deze informatie nuttig?
          </Text>
          <Flex ml="auto">
            <Flex
              height="4rem"
              width="4rem"
              bg={liked ? theme.colors.blue[300] : "gray.500"}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              transform="scaleY(-1)"
              mx="0.8rem"
              cursor="pointer"
              _hover={{ transform: "scaleY(-1.1)" }}
              onClick={helpful}
            >
              <LikeSocialIcon fill={liked ? theme.colors.white : theme.colors.gray[300]} />
            </Flex>
            <Flex
              height="4rem"
              width="4rem"
              bg={disliked ? theme.colors.blue[300] : "gray.500"}
              borderRadius="50%"
              justifyContent="center"
              alignItems="center"
              mx="0.8rem"
              cursor="pointer"
              _hover={{ transform: "scale(1.1)" }}
              onClick={nothelpful}
            >
              <DislikeIcon fill={disliked ? theme.colors.white : theme.colors.gray[300]} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
