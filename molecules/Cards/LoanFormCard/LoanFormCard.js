import React, { useState } from "react";
import { Box, Flex, Text, Grid } from "atoms";
import Cookies from "js-cookie";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import theme from "styles";
import { useEffect } from "react";

const BoxStyle = styled(Box)`
  &:hover {
    border: 1px solid #050e29;
    h3 {
      color: #403bcb;
      text-decoration: underline;
      text-underline-offset: 0.3rem;
      text-decoration-thickness: 1px;
    }
  }
`;

export const LoanFormCard = ({ title, description, checked, setChecked, id, url, slug }) => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const d = Cookies.get(`status_${url.slice(1)}`)
        ? JSON.parse(Cookies.get(`status_${url.slice(1)}`))
        : "";
      if (d) {
        setStatus(d);
      }
    }
  }, [url]);
  return (
    <>
      <BoxStyle
        bg="white"
        borderRadius="0rem 1.6rem 1.6rem 1.6rem"
        border="1px solid transparent"
        p="2.4rem 2.4rem 3.2rem 3.2rem"
      >
        <Grid gridTemplateColumns="auto 2.4rem">
          <Link href={`${url}?parent=${slug}`} passHref>
            <a>
              <Box>
                <Box width="fit-content">
                  <Text
                    as="h3"
                    my="0rem"
                    fontSize={{ xs: "1.6rem", lg: "2rem" }}
                    fontWeight="600"
                    lineHeight={{ xs: "1.8rem", lg: "2.6rem" }}
                    color="darkblue.500"
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize="1.4rem"
                    mt="0.8rem"
                    fontWeight="300"
                    lineHeight="1.8rem"
                    color="darkblue.500"
                  >
                    {description}
                  </Text>
                </Box>
              </Box>
            </a>
          </Link>

          <Flex
            height="2.4rem"
            width="2.4rem"
            bg={status === "complete" ? "blue.300" : "white"}
            border="1px solid"
            borderColor="blue.300"
            borderRadius="0.4rem"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            // onClick={() => {
            //   if (checked.find((a) => a === id)) {
            //     const ind = checked.filter((a) => a !== id);
            //     setChecked(ind);
            //     Cookies.set(`${slug}`, JSON.stringify(ind), { expires: 365 });
            //   } else {
            //     setChecked([...checked, id]);
            //     Cookies.set(`${slug}`, JSON.stringify([...checked, id]), {
            //       expires: 365,
            //     });
            //   }
            // }}
          >
            <Box>
              <Image src="/images/checked.svg" height={13} width={13} alt="checked" />
            </Box>
          </Flex>
        </Grid>
      </BoxStyle>
    </>
  );
};
