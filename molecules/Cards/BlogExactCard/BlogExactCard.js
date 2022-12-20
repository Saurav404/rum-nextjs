import React from "react";
import { Box, Image, Grid, Flex, Text, Button } from "atoms";
import MemoArrowRight from "public/assets/icons/ArrowRight";
import MemoStar from "public/assets/icons/Star";
import StarRatings from "react-star-ratings";

export const BlogExactCard = ({
  src,
  height,
  width,
  title,
  subtitle,
  body,
  ratings,
  pricing,
  pricing_text,
  reviews,
  visit_website_cta,
  view_reviews_cta,
}) => {
  return (
    <>
      <Grid
        width={{ xs: "unset", lg: "80rem" }}
        height={{ xs: "42.1rem", lg: "22.4rem" }}
        gridTemplateColumns={{ xs: "1fr", lg: "3fr 1fr" }}
        py={{ xs: "2.4rem", lg: "2.4rem" }}
        border="1px solid rgba(83, 87, 101,0.4)"
        borderRadius="8px"
      >
        <Box
          mr={{ xs: "none", lg: "2rem" }}
          borderRight={{ xs: "none", lg: "1px solid rgba(83, 87, 101,0.4)" }}
        >
          <Grid gridTemplateColumns="auto 3fr" gridGap="1.6rem" px={{ xs: "2.4rem", lg: "2.4rem" }}>
            <Box
              height="8rem"
              width="8rem"
              border={{ xs: "1px solid #E7E7E7", lg: "none" }}
              borderRadius={{ xs: "30rem", lg: "none" }}
            >
              <Image src={src} alt="exacttext" height={20} width={68} />
            </Box>
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{ xs: "1.6rem", lg: "2rem" }}
                lineHeight={{ xs: "1.9rem", lg: "2.4rem" }}
                color="darkblue.500"
              >
                {title}
              </Text>
              <Text
                mt="0.5rem"
                fontWeight="normal"
                fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
                lineHeight={{ xs: "1.3rem", lg: "2rem" }}
                color="gray.300"
              >
                {subtitle}
              </Text>
              <Flex mt="0.8rem" width="fit-content" flexDirection={{ xs: "column", lg: "row" }}>
                <Flex>
                  <StarRatings
                    starRatedColor="#92ECD6"
                    rating={5}
                    starDimension="18px"
                    starSpacing="5px"
                  />
                </Flex>

                <Text
                  fontWeight="600"
                  fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                  lineHeight={{ xs: "1.4rem", lg: "1.9rem" }}
                  color="darkblue.500"
                  ml={{ lg: "1.2rem" }}
                  mt={{ xs: "0.7rem", lg: "unset" }}
                >
                  {reviews} reviews
                </Text>
              </Flex>
            </Box>
          </Grid>
          <Box
            fontWeight="normal"
            fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
            lineHeight={{ xs: "1.4rem", lg: "2rem" }}
            color="darkblue.800"
            pt={{ xs: "1.4rem", lg: "1.8rem" }}
            px={{ xs: "2.4rem", lg: "2.4rem" }}
          >
            {body}
          </Box>
        </Box>

        <Box>
          <Text
            fontWeight="bold"
            fontSize={{ xs: "2rem", lg: "2rem" }}
            lineHeight="2.4rem"
            color="darkblue.800"
            px={{ xs: "2.4rem", lg: "2.4rem" }}
            mt={{ xs: "1.6rem", lg: "unset" }}
          >
            {pricing}
          </Text>
          <Text
            mt={{ xs: "0.8rem", lg: "0.4rem" }}
            fontWeight="normal"
            fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
            lineHeight={{ xs: "1.4rem", lg: "2rem" }}
            color="gray.300"
            px={{ xs: "2.4rem", lg: "2.4rem" }}
          >
            {pricing_text}
          </Text>
          <Box
            display={{ xs: "block", lg: "none" }}
            mt="1.5rem"
            width="100%"
            height={1}
            bg="#E7E7E7"
          />
          <Box px={{ xs: "2.4rem", lg: "unset" }} pr={{ lg: "2.4rem" }}>
            <Button
              id="view-website"
              variant="primary"
              height="4rem"
              bg="#403BCB"
              mt={{ xs: "1.7rem", lg: "2.2rem" }}
              cursor="pointer"
            >
              <Flex justifyContent="center" alignItems="center" cursor="pointer">
                <Text pr="1rem">{visit_website_cta?.name}</Text>
                <MemoArrowRight fill="white" height="1.2rem" width="1.8rem" />
              </Flex>
            </Button>
            <Button id="view-reviews" variant="secondary" mt="1.6rem" height="4rem" cursor="pointer">
              {view_reviews_cta?.name}
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
