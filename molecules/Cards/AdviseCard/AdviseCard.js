import React from "react";
import Image from "next/image";

import { Box, Text } from "atoms";
import styled from "styled-components";
import Link from "next/link";

const BoxStyle = styled(Box)`
  .advise-card:hover {
    background-color: #edf5fe;
    h3 {
      color: #204ecf !important;
    }
    cursor: pointer;
  }
`; // add hover bg/text

export const AdviseCard = ({ src, alt, title, content, url }) => {
  return (
    <BoxStyle>
      <Box
        className="advise-card"
        pt="2rem"
        height="25.1rem"
        width="28rem"
        borderRadius="0rem 2.4rem 2.4rem 2.4rem"
        bg="gray.500"
        pl="1.7rem"
        pb="3rem"
      >
        <Box>
          <Image src={src} alt={alt} height={72} width={72} />
        </Box>
        <Link href={url ? url : "/"} passHref>
          <a>
            <Text
              as="h3"
              pt="1rem"
              fontSize="1.8rem"
              lineHeight="2.2rem"
              color="darkblue.500"
              fontWeight="700"
            >
              {title}
            </Text>
          </a>
        </Link>

        <Text pt="1rem" fontWeight="300" lineHeight="2rem" fontSize="1.5rem">
          {content}
        </Text>
      </Box>
    </BoxStyle>
  );
};
