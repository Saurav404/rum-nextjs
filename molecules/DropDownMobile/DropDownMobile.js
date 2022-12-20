import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import Link from "next/link";
import Image from "next/image";

export const DropDownMobile = ({ data, setMobileMenu, cta }) => {
  return (
    <>
      <Box width="100%" bg="gray.500" mt="0.8rem" py="1.6rem" px={{ xs: "3.2rem", lg: "11rem" }}>
        <Grid gridTemplateColumns="1fr" gridRowGap="3.2rem">
          {data?.map((item) => {
            return (
              <Box
                key={item.id}
                onClick={item.child_links === null ? setMobileMenu(false) : setMobileMenu(true)}
              >
                <Text fontSize="1.6rem" fontWeight="600" color="darkblue.500" lineHeight="1.9rem">
                  {item.parent_link_name}
                </Text>
                <Grid gridTemplateColumns="1fr" gridRowGap="1rem" mt="0.8rem">
                  {item?.child_links?.map((value) => {
                    return (
                      <Link href={value.url === null ? "#" : value.url} passHref key={value.id}>
                        <a>
                          <Text
                            fontSize="1.5rem"
                            onClick={() => setMobileMenu(false)}
                            fontWeight="400"
                            color="darkblue.500"
                            lineHeight="2.4rem"
                          >
                            {value.name}
                          </Text>
                        </a>
                      </Link>
                    );
                  })}
                </Grid>
              </Box>
            );
          })}

          {cta?.title && (
            <Box>
              <Text fontSize="1.6rem" fontWeight="600" color="darkblue.500" lineHeight="1.9rem">
                {cta?.title}
              </Text>
              <Text
                fontSize="1.5rem"
                fontWeight="400"
                color="darkblue.500"
                lineHeight="2.4rem"
                mt="0.8rem"
              >
                {cta?.description}
              </Text>
              <Link href={cta?.learn_more_cta?.url ? cta?.learn_more_cta?.url : "/"}>
                <a>
                  <Flex mt="1.4rem" alignItems="center" cursor="pointer">
                    <Text
                      fontWeight="600"
                      fontSize="1.4rem"
                      color="primary.500"
                      lineHeight="1.6rem"
                    >
                      {cta?.learn_more_cta?.name}
                    </Text>
                    <Box ml="1rem" width="1.8rem" height="1.2rem">
                      <Image
                        src="/images/learn-more.svg"
                        alt="learn-more"
                        layout="fill"
                      />
                    </Box>
                  </Flex>
                </a>
              </Link>
            </Box>
          )}
        </Grid>
      </Box>
    </>
  );
};
