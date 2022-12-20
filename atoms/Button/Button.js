import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import PropTypes from "prop-types";

import Box from "../Box";
import Flex from "../Flex";
import Text from "../Text";
import Loader from "../Loader";

const ButtonBase = styled(Box)`
  position: relative;
  cursor: pointer;
  outline: none;
  display: grid;
  align-items: center;
  font-family: Inter;

  ${variant({
    variants: {
      primary: {
        color: "white",
        bg: "primary.500",
        px: "10px",
        fontFamily: "primary",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
        "&:active, &:hover": {
          bg: "primary.600",
        },

        "&:focus": {
          bg: "primary.700",
          outline: "none",
        },
      },
      purple: {
        color: "red",
        bg: "blue.300",
        px: "10px",
        fontFamily: "primary",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
        "&:active, &:hover": {
          bg: "primary.600",
        },

        "&:focus": {
          bg: "primary.700",
          outline: "none",
        },
      },
      cyan: {
        color: "darkblue.500",
        bg: "blue.100",
        px: "10px",
        fontFamily: "primary",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
        "&:active, &:hover": {
          bg: "primary.600",
          color: "white",
        },

        "&:focus": {
          bg: "primary.700",
          outline: "none",
        },
      },

      primarywhite: {
        color: "primary.500",
        bg: "white",
        px: "10px",
        fontFamily: "primary",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        height: "4.8rem",
        fontWeight: 500,
        "&:active, &:hover": {
          svg: {
            fill: "white",
            transition: "all .3s",
          },
          bg: "primary.600",
          color: "white",
        },
        "&:focus": {
          bg: "primary.700",
          color: "white",
          outline: "none",
          svg: {
            fill: "white",
            transition: "all .3s",
          },
        },
      },
      secondary: {
        color: "primary.500",
        bg: "white",
        fontFamily: "primary",
        fontSize: "16px",
        border: "1px solid",
        borderColor: "primary.500",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",

        fontWeight: 500,
        "&:active, &:hover": {
          bg: "primary.600",
          border: "1px solid",
          borderColor: "primary.500",
          color: "white",
          svg: {
            fill: "white",
          },
        },

        "&:focus": {
          outline: "none",
          bg: "primary.700",
          border: "1px solid",
          borderColor: "primary.500",
          color: "white",
        },
      },
      landing: {
        color: "blue.500",
        fontFamily: "primary",
        bg: "transparent",
        border: "1px solid",
        fontSize: "16px",
        borderRadius: "4px",
        px: "10px",
        borderColor: "blue.500",
        cursor: "pointer",
        transition: "all .3s",
        "&:active, :hover": {
          bg: "blue.500",
          color: "white",
          boxShadow: "0 10px 25px rgba(25, 118, 210, 0.5)",
        },
        "&:focus": {
          outline: "none",
        },
      },
      action: {
        color: "white",
        bg: "darkblue.500",
        px: "10px",
        fontFamily: "primary",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
        "&:active, &:hover": {
          bg: "primary.600",
        },
      },
    },
    exact2: {
      color: "#403BCB",
      bg: "white",
      px: "10px",
      fontFamily: "primary",
      fontSize: "16px",
      border: "1px solid #403BCB",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all .3s",
      height: "4.8rem",
      fontWeight: 500,
      "&:active, &:hover": {
        bg: "white",
      },

      "&:focus": {
        bg: "none",
        outline: "none",
      },
    },
    default: {
      color: "primary.500",
      bg: "white",
      fontFamily: "primary",
      fontSize: "16px",
      border: "1px solid",
      borderColor: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all .3s",
      height: "4rem",
      fontWeight: 500,
      "&:active, &:hover": {
        bg: "transparent",
        border: "1px solid",
        borderColor: "white",
        color: "white",
      },

      "&:focus": {
        outline: "none",
      },
    },
    exact: {
      color: "white",
      bg: "#403BCB",
      px: "10px",
      fontFamily: "primary",
      fontSize: "16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all .3s",
      height: "4.8rem",
      fontWeight: 500,
      "&:active, &:hover": {
        bg: "#403BCB",
      },

      "&:focus": {
        bg: "none",
        outline: "none",
      },
    },

    landing: {
      color: "blue.500",
      fontFamily: "primary",
      bg: "transparent",
      border: "1px solid",
      fontSize: "16px",
      borderRadius: "4px",
      px: "10px",
      borderColor: "blue.500",
      cursor: "pointer",
      transition: "all .3s",
      "&:active, :hover": {
        bg: "blue.500",
        color: "white",
        boxShadow: "0 10px 25px rgba(25, 118, 210, 0.5)",
      },
      "&:focus": {
        outline: "none",
      },
    },
  })}
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const Button = ({
  disabled,
  loading,
  children,
  variant: v = "primary",
  onClick,
  showAsyncLoad,
  fontWeight,
  classes,
  label,
  fontSize,
  ...rest
}) => {
  const [asyncLoading, setLoading] = useState(false);
  const onClickHandler = useCallback(
    async (...arg) => {
      setLoading(true);
      try {
        await onClick?.(arg);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    },
    [onClick]
  );

  return (
    <ButtonBase
      variant={v}
      as="button"
      color="white"
      {...rest}
      onClick={onClickHandler}
      disabled={disabled || loading || (showAsyncLoad && asyncLoading)}
      overflow="hidden"
      className={classes}
    >
      {(loading || (showAsyncLoad && asyncLoading)) && (
        <Flex
          left={0}
          right={0}
          position="absolute"
          justifyContent="center"
          alignItems="center"
          fontSize={2}
          height="15px"
          width="15px"
          mx="auto"
        >
          <Loader loading />
        </Flex>
      )}
      {label ? (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          id={label}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      ) : (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      )}
    </ButtonBase>
  );
};

Button.defaultProps = {
  as: "button",
  width: "100%",
  fontSize: "1.6rem",
};

Button.propTypes = {
  // label: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
