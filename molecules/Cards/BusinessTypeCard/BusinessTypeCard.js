import React from "react";
import { Grid, Box, Text, Flex, Button } from "atoms";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const BusinessTypeCard = ({ data }) => {
  return (
    <>
      <Box mx={{ xs: "none", lg: "7rem" }}>
        <Flex alignItems="center" justifyContent="start">
          {data?.business_type_img?.url && (
            <Player autoplay src={data?.business_type_img?.url} style={{ width: 100, height: 100 }}>
              <Controls visible={false} />
            </Player>
          )}
          <Box height="4.2rem" width="25rem" ml="-1rem">
            <Text color="darkblue.500" fontWeight="700" fontSize="2rem" lineHeight="2.5rem">
              {data?.heading}
            </Text>
          </Box>
        </Flex>
        <Grid
          mt="2.3rem"
          gridTemplateColumns="repeat(5,1fr)"
          overflowX={{ xs: "auto", lg: "none" }}
          className="hide-scrollbar"
        >
          {data?.card?.map((item, index) => {
            return (
              <Box
                key={item}
                borderRadius="0.4rem"
                width="21.8rem"
                border="1px solid"
                borderColor="gray.800"
                mr="1.6rem"
                ml={index === 0 ? { xs: "3rem", lg: "none" } : { xs: "none" }}
              >
                <Box height="4rem" backgroundColor={item.bg_color} borderRadius="0.2rem">
                  <Flex alignItems="center" justifyContent="center" height="4rem">
                    {item?.icon?.url && (
                      <Image src={item?.icon?.url} alt="alt" height={24} width={24} />
                    )}
                    <Text fontWeight="600" fontSize="1.4rem" ml="0.5rem" color="darkblue.500">
                      {item?.title}
                    </Text>
                  </Flex>
                </Box>
                <Flex flexDirection="column" alignItems="center" mt="2.5rem">
                  <Box>
                    <Flex flexDirection="column" alignItems="center">
                      <Box height="13rem" width="13rem">
                        <Image
                          src={item?.logo?.url}
                          alt="alt"
                          // height={26}
                          // width={130}
                          layout="fill"
                        />
                      </Box>

                      <Text
                        fontWeight="400"
                        fontSize="1.5rem"
                        mt="1.6rem"
                        mb="1.6rem"
                        height="4rem"
                        color="secondary.1000"
                        textAlign="center"
                      >
                        {item?.description}
                      </Text>
                      <Flex alignItems="center" justifyContent="center" mb="1.5rem" mt="1rem">
                        <StarRatings
                          starRatedColor="#92ECD6"
                          svgIconPath="M8.00189 11.5996L11.4602 13.6913C12.0936 14.0746 12.8686 13.508 12.7019 12.7913L11.7852 8.85798L14.8436 6.20797C15.4019 5.72464 15.1019 4.80798 14.3686 4.74964L10.3436 4.40798L8.76856 0.691309C8.48523 0.0163086 7.51856 0.0163086 7.23523 0.691309L5.66023 4.39964L1.63522 4.74131C0.901892 4.79964 0.601892 5.71631 1.16022 6.19964L4.21856 8.84964L3.30189 12.783C3.13523 13.4996 3.91023 14.0663 4.54356 13.683L8.00189 11.5996Z"
                          svgIconViewBox="0 0 16 14"
                          rating={item?.rating}
                          starDimension="15px"
                          starSpacing="3px"
                        />
                        <Text fontWeight="600" fontSize="1.4rem" ml="1rem">
                          {item?.rating}/5
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Grid height="17rem" mt="1.5rem">
                    {item?.feature?.map((item) => {
                      return (
                        <Box mb="1rem">
                          <Flex key={item} alignItems="center">
                            <Image src="/images/tick.svg" alt="blue-tick" height={18} width={18} />
                            <Text
                              fontWeight="500"
                              fontSize="1.4rem"
                              lineHeight="1.8rem"
                              maxWidth="16.8rem"
                              ml="1rem"
                            >
                              {item?.name}
                            </Text>
                          </Flex>
                        </Box>
                      );
                    })}
                  </Grid>
                  <a
                    href={item?.compare_button?.url ? item?.compare_button?.url : "/"}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <Button id="compare-button" variant="purple" height="4rem" mt="3.2rem" width="18.6rem">
                      {item?.compare_button?.name}
                    </Button>
                  </a>
                  <a
                    href={item?.more_info?.url ? item?.more_info?.url : "/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text
                      mt="1.6rem"
                      fontSize="1.3rem"
                      fontWeight="700"
                      lineHeight="1.57rem"
                      color="blue.300"
                      mb="1.6rem"
                    >
                      {item?.more_info?.name}
                    </Text>
                  </a>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
