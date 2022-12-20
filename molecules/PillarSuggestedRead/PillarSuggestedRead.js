import React, { useState, useMemo } from "react";
import { Box, Text, Grid, Flex } from "atoms";
import { ArticleCard } from "molecules/Cards";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

const BoxStyle = styled(Box)`
  &:hover {
    cursor: pointer;
    background: #403bcb;
    > div,
    h3 {
      color: #ffffff !important;
    }
  }
`;

const PAGE_SIZE = 12;

export const PillarSuggestedRead = ({
  apiData,
  tagblogs,
  apiData2,
  searchBlogs,
  slug,
  setSearchBlogs,
}) => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const filteredBlogs = apiData2.filter(checkTag);
  function checkTag(blog) {
    return blog.tags
      .map((item) => item.slug.toLowerCase() === slug)
      .some((value) => {
        return value === true;
      });
  }

  const filteredData = useMemo(
    () => filteredBlogs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page, filteredBlogs]
  );

  const searchResults = searchBlogs
    ? apiData2.filter((items) =>
        items.tags
          .map((value) => {
            return value?.name?.toLowerCase().includes(searchBlogs.toLowerCase());
          })
          .some((el) => el === true)
      )
    : null;

  const searchFilter = searchBlogs
    ? apiData2.filter((items) => {
        return items?.title?.toLowerCase().includes(searchBlogs.toLowerCase());
      })
    : null;

  let searchedResult = null;
  if (searchFilter === null && searchResults === null) {
    searchedResult = null;
  } else if (searchFilter === null && searchResults !== null) {
    searchedResult = searchResults;
  } else if (searchResults === null && searchFilter !== null) {
    searchedResult = searchFilter;
  } else {
    searchedResult = searchResults?.concat(searchFilter);
  }

  const filteredSearch = useMemo(
    () => searchedResult?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page, searchedResult]
  );

  const onChange = (value) => {
    
  };

  let arrayLength = searchBlogs
    ? Math.ceil(searchedResult.length / PAGE_SIZE)
    : Math.ceil(filteredBlogs.length / PAGE_SIZE);
  let array = [];
  for (let i = 0; i < arrayLength; i++) {
    array[i] = i + 1;
  }

  return (
    <>
      <Box pt="4rem" pb="8rem" bg="gray.500">
        <Box px={{ xs: "2.4rem", lg: "10rem" }}>
          <Flex flexWrap="wrap">
            {apiData?.map((items) => {
              return (
                <Link href={`/${items.slug}`} passHref key={items.id}>
                  <a>
                    <BoxStyle
                      bg={items.slug === tagblogs.slug ? "#403bcb" : "secondary.100"}
                      px={{ xs: "0.8rem", lg: "1.2rem" }}
                      py={{ xs: "0.8rem", lg: "0.5rem" }}
                      borderRadius="0.5rem"
                      mx={{ xs: "0.4rem", lg: "0.5rem" }}
                      mb={{ xs: "0.8rem", lg: "1.6rem" }}
                      cursor="pointer"
                      onClick={() => {
                        setSearchBlogs(null);
                        searchedResult = null;
                        setPage(1);
                      }}
                    >
                      <Text
                        as="h3"
                        my="0rem"
                        fontWeight="500"
                        fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                        lineHeight={{ xs: "1.3rem", lg: "1.9rem" }}
                        color={items.slug === tagblogs.slug ? "white" : "darkblue.500"}
                      >
                        {`#${items?.name}`}
                      </Text>
                    </BoxStyle>
                  </a>
                </Link>
              );
            })}
          </Flex>
          {array.length !== 0 && (
            <Box display="flex" justifyContent="flex-end">
              {" "}
              <Box cursor="pointer" onClick={() => setPage(page < 2 ? 1 : page - 1)}>
                <Image src="/images/prev.svg" width="56px" height="56px" />
              </Box>
              <Box
                ml="1.5rem"
                cursor="pointer"
                onClick={() =>
                  setPage(
                    Math.ceil(
                      searchBlogs
                        ? searchedResult.length / PAGE_SIZE
                        : filteredBlogs.length / PAGE_SIZE
                    ) === page
                      ? Math.ceil(
                          searchBlogs
                            ? searchedResult.length / PAGE_SIZE
                            : filteredBlogs.length / PAGE_SIZE
                        )
                      : page + 1
                  )
                }
              >
                <Image src="/images/next.svg" width="56px" height="56px" />
              </Box>
            </Box>
          )}
          <Grid
            gridTemplateColumns={{ xs: "1fr", lg: "repeat(3,1fr)" }}
            gridGap={{ xs: "1.6rem", lg: "3.2rem" }}
            mt={{ xs: "2rem", lg: "4rem" }}
          >
            {!searchBlogs
              ? filteredData?.map((items) => {
                  return (
                    <ArticleCard
                      key={items.id}
                      src={items?.image?.url}
                      alt={items?.image?.alternativeText}
                      title={items?.title}
                      tags={items?.tags}
                      body={
                        items?.description
                          ? `${items?.description?.replace(/<[^>]+>|&nbsp;/g, "").slice(0, 100)}...`
                          : ""
                      }
                      url={`/${items.slug}`}
                    />
                  );
                })
              : filteredSearch.map((items) => {
                  return (
                    <ArticleCard
                      key={items?.id}
                      src={items?.image?.url}
                      alt={items?.image?.alternativeText}
                      title={items?.title}
                      tags={items?.tags}
                      body={
                        items?.description
                          ? `${items?.description?.replace(/<[^>]+>|&nbsp;/g, "").slice(0, 100)}...`
                          : ""
                      }
                      url={`/${items.slug}`}
                    />
                  );
                })}
          </Grid>
          {searchBlogs && searchedResult.length === 0 && (
            <Text
              fontWeight="600"
              color="darkblue.500"
              textAlign={{ xs: "center", lg: "center" }}
              fontSize={{ xs: "1.6rem", lg: "4rem" }}
              lineHeight={{ xs: "1.9rem", lg: "4.8rem" }}
            >
              No Results to Show
            </Text>
          )}
          {array.length !== 0 && (
            <Box display="flex" justifyContent="center" mt="3rem">
              <Box gridAutoColumn="25%" display="grid" gridGap="10px" gridAutoFlow="column">
                <Box cursor="pointer" onClick={() => setPage(page < 2 ? 1 : page - 1)}>
                  <Image src="/images/prev.svg" width="56px" height="56px" />
                </Box>

                {array.map((el, index) => {
                  if (el < array.length) {
                    return (
                      <Box
                        mt="2px"
                        borderRadius="4px"
                        backgroundColor={el === page ? "#403BCB" : "white"}
                        height="56px"
                        width="56px"
                        key={index}
                        fontWeight="400"
                        lineHeight="19.6px"
                        fontSize="16px"
                        onClick={() => setPage(el)}
                        cursor="pointer"
                      >
                        <Text
                          fontWeight="400"
                          lineHeight="19.6px"
                          fontSize="16px"
                          display="block"
                          textAlign="center"
                          transform="translateY(80%)"
                          color={el === page ? "white" : "#050E29"}
                        >
                          {el}
                        </Text>
                      </Box>
                    );
                  } else if (el === array.length) {
                    return (
                      <Box
                        mt="2px"
                        borderRadius="4px"
                        backgroundColor={el === page ? "#403BCB" : "white"}
                        height="56px"
                        width="56px"
                        key={index}
                        fontWeight="400"
                        lineHeight="19.6px"
                        fontSize="16px"
                        onClick={() => setPage(el)}
                        cursor="pointer"
                      >
                        <Text
                          fontWeight="400"
                          lineHeight="19.6px"
                          fontSize="16px"
                          display="block"
                          textAlign="center"
                          transform="translateY(80%)"
                          color={el === page ? "white" : "#050E29"}
                        >
                          {array.length}
                        </Text>
                      </Box>
                    );
                  }
                })}
                <Box
                  onClick={() => {
                    setPage(
                      Math.ceil(
                        searchBlogs
                          ? searchedResult.length / PAGE_SIZE
                          : filteredBlogs.length / PAGE_SIZE
                      ) === page
                        ? Math.ceil(
                            searchBlogs
                              ? searchedResult.length / PAGE_SIZE
                              : filteredBlogs.length / PAGE_SIZE
                          )
                        : page + 1
                    ),
                      onChange;
                  }}
                  cursor="pointer"
                >
                  <Image src="/images/next.svg" width="56px" height="56px" />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
