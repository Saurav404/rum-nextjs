import React from "react";
import { Box, Flex } from "atoms";
import Image from "next/image";

export const ModalHeading = ({ onRequestClose }) => {
  return (
    <>
      <Box>
        <Flex mx={{ xs: "2.4rem", md: "", lg: "3.1rem" }} my={{ lg: "1.8rem" }}>
          <Box width={{ xs: "14.4rem", md: "18rem" }} height={{ xs: "3.2rem", md: "4rem" }}>
            <Image src="/images/logo.svg" alt="logo" width={180} height={40} />
          </Box>
          <Box
            ml="auto"
            pt={{ xs: "1rem", md: "1.3rem" }}
            onClick={onRequestClose}
            width={{ xs: "1.3rem", md: "unset" }}
            height={{ xs: "1.3rem" }}
          >
            <Image src="/images/close-icon.svg" alt="logo" width={17.5} height={17.5} />
          </Box>
        </Flex>
      </Box>
    </>
  )
};
