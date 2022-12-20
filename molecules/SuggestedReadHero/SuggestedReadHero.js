import React from "react";
import { Box, Text, Flex, Button, Image } from "atoms";
import { Formik, Form, Field } from "formik";
import ButtonIcon from "public/assets/icons/ButtonIcon";
import * as Yup from "yup";

const validationSchema = Yup.object({
  searchbar: Yup.string(),
});

export const SuggestedReadHero = ({ searchQuery }) => {
  return (
    <>
      <Box py={{ xs: "4rem", lg: "15rem" }}>
        {/* Triangles */}
        <Box position="absolute" top={{ xs: "-1rem", lg: "4.8rem" }} left="80%">
          <Image
            src="/images/upper-triangle.svg"
            alt="triangle"
            height={{ xs: "2.1rem", lg: "4.8rem" }}
            width={{ xs: "3.2rem", lg: "7.2rem" }}
          />
        </Box>
        <Box
          position="absolute"
          bottom={{ xs: "-1rem", lg: "-0.5rem" }}
          left={{ xs: "6%", lg: "10%" }}
          zIndex={3}
        >
          <Image
            src="/images/bottom-triangle.svg"
            alt="triangle"
            height={{ xs: "3.9rem", lg: "8.1rem" }}
            width={{ xs: "4.9rem", lg: "11.6rem" }}
          />
        </Box>

        <Formik
          initialValues={{
            searchbar: "",
          }}
          validationSchema={validationSchema}
          onSubmit={searchQuery}
        >
          {() => (
            <Form>
              <Flex
                justifyContent="center"
                flexDirection={{ xs: "column", lg: "row" }}
                px={{ xs: "2.4rem", lg: "unset" }}
              >
                <Box
                  mr="0.8rem"
                  height="4.8rem"
                  border="1px solid #E7E7E7"
                  width={{ xs: "100%", lg: "40.8rem" }}
                  bg="white"
                  borderRadius="0.4rem"
                >
                  <Box mt="1.4rem" ml="1.5rem">
                    <Field
                      type="text"
                      id="searchbar"
                      name="searchbar"
                      placeholder="Wat Zoek Je?"
                      className="newsletter-input"
                    />
                  </Box>
                </Box>
                <Button
                  id="zoeken"
                  mt={{ xs: "1.6rem", lg: "unset" }}
                  variant="primary"
                  bg="primary.500"
                  height="4.8rem"
                  width={{ xs: "100%", lg: "17.7rem" }}
                  type="submit"
                >
                  <Flex justifyContent="center">
                    <Text>Zoeken</Text>
                    <Box ml="0.6rem" mt="0.2rem">
                      <ButtonIcon />
                    </Box>
                  </Flex>
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
