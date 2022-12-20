import React, { useState } from "react";
import { Box, Grid } from "atoms";
import MemoShare from "public/assets/icons/Share";
import MemoShareClose from "public/assets/icons/ShareClose";
import Image from "next/image";
import { useRouter } from "next/router";

export const ShareComponent = () => {
  const [display, setDisplay] = useState(false);
  const [copied, setCopied] = useState();
  const router = useRouter();
  let hostname;
  if (typeof window !== "undefined") {
    hostname = window.location.hostname;
  } else hostname = "";

  const copyText = () => {
    navigator.clipboard.writeText(`https://${hostname}${router.asPath ? router.asPath : ""}`);
    setCopied(1);
    setTimeout(() => {
      setCopied(0);
    }, 3000);
  };

  const imgData = [
    {
      id: "0",
      src: "/images/whatsapp.svg",
      url: `https://web.whatsapp.com://send?text=https://${hostname}${
        router.asPath ? router.asPath : ""
      }`,
    },
    {
      id: "1",
      src: "/images/mailto.svg",
      url: `mailto?subject=${router.asPath ? router.asPath : ""}&body=https://${hostname}${
        router.asPath ? router.asPath : ""
      }`,
    },
    {
      id: "2",
      src: "/images/twitter-logo.svg",
      url: `http://twitter.com/share?text=${router.query.tags}&url=https://${hostname}${
        router.asPath ? router.asPath : ""
      }&hashtags=boekhouder`,
    },
    {
      id: "3",
      src: "/images/linkedin-logo.svg",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=https://${hostname}${
        router.asPath ? router.asPath : ""
      }`,
    },
    {
      id: "4",
      src: "/images/facebook-logo.svg",
      url: `https://www.facebook.com/sharer/sharer.php?u=https://${hostname}${
        router.asPath ? router.asPath : ""
      }`,
    },

    {
      id: "5",
      src: "/images/link-logo.svg",
      url: `mailto?subject=${router.asPath ? router.asPath : ""}&body=https://${hostname}${
        router.asPath ? router.asPath : ""
      }`,
    },
  ];

  return (
    <>
      <Box
        position="fixed"
        top="0rem"
        left="0rem"
        bottom="0rem"
        right="0rem"
        height={display ? "100vh" : "6.4rem"}
        width={{ xs: `${display ? "100%" : "6.4rem"}`, xl: `${display ? "144rem" : "6.4rem"}` }}
        mx={{ xl: "auto" }}
        zIndex={4}
        bg={display ? "blue.400" : "transparent"}
        py="10rem"
        overFlow="hidden"
      >
        <Box
          width="6.4rem"
          height="6.4rem"
          cursor="pointer"
          right={{ xs: "2.4rem", lg: "11rem", ml: "11.2rem", xl: "18.06%" }}
          bottom={{ xs: "1.4rem", lg: "unset" }}
          top={{ lg: "24.5%" }}
          position="fixed"
          zIndex={3}
          onClick={() => setDisplay(!display)}
          transition="all 0.3s ease-out"
          transform={display ? "rotate(360deg)" : "rotate(0deg)"}
          borderRadius="50%"
        >
          {display ? <MemoShareClose /> : <MemoShare />}
        </Box>
        {display && (
          <Grid
            top={{ lg: "34%" }}
            position={{ xs: "absolute", md: "absolute" }}
            bottom={{ xs: "12vh", lg: "unset" }}
            justifyContent="right"
            right={{ xs: "0rem" }}
            mx={{ xs: "2.4rem", lg: "11rem", xl: "11.2rem" }}
            animation="fadeInTop 0.5s ease-in-out"
          >
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
                <Image src={imgData?.[5]?.src} alt="icon" layout="fill" />
              </Box>
            </Grid>
            {imgData?.slice(0, 5)?.map((items) => {
              return (
                <a href={items?.url} passHref target="_blank" rel="noreferrer" key={items.id}>
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
          </Grid>
        )}
      </Box>
    </>
  );
};
