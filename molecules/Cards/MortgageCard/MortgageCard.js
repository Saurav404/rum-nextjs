import React, { useState } from "react";
import { Box, Text, Grid, Flex, Button } from "atoms";
import Image from "next/image";
import Link from "next/link";

export const MortgageCard = ({ src, alt, title, rate, button_title, button_url, defaultValue }) => {
  const [select, setSelect] = useState(defaultValue?.[0]?.id);

  const defaultRate = rate?.filter((data) => {
    return data?.isHighlighted === true;
  });

  return (
    <>
      <Box
        p={{ xs: "1.8rem", md: "3.2rem" }}
        bg="white"
        borderRadius="0.4rem"
        border="1px solid"
        borderColor="gray.800"
      >
        <Grid
          gridTemplateColumns={{ xs: "1fr 1fr", md: "1fr 2fr 1fr" }}
          gridColumnGap={{ md: "8rem" }}
          alignItems="center"
        >
          <Grid gridTemplateColumns={{ xs: "5rem auto", md: "1fr 1fr" }} alignItems="center">
            <Box height={{ xs: "1.2rem", md: "2.4rem" }} width={{ xs: "4.7rem", md: "9.4rem" }}>
              <Image src={src} alt={alt} height={24} width={94} />
            </Box>
            <Text
              fontSize={{ xs: "1.3rem", lg: "2rem" }}
              color="darkblue.500"
              fontWeight="600"
              my="0rem"
              textAlign={{ xs: "left", md: "center" }}
              lineHeight={{ xs: "1.5rem", lg: "2.4rem" }}
            >
              {title}
            </Text>
          </Grid>
          <Box display={{ xs: "none", md: "block" }}>
            <Grid gridTemplateColumns={{ md: "repeat(4,1fr)" }}>
              {rate?.map((items) => {
                return (
                  <Flex
                    justifyContent="center"
                    borderRadius="2rem"
                    border="2px solid"
                    cursor="pointer"
                    px="1.4rem"
                    py={{ xs: "0.8rem", md: "0.5rem" }}
                    borderColor={select === items.id ? "blue.300" : "transparent"}
                    onClick={() => {
                      if (select === items.id) setSelect("");
                      else setSelect(items.id);
                    }}
                  >
                    <Text
                      fontSize="2rem"
                      fontWeight={select === items.id ? "600" : "400"}
                      color={select === items.id ? "blue.300" : "darkblue.500"}
                    >
                      {items?.percentage}
                    </Text>
                  </Flex>
                );
              })}
            </Grid>
          </Box>
          <Box ml="auto" display={{ xs: "block", md: "none" }}>
            <Flex
              px="1.6rem"
              py="0.6rem"
              width="fit-content"
              justifyContent="center"
              borderRadius="1rem"
              bg="secondary.100"
              cursor="pointer"
            >
              <Text fontSize="1.3rem" fontWeight="600" color="darkblue.500">
                {defaultRate?.[0]?.percentage}
              </Text>
            </Flex>
          </Box>
          <Box display={{ xs: "none", md: "block" }}>
            <a target="_blank" rel="noreferrer" href={button_url ? button_url : "/"} passHref>
              <Button
                id="Offerte"
                variant="purple"
                // bg="primary.500"
                height="4rem"
                width="100%"
              >
                <Flex justifyContent="center" alignItems="center" cursor="pointer">
                  <Text pr="1rem" fontSize="1.4rem" fontWeight="600">
                    {button_title}
                  </Text>
                </Flex>
              </Button>
            </a>
          </Box>
        </Grid>
        <Box display={{ xs: "block", md: "none" }}>
          <a target="_blank" rel="noreferrer" href={button_url ? button_url : "/"} passHref>
            <Button
              id="Offerte"
              mt={{ xs: "2.8rem", md: "unset" }}
              variant="primary"
              bg="primary.500"
              height="4rem"
              width={{ xs: "100%", lg: "100%" }}
            >
              <Flex justifyContent="center" alignItems="center" cursor="pointer">
                <Text pr="1rem" fontSize="1.4rem" fontWeight="600">
                  {button_title}
                </Text>
              </Flex>
            </Button>
          </a>
        </Box>
      </Box>
    </>
  );
};
