import React from "react";
import { Box, Text, Flex, Button } from "atoms";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid format")
    .required("Email is Verplicht")
    .max(100, "Max 100 characters allowed")
    .min(3, "Min 3 characters required"),
});

export const NewsletterCard = () => {
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
        bg="secondary.100"
        borderRadius="0px 32px 32px 32px"
        my={{ xs: "4.8rem", lg: "8rem" }}
        py={{ xs: "3.2rem", lg: "7.3rem" }}
        px={{ xs: "1.8rem", lg: "unset" }}
      >
        <Flex flexDirection="column" alignItems="center">
          <Text
            fontWeight="600"
            color="darkblue.500"
            maxWidth={{ xs: "22rem", lg: "unset" }}
            textAlign={{ xs: "center", lg: "unset" }}
            fontSize={{ xs: "1.6rem", lg: "4rem" }}
            lineHeight={{ xs: "1.9rem", lg: "4.8rem" }}
          >
            Artikelen van wereldklasse, wekelijks bezorgd
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
                <Flex mt="3.2rem" flexDirection={{ xs: "column", lg: "row" }}>
                  <Box
                    mr="0.8rem"
                    height="4.8rem"
                    width={{ xs: "100%", lg: "40.8rem" }}
                    bg="white"
                    borderRadius="0.4rem"
                  >
                    <Box mt="1.4rem" ml="1.5rem">
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
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
                    id="abonneren"
                    mt={{ xs: "2.6rem", lg: "unset" }}
                    variant="primary"
                    bg="primary.500"
                    height="4.8rem"
                    width={{ xs: "100%", lg: "17.7rem" }}
                    type="submit"
                  >
                    <Text>Abonneren</Text>
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
          <Box display={{ xs: "none", lg: "block" }}>
            <Text
              mt="1.6rem"
              fontWeight="300"
              lineHeight="2rem"
              color="secondary.1000"
              fontSize="1.6rem"
            >
              Abonnement impliceert instemming met ons privacybeleid
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
