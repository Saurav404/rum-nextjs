import React, { useState } from "react";
import Image from "next/image";
import { Box, Grid } from "atoms";
import { useRouter } from "next/router";

export const ShareElement = ({ setDisplay }) => {
  const [copied, setCopied] = useState();
  const router = useRouter();
  let hostname;
  if (typeof window !== "undefined") {
    hostname = window.location.hostname;
  } else hostname = "";

  const copyText = () => {
    navigator.clipboard.writeText(`https://${hostname}/${router.query.tags}`);
    setCopied(1);
    setTimeout(() => {
      setCopied(0);
    }, 3000);
  };

  const imgData = [
    {
      id: "0",
      src: "/images/twitter-logo.svg",
      url: `http://twitter.com/share?text=${router.query.tags}&url=https://${hostname}/${router.query.tags}&hashtags=boekhouder`,
    },
    {
      id: "1",
      src: "/images/linkedin-logo.svg",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=https://${hostname}/${router.query.tags}`,
    },
    {
      id: "2",
      src: "/images/facebook-logo.svg",
      url: `https://www.facebook.com/sharer/sharer.php?u=https://${hostname}/${router.query.tags}`,
    },
    {
      id: "3",
      src: "/images/link-logo.svg",
      url: "http://localhost:3000/checklist-pages",
    },
  ];

  return (
    <>
      <Box
        position="fixed"
        top="0rem"
        height="100vh"
        width={{ xs: "100%", xl: "144rem" }}
        zIndex="5"
        bg="blue.400"
        py="10rem"
        overFlow="hidden"
      >
        <Grid
          top={{ xs: "55%", lg: "unset" }}
          justifyContent="right"
          mx={{ xs: "2.4rem", lg: "11.2rem", xl: "11.2rem" }}
        >
          <Box order={{ xs: "1", lg: "0" }}>
            <Grid
              width="6.4rem"
              height="6.4rem"
              borderRadius="10rem"
              bg="white"
              mt="1.2rem"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={() => setDisplay(false)}
            >
              <Box width="4rem" height="4rem">
                <Image src="/images/share-cross.svg" alt="cross" layout="fill" />
              </Box>
            </Grid>
          </Box>
          {imgData?.slice(0, 3)?.map((items) => {
            return (
              <a href={items?.url} passHref target="_blank" rel="noreferrer">
                <Grid
                  width="6.4rem"
                  height="6.4rem"
                  borderRadius="10rem"
                  bg="white"
                  mt="1.2rem"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box width="4rem" height="4rem">
                    <Image src={items?.src} alt="icon" layout="fill" />
                  </Box>
                </Grid>
              </a>
            );
          })}
          <Grid
            width="6.4rem"
            height="6.4rem"
            borderRadius="10rem"
            bg={copied === 1 ? "blue.100" : "white"}
            mt="1.2rem"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={copyText}
          >
            <Box width="4rem" height="4rem">
              <Image src={imgData?.[3]?.src} alt="icon" layout="fill" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
