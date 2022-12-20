import React from "react";
import { useRouter } from "next/router";
import { Field, Form, Formik } from "formik";

import { renderReactSelect } from "molecules";
import { Box, Text, Flex, Button, Grid } from "atoms";
import MemoArrowRight from "public/assets/icons/ArrowRight";

export const AutoInsuranceCard = ({ apidata, forms }) => {
  const { push } = useRouter();
  const onSubmit = (values) => {
    if (values.select) {
      push(`/forms/${values.select}`);
    }
  };

  return (
    <>
      <Box bg="rgba(237, 245, 254, 0.6)" borderRadius="0.8rem" width={{ lg: "28rem" }} p="2.4rem">
        <Text
          fontSize={{ lg: "1.7rem" }}
          color="darkblue.500"
          fontWeight="600"
          lineHeight={{ lg: "2rem" }}
        >
          Dienst
        </Text>
        <Formik initialValues={{ select: "" }} onSubmit={onSubmit}>
          {() => (
            <Form>
              <Box>
                <Grid gridTemplateColumns="1fr" mt="3rem">
                  <Grid gridTemplateColumns="1fr" gridRowGap="3rem">
                    <Box>
                      {/* <Text
                        fontWeight="600"
                        fontSize="1.6rem"
                        color="darkblue.500"
                        lineHeight="1.9rem"
                      >
                        Insurance type
                      </Text> */}
                      <Box width={{ xs: "100%", lg: "100%" }} mt="1rem">
                        <Field
                          id="select"
                          as="select"
                          name="select"
                          placeholder="Welke dienst zoek je?"
                          options={
                            apidata?.length !== 0
                              ? apidata?.map((o) => ({
                                  label: o?.name,
                                  value: o?.slug,
                                }))
                              : forms?.map((o) => ({
                                  label: o?.name,
                                  value: o?.slug,
                                }))
                          }
                          component={renderReactSelect}
                          className="selectbox-input"
                        />
                      </Box>
                    </Box>
                    {/* <Box>
                      <Text
                        fontWeight="600"
                        fontSize="1.6rem"
                        color="darkblue.500"
                        lineHeight="1.9rem"
                      >
                        ZIP code
                      </Text>
                      <Box width={{ xs: "100%", lg: "100%" }} mt="1rem">
                        <Field
                          id="zip"
                          as="select"
                          name="zip"
                          placeholder="zip code"
                          options={options_zip.map((o) => ({
                            label: o,
                            value: o,
                          }))}
                          component={renderReactSelect}
                          className="selectbox-input"
                        />
                      </Box>
                    </Box>
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize="1.6rem"
                        color="darkblue.500"
                        lineHeight="1.9rem"
                      >
                        Age
                      </Text>
                      <Box width={{ xs: "100%", lg: "100%" }} mt="1rem">
                        <Field
                          id="age"
                          as="select"
                          name="age"
                          placeholder="age"
                          options={options_age.map((o) => ({
                            label: o,
                            value: o,
                          }))}
                          component={renderReactSelect}
                          className="selectbox-input"
                        />
                      </Box>
                    </Box> */}
                  </Grid>
                  <Button
                    id="zoeken"
                    mt={{ xs: "4.4rem", lg: "6.4rem" }}
                    variant="primary"
                    bg="primary.500"
                    height="4.8rem"
                    width={{ xs: "100%", lg: "100%" }}
                    type="submit"
                  >
                    <Flex justifyContent="center" alignItems="center" cursor="pointer">
                      <Text pr="1rem">Zoeken</Text>
                      <MemoArrowRight fill="white" height="1.2rem" width="1.8rem" />
                    </Flex>
                  </Button>
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
