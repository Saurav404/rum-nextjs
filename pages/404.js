import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Box } from "../atoms/Box/Box";

export default function FourOhFour() {
  return (
    <Box mx={{ xs: "3rem", md: "unset" }}>
      <Box
        p={{ xs: "2rem", md: "1rem 1.5rem" }}
        borderRadius=".6rem"
        height="auto"
        bg="white"
        boxShadow="0 10px 30px rgba(16,30,54,.25)"
      >
        <Box
          textAlign="center"
          width={{ xs: "32rem", md: "60rem" }}
          height={{ xs: "30rem", md: "50rem" }}
          pt={{ xs: "5rem", md: "10rem" }}
          m="auto"
        >
          <Player autoplay loop src="https://assets1.lottiefiles.com/packages/lf20_aaesnvcw.json">
            <Controls visible={false} />
          </Player>
        </Box>
      </Box>
    </Box>
  );
}
