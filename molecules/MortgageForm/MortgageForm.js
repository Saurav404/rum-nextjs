import React from "react";
import { Box, Text, Grid, Flex, Button } from "atoms";
import { Field, Form, Formik } from "formik";
import { renderReactSelect } from "molecules";
import MemoArrowRight from "public/assets/icons/ArrowRight";
import Link from "next/link";

export const MortgageForm = ({ apidata }) => {
  const onSubmit = () => {};
  return (
    <>
      {apidata?.selectFormComponent?.selectForm?.length !== 0 && (
        <Box bg="white" borderRadius="0.6rem" p="3.2rem">
          <Formik
            initialValues={{ select_periode: "", select_aankoopbedrag: "", select_geld: "" }}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <Grid
                  gridTemplateColumns={{ xs: "1fr", md: "3fr 1fr" }}
                  gridColumnGap={{ md: "6rem" }}
                  gridRowGap={{ xs: "2.3rem", md: "unset" }}
                  alignItems={{ md: "center" }}
                >
                  <Grid
                    gridTemplateColumns={{ xs: "1fr", md: "repeat(3,1fr)" }}
                    gridColumnGap={{ md: "3.2rem" }}
                    gridRowGap={{ xs: "2.3rem", md: "unset" }}
                  >
                    {apidata?.selectFormComponent?.selectForm?.map((item) => {
                      return (
                        <Box key={item?.id} width={{ xs: "100%", lg: "100%" }}>
                          <Text
                            fontSize={{ xs: "2rem", lg: "1.6rem" }}
                            color="darkblue.500"
                            fontWeight="700"
                          >
                            {item?.heading}
                          </Text>
                          <Text fontSize="1.2rem" color="darkblue.500" fontWeight="300">
                            {item?.description}
                          </Text>
                          {item?.FormValues?.length !== 0 && (
                            <Field
                              id={`select_${item.id}`}
                              as="select"
                              name={`select_${item.id}`}
                              placeholder="€ 150 000"
                              className="selectbox-input"
                              options={item?.FormValues?.map((o) => ({
                                label: o?.name,
                                value: o?.name,
                              }))}
                              component={renderReactSelect}
                            />
                          )}
                        </Box>
                      );
                    })}
                    {/* <Box width={{ xs: "100%", lg: "100%" }}>
                      <Text
                        fontSize={{ xs: "2rem", lg: "1.6rem" }}
                        color="darkblue.500"
                        fontWeight="700"
                      >
                        {apidata?.selectFormComponent?.selectForm?.[0]?.heading}
                      </Text>
                      <Text fontSize="1.2rem" color="darkblue.500" fontWeight="300">
                        {apidata?.selectFormComponent?.selectForm?.[0]?.description}
                      </Text>
                      <Field
                        id="select_aankoopbedrag"
                        as="select"
                        name="select_aankoopbedrag"
                        placeholder="€ 150 000"
                        className="selectbox-input"
                        options={apidata?.selectFormComponent?.selectForm?.[0]?.FormValues?.map(
                          (o) => ({
                            label: o?.name,
                            value: o?.name,
                          })
                        )}
                        component={renderReactSelect}
                      />
                    </Box>
                    <Box width={{ xs: "100%", lg: "100%" }}>
                      <Text
                        fontSize={{ xs: "2rem", lg: "1.6rem" }}
                        color="darkblue.500"
                        fontWeight="700"
                      >
                        {apidata?.selectFormComponent?.selectForm?.[1]?.heading}
                      </Text>
                      <Text fontSize="1.2rem" color="darkblue.500" fontWeight="300">
                        {apidata?.selectFormComponent?.selectForm?.[1]?.description}
                      </Text>
                      <Field
                        id="select_geld"
                        as="select"
                        name="select_geld"
                        placeholder="€ 60 000 "
                        className="selectbox-input"
                        options={apidata?.selectFormComponent?.selectForm?.[1]?.FormValues?.map(
                          (o) => ({
                            label: o?.name,
                            value: o?.name,
                          })
                        )}
                        component={renderReactSelect}
                      />
                    </Box>
                    <Box width={{ xs: "100%", lg: "100%" }}>
                      <Text
                        fontSize={{ xs: "2rem", lg: "1.6rem" }}
                        color="darkblue.500"
                        fontWeight="700"
                      >
                        {apidata?.selectFormComponent?.selectForm?.[2]?.heading}
                      </Text>
                      <Text fontSize="1.2rem" color="darkblue.500" fontWeight="300">
                        {apidata?.selectFormComponent?.selectForm?.[2]?.description}
                      </Text>
                      <Field
                        id="select_periode"
                        as="select"
                        name="select_periode"
                        placeholder="1 jaar"
                        className="selectbox-input"
                        options={apidata?.selectFormComponent?.selectForm?.[2]?.FormValues?.map(
                          (o) => ({
                            label: o?.name,
                            value: o?.name,
                          })
                        )}
                        component={renderReactSelect}
                      />
                    </Box> */}
                  </Grid>
                  <Link
                    href={
                      apidata?.selectFormComponent?.button?.url
                        ? apidata?.selectFormComponent?.button?.url
                        : "/"
                    }
                  >
                    <a>
                      <Button
                        id="select-form"
                        ml={{ lg: "3rem" }}
                        variant="purple"
                        height="4.8rem"
                        width={{ xs: "100%", lg: "17.7rem" }}
                        type="submit"
                      >
                        <Flex justifyContent="center" alignItems="center" cursor="pointer">
                          <Text pr="1rem" fontSize="1.6rem" fontWeight="600">
                            {apidata?.selectFormComponent?.button?.name}
                          </Text>
                          <MemoArrowRight fill="white" height="1.6rem" width="1.8rem" />
                        </Flex>
                      </Button>
                    </a>
                  </Link>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </>
  );
};
