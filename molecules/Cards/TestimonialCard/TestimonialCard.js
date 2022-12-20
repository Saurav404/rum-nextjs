import React from "react";
import { Box, Text, Flex } from "atoms";
import Image from "next/image";

export const TestimonialCard = ({ apiData2 }) => {
  return (
    <>
      <Box bg="secondary.500" py={{ xs: "4.5rem", lg: "6rem" }}>
        {/* Target Image */}
        <Box
          position="absolute"
          top={{ xs: "-3rem", lg: "-5rem" }}
          right={{ xs: "2rem", lg: "10rem" }}
          height={{ xs: "6.4rem", lg: "9.6rem" }}
          width={{ xs: "6.4rem", lg: "9.6rem" }}
        >
          <Image src={apiData2?.bg_image_right?.url} alt="target" height={96} width={96} />
        </Box>
        {/* main section */}
        <Flex flexDirection="column" alignItems="center">
          <Box height={{ xs: "1.4rem", lg: "9rem" }} width={{ xs: "1.9rem", lg: "4.4rem" }}>
            <Image src="/images/quotes.svg" alt="quotes" height={90} width={44} />
          </Box>
          <Text
            fontWeight="400"
            fontFamily="Montserrat"
            fontSize={{ xs: "1.6rem", lg: "3.3rem" }}
            color="darkblue.500"
            maxWidth={{ xs: "29.6rem", lg: "91.6rem" }}
            lineHeight={{ xs: "1.9rem", lg: "4rem" }}
            textAlign="center"
            mt={{ xs: "1.9rem", lg: "-3rem" }}
          >
            {apiData2?.content?.replace(/<[^>]+>|&nbsp;/g, "")}
          </Text>
          <Flex mt="3.8rem" alignItems="center">
            <Box height={{ xs: "4rem", lg: "6.4rem" }} width={{ xs: "4rem", lg: "6.4rem" }}>
              <Image
                src={apiData2?.image?.url}
                alt="teresa"
                height={100}
                width={100}
                className="circular--square"
              />
            </Box>
            <Box ml={{ xs: "0.8rem", lg: "1.6rem" }}>
              <Text
                fontWeight="600"
                fontFamily="Montserrat"
                fontSize={{ xs: "1.4rem", lg: "1.6rem" }}
                color="darkblue.500"
                lineHeight={{ xs: "1.7rem", lg: "1.9rem" }}
              >
                {apiData2.name}
              </Text>
              <Text
                fontWeight="300"
                fontFamily="Montserrat"
                fontSize={{ xs: "1.4rem", lg: "1.6rem" }}
                color="darkblue.500"
                lineHeight={{ xs: "1.7rem", lg: "1.9rem" }}
              >
                {apiData2.designation}
              </Text>
            </Box>
          </Flex>
        </Flex>
        {/* target arrow */}
        <Box
          position="absolute"
          bottom={{ xs: "-2rem", lg: "-4rem" }}
          left={{ xs: "16%", lg: "16.3rem" }}
          display={{ xs: "none", lg: "block" }}
          height={{ xs: "4.2rem", lg: "6.8rem" }}
          width={{ xs: "4.2rem", lg: "5.6rem" }}
        >
          <Image src={apiData2.bg_image_left.url} alt="target" height={68} width={56} />
        </Box>
        <Box
          position="absolute"
          bottom={{ xs: "-2rem", lg: "-4rem" }}
          left={{ xs: "18%", lg: "16.3rem" }}
          display={{ xs: "block", lg: "none" }}
          height={{ xs: "4.2rem", lg: "6.8rem" }}
          width={{ xs: "4.2rem", lg: "5.6rem" }}
        >
          <Image src={apiData2.bg_image_left.url} alt="target" height={68} width={56} />
        </Box>
      </Box>
    </>
  );
};
