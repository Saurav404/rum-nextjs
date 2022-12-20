import React from "react";
import { Box, Text, Flex, Button } from "atoms";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Enter correct email!")
    .required("Verplicht"),
});

export const EmailSubscribe = () => {
  const onSubmit = async (values) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/newsletter-subscriptions`,
        values
      );
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Box
        bg="background.50"
        height={{ xs: "24.3rem", lg: "26.4rem" }}
        width={{ xs: "100%", lg: "38.4rem" }}
        py={{ xs: "2.4rem", lg: "4rem" }}
        px={{ xs: "1.6em", lg: "2.4rem" }}
        borderRadius="0px 24px 24px 24px"
      >
        <Text fontWeight="500" color="darkblue.500" fontSize="1.6rem" lineHeight="2.4rem">
          Schrijf je in voor onze nieuwsbrief
        </Text>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Flex mt="1.6rem" flexDirection={{ xs: "column", lg: "column" }}>
                <Text
                  as="label"
                  fontWeight="400"
                  fontSize="1.4rem"
                  color="darkblue.500"
                  lineHeight="1.6rem"
                >
                  {" "}
                  Email
                </Text>
                <Box
                  height="4rem"
                  width={{ xs: "100%", lg: "100%" }}
                  border="1px solid #E7E7E7"
                  bg="white"
                  borderRadius="0.4rem"
                  mt="0.7rem"
                >
                  <Box mt="0.8rem" mx="1.6rem">
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Vul hier je email in"
                      className="newsletter-input"
                    />
                    {errors.email && touched.email ? (
                      <Box top={{ xs: "1.2rem", lg: "1.2rem" }}>
                        <Text
                          fontSize={{
                            xs: "1.2rem",
                            lg: "1.2rem",
                          }}
                          fontWeight="normal"
                          color="red.300"
                        >
                          {errors.email}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Button
                  id="Inschrijven"
                  mt={{ xs: "2.4rem", lg: "3.2rem" }}
                  variant="primary"
                  bg="primary.500"
                  height="4rem"
                  width={{ xs: "100%", lg: "12.8rem" }}
                  type="submit"
                >
                  <Text fontSize="1.4rem">Inschrijven</Text>
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
