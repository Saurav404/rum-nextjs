import React, { useState } from "react";
import { Box, Text, Flex, Grid, Button } from "atoms";
import LikeIcon from "public/assets/icons/LikeIcon";
import CommentIcon from "public/assets/icons/CommentIcon";
import axios from "axios";
import { format } from "date-fns";
import nl from "date-fns/locale/nl";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CommentBoxReply } from "molecules";

const validationSchema = Yup.object({
  comment: Yup.string().required(),
  name: Yup.string().required("Verplicht").max(40, "Max 40 characters allowed"),
  email: Yup.string()
    .email("Invalid format")
    .required("Verplicht")
    .max(100, "Max 100 characters allowed")
    .min(3, "Min 3 characters required"),
});

export const CommentBoxPillar = ({ name, time, msg, data, blogs }) => {
  // const [menu, setMenu] = useState(false);
  const [showreply, setShowreply] = useState(false);
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState(false);
  const [like, setLike] = useState(data.points ? parseInt(data.points, 10) : 0);
  function randomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const likePost = async () => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/comments/pillar:${blogs.id}/comment/${data.id}/like`
      );
      setLike(like + 1);
    } catch (e) {
      console.error(e);
    }
  };
  const onSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/comments/pillar:${blogs.id}`, {
        authorId: randomString(10),
        authorName: `${values.name}`,
        authorEmail: `${values.email}`,
        content: `${values.comment}`,
        threadOf: `${data.id}`,
        related: [
          {
            refId: `${blogs.id}`,
            ref: "pillar",
            field: "comments",
          },
        ],
      });
      resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  const threaddata = blogs.comments.filter(checkTitle);
  function checkTitle(commentdata) {
    return commentdata.threadOf === data.id;
  }

  return (
    <>
      <Box pt="2rem" pb="0.7rem" borderBottom="0.2rem solid" borderColor="gray.500">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="1.8rem" lineHeight="2.7rem" color="darkblue.500">
            {name}
          </Text>
          {/* <Box cursor="pointer" onClick={() => setMenu(!menu)}>
            <MemoMore height="4px" width="1.6rem" fill="blue" />
          </Box> */}
        </Flex>
        {/* {menu && (
          <Box
            position="absolute"
            left="22rem"
            width="7rem"
            bg="white"
            borderRadius="0.5rem"
            p="1rem"
            border="1px solid #E2E2E2"
          >
            <Flex flexDirection="column" justifyContent="center">
              <Text color="gray.300" fontSize="1.5rem" lineHeight="2rem">
                Edit
              </Text>
            </Flex>
          </Box>
        )} */}
        <Text pt="2px" pb="1rem" color="gray.300" fontSize="1.5rem" lineHeight="2rem">
          {format(new Date(time), "eeee, dd MMMM yyyy", { locale: nl })}
        </Text>
        <Text py=".8rem" fontSize="1.5rem" lineHeight="2rem" color="darkblue.500">
          {msg}
        </Text>
      </Box>
      <Flex justifyContent="space-between" my="2.4rem">
        <Flex>
          <Flex cursor="pointer">
            <Box onClick={likePost}>
              <LikeIcon />
            </Box>

            <Text pl="0.7rem" fontSize="1.4rem" color="gray.300">
              {data.points ? like : "0"}
            </Text>
          </Flex>
          <Flex ml="3.9rem" cursor="pointer" onClick={() => setShowreply(!showreply)}>
            <Box>
              <CommentIcon />
            </Box>

            <Text whiteSpace="nowrap" pl="0.7rem" fontSize="1.4rem" color="gray.300">
              {threaddata.length} antwoorden
            </Text>
          </Flex>
        </Flex>
        <Text
          onClick={() => setReply(!reply)}
          cursor="pointer"
          color="primary.500"
          fontWeight="bold"
          fontSize="1.6rem"
        >
          antwoorden
        </Text>
      </Flex>
      {showreply && (
        <Box>
          {threaddata?.map((item) => {
            return (
              <CommentBoxReply
                key={item.id}
                data={item}
                blogs={blogs}
                name={item.authorName}
                time={item.updated_at}
                msg={item.content}
              />
            );
          })}
        </Box>
      )}
      {reply && (
        <Box>
          <Formik
            initialValues={{ comment: "", name: "", email: "" }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid gridTemplateColumns="1fr">
                  <Box
                    border="1px solid"
                    borderRadius="0.4rem"
                    borderColor="gray.50"
                    py="2.4rem"
                    my="2.4rem"
                  >
                    <Box>
                      <Field
                        as="textarea"
                        id="comment"
                        name="comment"
                        maxLength={200}
                        placeholder="hoe denk jij erover?"
                        className="comment-input"
                        onClick={() => setComment(true)}
                      />
                    </Box>
                  </Box>
                  {comment && (
                    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="1.6rem">
                      <Box
                        border="1px solid"
                        width="100%"
                        borderRadius="0.4rem"
                        borderColor="gray.50"
                        py="1rem"
                      >
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Jouw naam"
                          className="comment-input-field"
                        />
                        {errors.name && touched.name ? (
                          <Box
                            position="absolute"
                            top={{ xs: "0.8rem", lg: "4rem" }}
                            left={{ xs: "1.2rem", lg: "1rem" }}
                          >
                            <Text
                              fontSize={{
                                xs: "1rem",
                                lg: "1rem",
                              }}
                              fontWeight="normal"
                              color="red.300"
                            >
                              {errors.name}
                            </Text>
                          </Box>
                        ) : null}
                      </Box>
                      <Box
                        border="1px solid"
                        width="100%"
                        borderRadius="0.4rem"
                        borderColor="gray.50"
                        py="1rem"
                      >
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="comment-input-field"
                        />
                        {errors.email && touched.email ? (
                          <Box
                            position="absolute"
                            top={{ xs: "0.8rem", lg: "4rem" }}
                            left={{ xs: "1.2rem", lg: "1rem" }}
                          >
                            <Text
                              fontSize={{
                                xs: "1rem",
                                lg: "1rem",
                              }}
                              fontWeight="normal"
                              color="red.300"
                            >
                              {errors.email}
                            </Text>
                          </Box>
                        ) : null}
                      </Box>
                    </Grid>
                  )}

                  {comment && (
                    <Flex mt="2.5rem" ml="auto" alignItems="center">
                      <Text
                        fontSize="1.4rem"
                        fontWeight="400"
                        color="darkgrey.500"
                        cursor="pointer"
                        onClick={() => {
                          setComment(false);
                          setReply(false);
                        }}
                      >
                        annuleren
                      </Text>
                      <Button
                        id="verstuur"
                        variant="secondary"
                        bg="primary.500"
                        height="3.2rem"
                        width="10.2rem"
                        ml="2rem"
                        type="submit"
                      >
                        <Text fontSize="1.6rem" fontWeight="bold">
                          Verstuur
                        </Text>
                      </Button>
                    </Flex>
                  )}
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </>
  );
};
