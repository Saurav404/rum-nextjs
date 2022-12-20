import React from "react";
import { Box, Text, Flex, Button } from "atoms";

export const FormWelcomeBack = () => {
  return (
    <>
      <Box
        height="100vh"
        bg="white"
        pt={{ xs: "15rem", lg: "10rem" }}
        px={{ xs: "2.5rem", lg: "11rem" }}
      >
        <Text fontWeight="700" fontSize="2.4rem" color="darkblue.500" lineHeight="2.9rem">
          Welcome back!{" "}
        </Text>
        <Text
          fontWeight="300"
          fontSize="1.8rem"
          color="secondary.1000"
          maxWidth={{ xs: "", lg: "46rem" }}
          lineHeight="2.1rem"
          mt="0.9rem"
        >
          Seems like you have already statred to fill in the form. Only a few steps left!
        </Text>
        <Box mt="4.8rem">
          <Text
            fontWeight="300"
            fontSize="1.6rem"
            color="secondary.1000"
            maxWidth={{ xs: "", lg: "46rem" }}
            lineHeight="1.9rem"
          >
            2 out of 6 question are completed
          </Text>
          <Flex
            mt="1.2rem"
            alignItems="center"
            bg="gray.900"
            height="0.8rem"
            width={{ xs: "100%", lg: "59.2rem" }}
          >
            <Box height="0.8rem" bg="blue.300" width="8rem" />
          </Flex>
          <Flex mt={{ xs: "21.6rem", lg: "4.8rem" }} flexDirection={{ xs: "column", lg: "row" }}>
            <Button
              id="continue-edit"
              width={{ xs: "100%", lg: "17.9rem" }}
              height="4rem"
              borderRadius="0.4rem"
              bg="blue.200"
            >
              <Text
                fontFamily="Inter"
                fontSize="1.6rem"
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                Continue editing
              </Text>
            </Button>
            <Button
              id="start-scratch"
              width={{ xs: "100%", lg: "17.9rem" }}
              height="4rem"
              borderRadius="0.4rem"
              variant="secondary"
              ml={{ lg: "2.4rem" }}
              mt={{ xs: "1.6rem", lg: "unset" }}
            >
              <Text fontFamily="Inter" fontSize="1.6rem" fontWeight="bold" textAlign="center">
                Start from scratch
              </Text>
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
