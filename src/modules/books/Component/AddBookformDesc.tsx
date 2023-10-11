import { Text, Box, Stack, Icon } from "@chakra-ui/react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import BoltIcon from "@mui/icons-material/Bolt";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Link } from "react-router-dom";
// type Props = {}

const AddBookformDesc = () =>
  // props: Props
  {
    return (
      <Box
        gap="19rem"
        fontWeight="600"
        flexDir="column"
        display="flex"
        alignItems=""
        justifyContent="space-between"
      >
        <Link to="/books" className="pointer">
          <Text fontSize="2rem" ml="2rem">
            MyBooks
          </Text>
        </Link>

        <Box
          bgColor="rgba(0,0,0,0.4)"
          border="1px"
          borderColor="black"
          backdropFilter="blur(.5rem)"
          p="2rem 1rem"
          borderRadius="2rem"
        >
          <Text fontSize="1.5rem">Add your book to our store</Text>
          <Stack spacing="1rem" mt="1.5rem">
            <Box display="flex" gap="1rem">
              <Icon as={SentimentSatisfiedAltIcon} />{" "}
              <Text>Easy to set up</Text>
            </Box>
            <Box display="flex" gap="1rem">
              <Icon as={EngineeringIcon} /> <Text>24/7/365 support</Text>
            </Box>
            <Box display="flex" gap="1rem">
              <Icon as={BoltIcon} /> <Text>Highly performant</Text>
            </Box>
            <Box display="flex" gap="1rem">
              <Icon as={StarOutlineIcon} />
              <Text>Free trial with 20% discounts within the 1st month </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  };

export default AddBookformDesc;
