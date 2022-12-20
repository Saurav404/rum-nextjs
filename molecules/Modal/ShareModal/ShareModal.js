import { Box, Button } from "atoms";
import React, { useState } from "react";
import Modal from "react-modal";
import { isMobile } from "utils/utilities";
import { useRouter } from "next/router";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  FacebookShareButton,
  EmailShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
} from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";

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
    zIndex: 3,
  },
};

export const ShareModal = ({ closeModal }) => {
  const [isSuccessVisible, setSuccessVisible] = useState(true);
  const [field, setField] = useState(false);
  const router = useRouter();
  let hostname;
  if (typeof window !== "undefined") {
    hostname = window.location.hostname;
  } else hostname = "";

  const path = `https://${hostname}/${router.query.tags}`;

  const onRequestClose = () => {
    setSuccessVisible(false);
  };

  return (
    <>
      <Modal
        isOpen={isSuccessVisible}
        style={customStyles}
        onRequestClose={() => {
          setSuccessVisible(false);
          closeModal();
        }}
        ariaHideApp={false}
      >
        <Box
          width="20rem"
          transform="translateY(50%)"
          display="flex"
          justifyContent="space-evenly"
          height="50px"
        >
          <FacebookShareButton url={path}>
            <FacebookIcon url={path} size={32} round={true} />
          </FacebookShareButton>
          <EmailShareButton url={path}>
            <EmailIcon url={path} size={32} round={true} />
          </EmailShareButton>
          <InstapaperShareButton url={path}>
            <InstapaperIcon url={path} size={32} round={true} />
          </InstapaperShareButton>
          <LinkedinShareButton url={path}>
            <LinkedinIcon url={path} size={32} round={true} />
          </LinkedinShareButton>
        </Box>

        <Box>
          <CopyToClipboard text={path} onCopy={() => setField(true)}>
            <Button
              id="copy-link"
              variant="action"
              bg={field ? "#50ff40" : "#050E29"}
              width="10rem"
              mt={{ xs: "1.6rem", lg: "4rem" }}
              height="4rem"
              margin="auto"
              display="flex"
            >
              {field ? "Copied" : "Copy link"}
              {field && <span id="tick-mark" />}
            </Button>
          </CopyToClipboard>
        </Box>
        <Box>
          <Button
            id="close"
            variant="action"
            bg="darkblue.500"
            width="100%"
            mt={{ xs: "1.6rem", lg: "4rem" }}
            height="4rem"
            onClick={() => closeModal()}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};
