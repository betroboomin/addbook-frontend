import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
// import { EditBookModal } from '../modules/books/Component/Modal'

type Props = {
  name: string;
  image: string;
  author: string;
  title?: string;
};

const Book = (props: Props) => {
  const { image, name, author, title } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isOn, setIsOn] = useState(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box
      boxShadow="lg"
      mt="2rem"
      border="1px"
      borderColor="rgba(128, 128, 128, 0.329)"
      display="flex"
      flexDir="column"
      bgColor="white"
      w="15rem"
      borderRadius="5px"
      p=".5rem 1rem"
    >
      <span className="new">new</span>
      <img
        src={image ? image : "/images/singone.webp"}
        alt=""
        className="image"
      />
      <span>{name ? name : title}</span>
      <span> Author: {author}</span>
      <Box
        display="flex"
        color="white"
        fontWeight={"500"}
        justifyContent={"space-between"}
        mt={"1rem"}
      >
        <Link to="">
          {" "}
          <Text
            bgColor="#7928CA"
            _hover={{ bgColor: "#7928cac9" }}
            borderRadius={"5px"}
            className="plr ptb"
            onClick={onOpen}
          >
            Edit
          </Text>
        </Link>
        <Link className="">
          <Text
            bgColor="#FF0080"
            _hover={{ bgColor: "#ff0080d2" }}
            borderRadius={"5px"}
            className="plr ptb"
            onClick={() => setIsOn(!isOn)}
          >
            Delete
          </Text>
        </Link>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOn}
        onClose={() => setIsOn(false)}
      >
        <ModalContent>
          <ModalBody>
            <Box>
              <Text fontWeight={600} fontSize="1.5rem">
                Are you sure you want to delete
              </Text>
              <Text
                color={"purple"}
                fontSize={"1.3rem"}
                display="flex"
                justifyContent="center"
                mt="1rem"
              >
                Book
              </Text>
              <Box
                display="flex"
                justifyContent="space-around"
                mt="2rem"
                mb={"1rem"}
              >
                <Text
                  className="pointer"
                  bgColor="red"
                  color={"white"}
                  p=".4rem 1rem"
                  borderRadius="5px"
                >
                  Delete
                </Text>
                <Text
                  className="pointer"
                  border="1px"
                  p=".4rem 1rem"
                  borderRadius="5px"
                >
                  Cancel
                </Text>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Book;
