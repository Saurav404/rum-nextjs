import React from "react";
import { Field } from "formik";

import { Box, Flex } from "atoms";

// import MemoSearchIcon from "public/assets/icons/SearchIcon";

export const SearchInput = ({ placeholder }) => {
  return (
    <Flex alignItems="center">
      <Box position="absolute" left="2rem">
        {/* <MemoSearchIcon height="2rem" width="2rem" /> */}
      </Box>
      <Field id="search" name="search" placeholder={placeholder} className="blog-search-input" />
    </Flex>
  );
};
