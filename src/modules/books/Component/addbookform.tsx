import { FormEvent, useState } from "react";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { DataItem } from "../../../config/types";
import ApiService from "../../../config/index";

// type Props = {}
interface MyFormData {
  title: string;
  author: string;
}
const Addbookform = () =>
  // props: Props

  {
    const [formData, setFormData] = useState<MyFormData>({
      title: "",
      author: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const mutation = useMutation<DataItem, Error, MyFormData>(
      ApiService.sendData
    );

    const senDataToBackend = async (formData: MyFormData) => {
      try {
        const result = await mutation.mutateAsync(formData);
        // Optionally refetch data or update UI
        console.log("Mutation Result:", result);
      } catch (error: unknown) {
        // Handle error
        console.error("Mutation Error:");
      }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Call a function to send data to the backend
      senDataToBackend(formData);
    };

    return (
      <Box
        boxShadow="lg"
        borderRadius="2rem"
        flexDir="column"
        w="fit-content"
        bgColor="white"
        color="black"
        padding="3rem 2rem"
      >
        <Text
          fontSize="1.5rem"
          fontWeight="600"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {" "}
          Add a New Book
        </Text>
        <Box
          mt="1rem"
          w="28rem"
          display="flex"
          gap="10px"
          alignItems={"center"}
        >
          <Box flex="1" className="transline trl"></Box>
          <Text flex="1">Choose an image</Text>
          <Box flex="1" className="transline trr"></Box>
        </Box>
        <Box
          mt="1rem"
          alignItems="center"
          justifyContent="center"
          display="flex"
          h="8rem"
          border="2px"
          borderColor="rgba(0, 0, 0, 0.2)"
          borderRadius="8px"
          borderStyle="dashed"
          bgColor="rgba(0, 0, 0, 0.101)"
        >
          <input type="file" id="file" className="filetypes" />
          <label htmlFor="file">choose an image</label>
        </Box>
        <form onSubmit={handleSubmit}>
        <Stack mt="2rem" spacing="2rem">
          
            <Box
              gap="1rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="700">Name</Text>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                _focus={{ borderColor: "purple" }}
                size="md"
                placeholder="Enter book name"
              />
            </Box>
            <Box
              gap="1rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontWeight="700">Author</Text>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                size="md"
                placeholder="Enter Author name"
                _focus={{ borderColor: "purple" }}
              />
            </Box>

            <Button mt="1rem" h="3rem" type="submit">
              Submit
            </Button>
         
        </Stack>
        </form>
        <Text
          mt="3rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {" "}
          All fields are required
        </Text>
      </Box>
    );
  };

export default Addbookform;
