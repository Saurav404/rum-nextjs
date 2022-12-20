import React, { useState } from "react";
import { Box, Text, Flex, Grid } from "atoms";
import Image from "next/image";
import MemoDownArrow from "public/assets/icons/DownArrow";

const data = [
  {
    id: "1",
    title: "Geselecteerde diensten ",
    body: "Volledige boekhouding, Boekhouding overig, Belasting overig",
    show: "Meer",
    isVisible: true,
  },
  {
    id: "2",
    title: "Dienst Type ",
    body: "Volledige boekhouding, Boekhouding overig, Belasting overig",
    show: "Meer",
    isVisible: false,
  },
  {
    id: "3",
    title: "Legal business form",
    body: "Volledige boekhouding, Boekhouding overig, Belasting overig",
    show: "Meer",
    isVisible: false,
  },
  {
    id: "4",
    title: "De jaaromzet van het bedrijf",
    body: "Volledige boekhouding, Boekhouding overig, Belasting overig",
    show: "Meer",
    isVisible: false,
  },
  {
    id: "5",
    title: "Administratie verstrekken",
    body: "Volledige boekhouding, Boekhouding overig, Belasting overig",
    show: "Meer",
    isVisible: false,
  },
  {
    id: "6",
    title: "Contact information",
    body: "Volledige boekhouding, Boekhouding overig, Belasting overig",
    show: "Meer",
    isVisible: false,
  },
];

export const FormSummaryCard = ({ apidata, values, selected, setSelected }) => {
  const [menu, setMenu] = useState(false);
  const [showMore, setShowMore] = useState({});
  return (
    <>
      <Box
        bg="white"
        borderRadius="0px 16px 16px 16px"
        border="1px solid #F0F0F0"
        py="2.4rem"
        width="38.4rem"
      >
        <Flex alignItems="center" px="2.4rem" onClick={() => setMenu(!menu)} cursor="pointer">
          <Text fontWeight="700" fontSize="2rem" lineHeight="2.4rem">
            Overzicht
          </Text>
          <Box ml="auto">
            <MemoDownArrow
              fill="#050E29"
              width="1.6rem"
              height=".8rem"
              className={menu ? "arrow-rotate" : "bottom-arrow"}
            />
          </Box>
        </Flex>
        {menu && (
          <Box>
            <Box my="2rem" width="100%" height={1} bg="gray.800" />
            <Box px="2.4rem">
              <Grid gridTemplateColumns="1fr">
                {apidata?.master_questions?.map((item, index) => {
                  return (
                    <Grid gridTemplateColumns="auto 1fr auto" gridColumnGap="1.1rem" key={item.id}>
                      <Flex
                        alignItems="center"
                        flexDirection="column"
                        mt={index <= selected ? "2rem" : "unset"}
                      >
                        <Flex
                          minHeight="1.8rem"
                          width="1.8rem"
                          bg={index <= selected ? "rgba(64, 59, 203, 0.5)" : "white"}
                          border={index <= selected ? "none" : "1px solid #535765"}
                          borderRadius="50%"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Flex
                            height="1.2rem"
                            width="1.2rem"
                            bg={index <= selected ? "primary.500" : "white"}
                            borderRadius="50%"
                          />
                        </Flex>
                        <Box
                          display={index === data.length - 1 ? "none" : "block"}
                          my={item.isVisible ? "1.1rem" : "0.7rem"}
                          // height={item.isVisible ? "4rem" : "2.4rem"}
                          height="100%"
                          width="1px"
                          bg="gray.800"
                        />
                      </Flex>
                      <Box>
                        <Text
                          fontWeight="300"
                          fontSize="1.4rem"
                          color="secondary.1000"
                          lineHeight="1.6rem"
                        >
                          {item.question_summary_title}
                        </Text>
                        {/* {index <= selected && ( */}
                        <Box>
                          <Flex flexWrap="wrap" width="fit-content" fontWeight="600">
                            <Text
                              mt="0.5rem"
                              fontSize="1.4rem"
                              color="darkblue.500"
                              lineHeight="1.6rem"
                            >
                              {Array.isArray(values[item.question_title])
                                ? values[item.question_title]
                                    ?.slice(
                                      0,
                                      showMore[item.question_title]
                                        ? values[item.question_title].length
                                        : 3
                                    )
                                    ?.join(", ")
                                : values[item.question_title]}
                            </Text>
                          </Flex>
                          {Array.isArray(values[item.question_title]) && (
                            <Text
                              mt="0.5rem"
                              fontWeight="600"
                              fontSize="1.4rem"
                              color="primary.500"
                              lineHeight="1.6rem"
                              cursor="pointer"
                              mb="1rem"
                              onClick={() =>
                                setShowMore({
                                  ...showMore,
                                  [item.question_title]: !showMore[item.question_title],
                                })
                              }
                            >
                              {showMore[item.question_title] ? "Show less" : "Show more"}
                            </Text>
                          )}
                        </Box>
                        {/* )} */}
                      </Box>
                      {index <= selected && (
                        <Box cursor="pointer" onClick={() => setSelected(index)}>
                          <Image src="/images/summaryicon.svg" height={20} width={20} alt="icon" />
                        </Box>
                      )}
                    </Grid>
                  );
                })}

                <Grid gridTemplateColumns="auto 1fr auto" gridColumnGap="1.1rem">
                  <Grid justifyItems="center" gridTemplateRows="auto 1fr">
                    <Flex
                      height="1.8rem"
                      width="1.8rem"
                      bg={
                        selected === apidata.master_questions.length
                          ? "rgba(64, 59, 203, 0.5)"
                          : "white"
                      }
                      border={
                        selected === apidata.master_questions.length ? "none" : "1px solid #535765"
                      }
                      borderRadius="50%"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Flex
                        height="1.2rem"
                        width="1.2rem"
                        bg={selected === apidata.master_questions.length ? "primary.500" : "white"}
                        borderRadius="50%"
                      />
                    </Flex>
                  </Grid>
                  <Box>
                    <Text
                      fontWeight="300"
                      fontSize="1.4rem"
                      color="secondary.1000"
                      lineHeight="1.6rem"
                    >
                      Contact information
                    </Text>
                  </Box>
                  {selected === apidata.master_questions.length && (
                    <Box
                      cursor="pointer"
                      onClick={() => setSelected(apidata.master_questions.length)}
                    >
                      <Image src="/images/summaryicon.svg" height={20} width={20} alt="icon" />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};
