import React from "react";
import { Box, Flex, Text, Button } from "atoms";

export const LoanSubscribe = ({ data }) => {
  return (
    <>
      <Box bg="blue.300" borderRadius="0rem 1.6rem 1.6rem 1.6rem" p="2.4rem 2.4rem 3.2rem 3.2rem">
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Box>
            <Text
              fontSize={{ xs: "1.6rem", lg: "2rem" }}
              fontWeight="600"
              lineHeight={{ xs: "1.8rem", lg: "2.6rem" }}
              color="white"
            >
              {data?.title}
            </Text>
          </Box>
          <Button id="loan-subscribe" variant="cyan" height="4rem" width="14.7rem" mt="1.4rem">
            <Text fontSize="1.4rem" lineHieght="1.6rem" fontWeight="600">
              {data?.button_title}
            </Text>
          </Button>
        </Flex>
      </Box>
    </>
  );
};
