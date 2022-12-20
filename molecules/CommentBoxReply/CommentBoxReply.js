import React, { useState } from "react";
import { Box, Text, Flex, Grid, Button } from "atoms";
import LikeIcon from "public/assets/icons/LikeIcon";
import CommentIcon from "public/assets/icons/CommentIcon";
import MemoMore from "public/assets/icons/More";
import { format } from "date-fns";
import nl from "date-fns/locale/nl";

export const CommentBoxReply = ({ name, time, msg, data, blogs }) => {
  return (
    <Box>
      <Box pt="2rem" pb="0.7rem" borderBottom="0.2rem solid" borderColor="gray.500">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="1.8rem" lineHeight="2.7rem" color="darkblue.500">
            {name}
          </Text>
        </Flex>

        <Text pt="2px" pb="1rem" color="gray.300" fontSize="1.5rem" lineHeight="2rem">
          {format(new Date(time), "eeee, dd MMMM yyyy", { locale: nl })}
        </Text>
        <Text py=".8rem" fontSize="1.5rem" lineHeight="2rem" color="darkblue.500">
          {msg}
        </Text>
      </Box>
    </Box>
  );
};
