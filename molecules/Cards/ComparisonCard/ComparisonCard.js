import React from "react";
import { Box, Text, Button, Flex } from "atoms";
import Image from "next/image";
import Link from "next/link";

export const ComparisonCard = ({
  bg,
  type,
  src,
  alt,
  height,
  width,
  discount,
  title,
  description,
  button,
  discount_img,
  image,
}) => {
  return (
    <>
      <Box width={{ xs: "86vw", md: "100%" }} py="3rem">
        {discount_img ? (
          <Box
            bg={bg ? bg : "white"}
            backgroundImage={image ? `url(${image})` : "unset"}
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
            pt={{ xs: "2rem", lg: "4.4rem" }}
            pb={{ xs: "1.6rem", lg: "7rem" }}
            px="3.6rem"
            borderRadius="0px 16px 16px 16px"
            boxShadow="0 10px 25px rgba(25, 118, 210, 0.5)"
          >
            <Box height={{ xs: "3.2rem", md: "3.5rem" }} width={{ xs: "3.2rem", md: "5rem" }}>
              <Image src={discount_img} alt="image-discount" height={64} width={64} />
            </Box>
            <Flex alignItems={{ xs: "flex-start", md: "center" }} flexDirection="row">
              <Flex
                mr={{ xs: "1rem", md: "0.8rem" }}
                px="0.6rem"
                py="0.4rem"
                bg="white"
                borderRadius="0px 8px 8px 8px"
              >
                <Text
                  fontWeight="600"
                  color={bg === "#050E29" ? "white" : "darkblue.500"}
                  fontSize={{ xs: "1.1rem", lg: "1.4rem" }}
                  lineHeight={{ xs: "1.4rem", lg: "1.6rem" }}
                  zIndex={3}
                >
                  {discount}
                </Text>
              </Flex>
              <Box mt={{ md: "2rem" }}>
                <Text
                  fontWeight="600"
                  color={bg === "#050E29" ? "white" : "darkblue.500"}
                  fontSize={{ xs: "1.2rem", lg: "3.2rem" }}
                  lineHeight={{ xs: "1.6rem", lg: "3.8rem" }}
                  zIndex={3}
                >
                  {title}
                </Text>
                <Text
                  fontWeight="300"
                  color={bg === "#050E29" ? "white" : "darkblue.500"}
                  fontSize={{ xs: "1rem", lg: "2rem" }}
                  lineHeight={{ xs: "1.4rem", lg: "2rem" }}
                  textAlign="left"
                  zIndex={3}
                >
                  {description}
                </Text>
              </Box>

              <Link href={button?.url ? button?.url : "/"} passHref>
                <a>
                  <Button
                    id="help-mij"
                    zIndex={3}
                    variant="action"
                    bg="#050E29"
                    width={{ xs: "100%", lg: "15.6rem" }}
                    height={{ xs: "3rem", md: "4rem" }}
                    ml={{ xs: "2rem", md: "4rem", xl: "8rem" }}
                  >
                    <Text fontSize={{ xs: "1.2rem", md: "1.6rem" }}>
                      {button?.name ? button?.name : " Help mij"}
                    </Text>
                  </Button>
                </a>
              </Link>
            </Flex>
          </Box>
        ) : (
          <Box
            bg={bg ? bg : "white"}
            backgroundImage={image ? `url(${image})` : "unset"}
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
            pt={{ xs: "2rem", lg: "2.4rem" }}
            pb={{ xs: "1.6rem", lg: "2.4rem" }}
            px="3.6rem"
            borderRadius="0px 16px 16px 16px"
            boxShadow="0 10px 25px rgba(25, 118, 210, 0.5)"
          >
            <Flex alignItems="center" flexDirection="column">
              <Text
                mt={{ xs: "2rem", lg: "4rem" }}
                fontWeight="600"
                color={bg === "#050E29" ? "white" : "darkblue.500"}
                fontSize={{ xs: "1.6rem", lg: "3.2rem" }}
                lineHeight={{ xs: "1.9rem", lg: "2.1rem" }}
                zIndex={3}
              >
                {title}
              </Text>
              <Text
                fontWeight="300"
                color={bg === "#050E29" ? "white" : "darkblue.500"}
                fontSize={{ xs: "1.3rem", lg: "2rem" }}
                lineHeight={{ xs: "1.5rem", lg: "2rem" }}
                mt={{ xs: "0.8rem", lg: "2.2rem" }}
                textAlign="center"
                zIndex={3}
              >
                {description}
              </Text>
              <Link href={button?.url ? button?.url : "/"} passHref>
                <a>
                  <Button
                    id="help-mij"
                    zIndex={3}
                    variant="action"
                    bg="#050E29"
                    width={{ xs: "100%", lg: "15.6rem" }}
                    mt={{ xs: "3.2rem", lg: "3.2rem" }}
                    height="4rem"
                  >
                    {button?.name ? button?.name : " Help mij"}
                  </Button>
                </a>
              </Link>
            </Flex>
          </Box>
        )}
      </Box>
    </>
  );
};
