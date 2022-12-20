import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Text, Button, Flex } from "atoms";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { isMobile } from "utils/utilities";
import { ModalHeading } from "molecules";
import Link from "next/link";
import axios from "axios";

const customStyles = {
  content: {
    top: `${isMobile() === true ? "0%" : "50%"}`,
    left: "50%",
    right: "auto",
    bottom: `${isMobile() === true ? "0%" : "auto"}`,
    marginRight: "-50%",
    padding: "0px",
    transform: `${isMobile() === true ? "translate(-50%, 0%)" : "translate(-50%, -50%)"}`,
    backgroundColor: "background.200",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 4,
  },
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Ongeldige indeling")
    .required("Email adres is verplicht")
    .max(100, "Max 100 tekens toegestaan")
    .min(3, "Min 3 tekens vereist"),
  emailconfirm: Yup.string()
    .email("Invalid format")
    .oneOf([Yup.ref("email")], "Beide e-mailadressen moeten hetzelfde zijn")
    .required("Email adres is verplicht")
    .max(100, "Max 100 tekens toegestaan")
    .min(3, "Min 3 tekens vereist"),
});

export const EmailModal = ({ formvalues, data }) => {
  const [isSuccessVisible, setSuccessVisible] = useState(true);
  const [selected, setSelected] = useState(0);
  const [field, setField] = useState(false);

  const onRequestClose = () => {
    setSuccessVisible(false);
  };

  const ToNextModal = () => {
    setSelected(selected + 1);
  };
  const onSubmit = async (values) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/form-data`, {
        email: values.email,
        data: formvalues,
        form: data.id,
        form_slug: `${data?.slug}`,
      });
      ToNextModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Modal
        isOpen={isSuccessVisible}
        style={customStyles}
        onRequestClose={() => setSuccessVisible(false)}
        ariaHideApp={false}
      >
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box width={{ xs: "100vw", lg: "60rem" }} bg="white" zIndex={1}>
                <ModalHeading onRequestClose={onRequestClose} />

                <Box
                  borderBottom=".1rem solid"
                  borderColor="gray.800"
                  mb={{ xs: "15.8rem", lg: "unset" }}
                />
                {/* Frist Modal */}
                {selected === 0 && (
                  <Box mx={{ xs: "2.4rem", lg: "3.1rem" }} my={{ lg: "3.3rem" }}>
                    <Text
                      fontFamily="Inter"
                      fontSize={{ xs: "1.6rem", lg: "2.4rem" }}
                      fontWeight={{ xs: "bolder", lg: "bold" }}
                      lineHeight={{ xs: "1.9rem", lg: "2.9rem" }}
                      color="darkgray.600"
                      maxWidth={{ lg: "52rem" }}
                      mb="4rem"
                    >
                      Heb je nu geen tijd om het formulier af te ronden? Vul hier je email om het
                      formulier later af te ronden
                    </Text>

                    <Text
                      fontFamily="Inter"
                      fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
                      fontWeight="light"
                      color="darkgray.600"
                      mb={{ xs: "1.2rem", lg: "0.8rem" }}
                    >
                      Vul hier je email in
                    </Text>
                    <Box
                      height={{ xs: "4.8rem", lg: "4rem" }}
                      mb="12.9rem"
                      border="1px solid"
                      borderRadius="0.4rem"
                      borderColor={
                        errors.email ? "red.300" : `${errors.touched ? "blue.100" : "gray.800"}`
                      }
                      onClick={() => setField(true)}
                    >
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        className="contact-input"
                      />
                      {errors.email && touched.email ? (
                        <Box top={{ xs: "1rem", lg: "0.4rem" }} left="1rem">
                          <Text
                            fontSize={{
                              xs: "1.2rem",
                              lg: "1.4rem",
                            }}
                            fontWeight="normal"
                            color="red.300"
                          >
                            {errors.email}
                          </Text>
                        </Box>
                      ) : null}
                    </Box>
                    <Flex flexDirection={{ xs: "column", lg: "unset" }}>
                      <Box mr={{ lg: "2.4rem" }} mb={{ xs: "1.6rem", lg: "unset" }}>
                        <Button
                          id="verzend"
                          width={{ xs: "100%", lg: "11.4rem" }}
                          height="4.8rem"
                          bg="primary.500"
                          borderRadius=".4rem"
                          onClick={!(errors.email || field) ? null : ToNextModal}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="1.6rem"
                            fontWeight="bold"
                            color="white"
                            textAlign="center"
                          >
                            Verzend
                          </Text>
                        </Button>
                      </Box>
                      <Box mb={{ xs: "3.2rem", lg: "unset" }}>
                        <Button
                          id="annuleren"
                          variant="default"
                          width={{ xs: "100%", lg: "12.3rem" }}
                          height="4.8rem"
                          bg="white"
                          borderRadius="0.4rem"
                          border="0.1rem solid"
                          borderColor="primary.500"
                          onClick={onRequestClose}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="1.6rem"
                            fontWeight="bold"
                            color="primary.500"
                            textAlign="center"
                          >
                            annuleren
                          </Text>
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                )}
                {/* Second modal */}
                {selected === 1 && (
                  <Box mx={{ xs: "2.4rem", lg: "3.1rem" }} my={{ lg: "3.3rem" }}>
                    <Text
                      fontFamily="Inter"
                      fontSize={{ xs: "1.6rem", lg: "2.4rem" }}
                      fontWeight={{ xs: "bolder", lg: "bold" }}
                      lineHeight={{ xs: "1.9rem", lg: "2.9rem" }}
                      color="darkgray.600"
                      maxWidth={{ lg: "45rem" }}
                      mb="4rem"
                    >
                      Bevestig je e-mailadres
                    </Text>
                    <Text
                      fontFamily="Inter"
                      fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
                      fontWeight="light"
                      color="darkgray.600"
                      mb={{ xs: "1.2rem", lg: "0.8rem" }}
                    >
                      Typ hier uw e-mailadres
                    </Text>
                    <Box
                      height={{ xs: "4.8rem", lg: "4rem" }}
                      bg="white"
                      mb="12.9rem"
                      border="1px solid"
                      borderRadius="0.4rem"
                      borderColor={errors.emailconfirm ? "red.300" : "gray.800"}
                    >
                      <Field
                        type="text"
                        id="emailconfirm"
                        name="emailconfirm"
                        placeholder="example@mail.com"
                        className="contact-input"
                      />
                      {errors.emailconfirm && touched.emailconfirm ? (
                        <Box top={{ xs: "1rem", lg: "0.4rem" }} left="1rem">
                          <Text
                            fontSize={{
                              xs: "1.2rem",
                              lg: "1.4rem",
                            }}
                            fontWeight="normal"
                            color="red.300"
                          >
                            {errors.emailconfirm}
                          </Text>
                        </Box>
                      ) : null}
                    </Box>
                    <Flex flexDirection={{ xs: "column", lg: "unset" }}>
                      <Box mr={{ lg: "2.4rem" }} mb={{ xs: "1.6rem", lg: "unset" }}>
                        <Button
                          id="verzend"
                          width={{ xs: "100%", lg: "11.4rem" }}
                          height="4.8rem"
                          bg="primary.500"
                          borderRadius=".4rem"
                          type="submit"
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="1.6rem"
                            fontWeight="bold"
                            color="white"
                            textAlign="center"
                          >
                            Verzend
                          </Text>
                        </Button>
                      </Box>
                      <Box mb={{ xs: "3.2rem", lg: "unset" }}>
                        <Button
                          id="annuleren"
                          variant="default"
                          width={{ xs: "100%", lg: "12.3rem" }}
                          height="4.8rem"
                          bg="white"
                          borderRadius="0.4rem"
                          border="0.1rem solid"
                          borderColor="primary.500"
                          onClick={onRequestClose}
                        >
                          <Text
                            fontFamily="Inter"
                            fontSize="1.6rem"
                            fontWeight="bold"
                            color="primary.500"
                            textAlign="center"
                          >
                            annuleren
                          </Text>
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                )}

                {/* Third Modal */}
                {selected === 2 && (
                  <Box
                    mx={{ xs: "2.3rem", lg: "3.1rem" }}
                    mb={{ xs: "3.2rem", lg: "3.3rem" }}
                    mt={{ xs: "21.3rem", lg: "3.3rem" }}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="2.4rem"
                      fontWeight="bold"
                      lineHeight="2.9rem"
                      color="darkgray.600"
                      mb={{ xs: "0.8rem", lg: "0.8rem" }}
                    >
                      Saved!
                    </Text>
                    <Text
                      fontFamily="Inter"
                      fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
                      fontWeight="medium"
                      color="darkgray.600"
                      maxWidth="52rem"
                      mb={{ xs: "29.3rem", lg: "8.2rem" }}
                    >
                      You can proceed editing the form next time you come back to the website
                    </Text>

                    <Box mr={{ lg: "2.4rem" }}>
                      <Link href="/" passHref>
                        <a>
                          <Button
                            id="home-page"
                            width={{ xs: "100%", lg: "19.3rem" }}
                            height="4rem"
                            bg="primary.500"
                            borderRadius=".4rem"
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="1.6rem"
                              fontWeight="light"
                              lineHeight="1.9rem"
                              color="white"
                              textAlign="center"
                            >
                              Go to home page
                            </Text>
                          </Button>
                        </a>
                      </Link>
                    </Box>
                  </Box>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
