import React from "react";
import Link from "next/link";

import { Box, Flex, Grid, Text } from "atoms";
import MemoArrowRight from "public/assets/icons/ArrowRight";
import Image from "next/image";

export const MenuDropdownSection = ({ data, setMenu, cta }) => {
  return (
    <Box bg="white" pt="3rem">
      <Grid
        gridTemplateColumns={{ lg: "repeat(4, 1fr)" }}
        px={{ lg: "11rem" }}
        py="3rem"
        boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
        borderTop="1px solid"
        borderColor="gray.500"
      >
        {data?.map((page) => {
          return (
            <Box key={page.id}>
              <Link href={page?.parent_link ? page?.parent_link : "/"}>
                <a>
                  <Text fontWeight="bolder" color="black" py="1.5rem">
                    {page?.parent_link_name}
                  </Text>
                </a>
              </Link>

              {page?.child_links?.map((item) => {
                return (
                  <Link href={item.url === null ? "#" : item.url} key={item.id} passHref>
                    <a>
                      <Text
                        fontWeight="300"
                        color="black"
                        cursor="pointer"
                        py="1rem"
                        onClick={() => setMenu("")}
                      >
                        {item?.name}
                      </Text>
                    </a>
                  </Link>
                );
              })}
            </Box>
          );
        })}
        {cta?.title && (
          <Box justifySelf="end">
            <Box position="absolute" left="-5rem">
              <Box height="10rem" width="10rem" borderRadius="10rem" bg="secondary.100" ml="2rem" />
              {/* target arrow */}
              <Box position="absolute" top="3rem" left={0}>
                <Image src="/images/target-arrow.svg" alt="target" height={68} width={56} />
              </Box>
            </Box>
            <Text fontWeight="bolder" color="black" py="1.5rem">
              {cta?.title}
            </Text>
            <Text fontWeight="300" color="black">
              {cta?.description}
            </Text>
            <Link href={cta?.learn_more_cta?.url ? cta?.learn_more_cta?.url : "/"} paassHref>
              <a>
                <Flex alignItems="center" mt="5rem" cursor="pointer" width="fit-content">
                  <Text fontWeight="700" color="primary.500" pr="1rem">
                    {cta?.learn_more_cta?.name}
                  </Text>
                  <MemoArrowRight fill="#204ECF" height="1.2rem" width="1.8rem" />
                </Flex>
              </a>
            </Link>
          </Box>
        )}
      </Grid>
    </Box>
  );
};
