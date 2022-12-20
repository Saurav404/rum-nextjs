import React, { useState } from "react";
import { Box, Text, Flex, Grid } from "atoms";
import styled from "styled-components";
import { theme } from "styles";

const BoxStyle = styled(Box)`
  &:hover {
    cursor: pointer;
    background: #403bcb;
    > div {
      color: #ffffff !important;
    }
  }
`;

export const PriceTable = ({ apidata }) => {
  const [selected, setSelected] = useState([
    `${apidata?.filters?.[0]?.filters?.[0]?.name}`,
    `${apidata?.filters?.[1]?.filters?.[0]?.name}`,
  ]);

  return (
    <>
      <Box my="2.4rem">
        <Grid
          gridTemplateColumns={{ xs: "1fr", lg: "repeat(2,1fr)" }}
          gridColumnGap="10rem"
          gridRowGap="1.6rem"
        >
          {apidata?.filters?.map((val, index) => (
            <Box key={index}>
              <Text
                fontWeight="600"
                fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
                color="darkblue.500"
                lineHeight={{ xs: "1.9rem", lg: "2.1rem" }}
              >
                {val?.title}
              </Text>
              <Flex mt="1.6rem" flexWrap="wrap">
                {val?.filters?.map((value) => {
                  return (
                    <BoxStyle
                      key={value.id}
                      mr="0.8rem"
                      p="0.8rem 0.9rem"
                      border="1px solid"
                      borderColor={theme.colors.gray[800]}
                      borderRadius="4px"
                      bg={selected[index] === value.name ? "blue.300" : "white"}
                      onClick={() => {
                        setSelected((prev) => {
                          const updated = [...prev];
                          updated.splice(
                            index,
                            1,
                            selected[index] === value.name ? "" : value.name
                          );
                          return updated;
                        });
                      }}
                    >
                      <Text
                        fontWeight="400"
                        fontSize="1.5rem"
                        color={selected[index] === value.name ? "white" : "darkblue.500"}
                        lineHeight="2rem"
                      >
                        {value.name}
                      </Text>
                    </BoxStyle>
                  );
                })}
              </Flex>
            </Box>
          ))}
        </Grid>
        <Box
          mt="2.4rem"
          borderRadius="4px"
          p={{ xs: "1.6rem", lg: "2.4rem" }}
          border="1px solid "
          borderColor={theme.colors.gray[800]}
          width={{ xs: "86vw", md: "100%" }}
        >
          <Grid
            maxWidth={{ xs: "100vw", md: "unset" }}
            overflowX={{ xs: "auto", md: "unset" }}
            className="hide-scrollbar"
            gridTemplateColumns={{
              xs: `repeat(${apidata.columns.length},1fr)`,
              lg: `repeat(${apidata.columns.length},1fr)`,
            }}
            gridColumnGap={{ xs: "0.5rem", lg: "6rem" }}
          >
            {apidata?.columns?.map((items) => {
              return (
                <Text
                  key={items.id}
                  fontWeight="600"
                  fontSize={{ xs: "1.2rem", lg: "1.8rem" }}
                  color="gray.300"
                  lineHeight={{ xs: "1.4rem", lg: "2.1rem" }}
                  //textAlign={index !== 0 ? "right" : "left"}
                >
                  {items?.name}
                </Text>
              );
            })}

            {apidata?.table
              ?.filter((table) =>
                selected.filter(Boolean).length > 0
                  ? selected.filter(Boolean).every((items) =>
                      table.row_values.some((value) => {
                        return value.row_values === items;
                      })
                    )
                  : true
              )
              ?.flatMap((item) => item.row_values)

              .map((item) => {
                return (
                  <Flex key={item.id} my="2rem">
                    <Text
                      fontWeight="300"
                      // style={{ wordBreak: "break-all" }}
                      fontSize={{ xs: "1.3rem", lg: "1.8rem" }}
                      color={item?.key === "Rechtsvorm" ? "blue.300" : "darkblue.500"}
                      lineHeight={{ xs: "1.5rem", lg: "2.7rem" }}
                    >
                      {item.row_values}
                    </Text>
                  </Flex>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
