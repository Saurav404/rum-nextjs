import React from "react";
import { Box, Text, Flex } from "atoms";
import Image from "next/image";
import Link from "next/link";

export const BusinessLogoCard = ({ logo, title, url, link_icon }) => {
  return (
    <>
      <Flex alignItems="center" my="1.6rem">
        {logo && (
          <Box width="6rem">
            <Image src={logo?.url} alt="alt" height={logo?.height} width={logo?.width} />
          </Box>
        )}
        <Flex>
          <Link href={url ? url : "/"} passHref>
            <a>
              <Text
                ml="1.6rem"
                fontSize={{ xs: "2rem", lg: "3.2rem" }}
                fontWeight="600"
                color="#403BCB"
                lineHeight="3.8rem"
              >
                {title}
              </Text>
            </a>
          </Link>
          <Box ml="1rem">
            <Link href={url ? url : "/"} passHref>
              <a>
                {link_icon && (
                  <Image
                    src={link_icon?.url}
                    alt="alt"
                    height={link_icon?.height}
                    width={link_icon?.width}
                  />
                )}
              </a>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
