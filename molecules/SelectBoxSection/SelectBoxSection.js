import React from "react";
import { useRouter } from "next/router";
import { Field, Form, Formik } from "formik";

import { renderReactSelect } from "molecules";
import { Box, Flex, Button, Text } from "atoms";
import MemoArrowRight from "public/assets/icons/ArrowRight";

export const SelectBoxSection = ({ bgcolor, alignment, apiData, forms }) => {
  const { push } = useRouter();
  const onSubmit = (values) => {
    if (values.select) {
      push(`/forms/${values.select}`);
    }
  };

  return (
    <>
      <Box my="3rem" zIndex={3}>
        <Flex justifyContent={alignment}>
          <Box
            bg={bgcolor}
            width={{ xs: "100%", lg: "80rem" }}
            borderRadius="0.6rem"
            px={{ xs: "3.2rem", lg: "3.6rem" }}
            py={{ xs: "3.2rem", lg: "3.6rem" }}
          >
            <Text
              fontWeight="600"
              fontSize="2rem"
              color="darkblue.500"
              lineHeight="2.4rem"
              mb="1rem"
            >
              {apiData?.text_above_dropdown ? apiData?.text_above_dropdown : "Dienst"}
            </Text>
            <Formik initialValues={{ select: "" }} onSubmit={onSubmit}>
              {() => (
                <Form>
                  <Flex
                    alignItems="end"
                    flexDirection={{ xs: "column", lg: "row" }}
                    mt={{ xs: "1.2rem", lg: "-1rem" }}
                  >
                    <Box width={{ xs: "100%", lg: "51.1rem" }}>
                      <Field
                        id="select"
                        as="select"
                        name="select"
                        placeholder={
                          apiData?.dropdown_placeholder_text
                            ? apiData?.dropdown_placeholder_text
                            : "Welke dienst zoek je?"
                        }
                        className="selectbox-input"
                        options={
                          apiData?.forms.length !== 0
                            ? apiData?.forms?.map((o) => ({
                                label: o?.name,
                                value: o?.slug,
                              }))
                            : forms?.map((o) => ({
                                label: o?.name,
                                value: o?.slug,
                              }))
                        }
                        component={renderReactSelect}
                      />
                    </Box>

                    <Button
                      id="zoeken"
                      ml={{ lg: "3rem" }}
                      mt={{ xs: "4.4rem", lg: "unset" }}
                      variant="primary"
                      bg="primary.500"
                      height="4.8rem"
                      width={{ xs: "100%", lg: "17.7rem" }}
                      type="submit"
                    >
                      <Flex justifyContent="center" alignItems="center" cursor="pointer">
                        <Text pr="1rem">
                          {apiData?.dropdown_button_text ? apiData?.dropdown_button_text : "Zoeken"}
                        </Text>
                        <MemoArrowRight fill="white" height="1.6rem" width="1.8rem" />
                      </Flex>
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
