import React, { useState } from "react";
import { Box, Text, Grid, Flex, Button } from "atoms";

export const MortgageCardVariation = ({
  src,
  alt,
  title,
  rate,
  button_title,
  button_url,
  heading,
  description,
  defaultValue,
}) => {
  const [select, setSelect] = useState(defaultValue?.[0]?.id);
  return (
    <>
      <Box p="3.2rem" bg="white" borderRadius="0.4rem" border="1px solid" borderColor="gray.800">
        <Grid
          gridTemplateColumns={{ xs: "1fr", md: "1fr 2fr 1fr" }}
          gridColumnGap={{ md: "8rem" }}
          alignItems="center"
        >
          <Box>
            <Text
              fontSize={{ xs: "1.3rem", lg: "2rem" }}
              color="darkblue.500"
              fontWeight="600"
              my="0rem"
              lineHeight={{ xs: "1.5rem", lg: "2.4rem" }}
            >
              {heading}
            </Text>
            <Text
              fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
              color="gray.300"
              fontWeight="300"
              mt={{ xs: "0.8rem", md: "0rem" }}
              lineHeight={{ xs: "1.4rem", lg: "1.8rem" }}
            >
              {description}
            </Text>
          </Box>
          <Grid
            mt={{ xs: "2.7rem", md: "unset" }}
            gridTemplateColumns={{ xs: "repeat(4,1fr)", md: "repeat(4,1fr)" }}
          >
            {rate?.map((items) => {
              return (
                <Flex
                  justifyContent="center"
                  borderRadius="2rem"
                  border="2px solid"
                  cursor="pointer"
                  px="1.6rem"
                  py={{ xs: "0.8rem", md: "0.5rem" }}
                  borderColor={select === items.id ? "blue.300" : "transparent"}
                  onClick={() => {
                    if (select === items.id) setSelect("");
                    else setSelect(items.id);
                  }}
                >
                  <Text
                    fontSize={{ xs: "1.3rem", md: "2rem" }}
                    fontWeight={select === items.id ? "600" : "400"}
                    color={select === items.id ? "blue.300" : "darkblue.500"}
                  >
                    {items?.percentage}
                  </Text>
                </Flex>
              );
            })}
          </Grid>
          <a href={button_url ? button_url : "/"} target="_blank" rel="noreferrer" passHref>
            <Button
              id="Offerte"
              mt={{ xs: "2.7rem", md: "unset" }}
              variant="purple"
              // bg="primary.500"
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
        </Grid>
      </Box>
    </>
  );
};
