import { Box, Text,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ backgroundImage: `linear-gradient(to right,#b163ff71 , transparent),url(/images/blacktriangle.png)` }} className="myBox">
      <div className="container">
        
          <Box  display='flex' flexDir='column' alignItems='center' justifyContent='center' h='100vh' >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome to My Books
          </Text>
          <Box display='flex' gap='2rem' mt="2rem">
              <Button bgColor='#FF0080' color='white' p='.5rem 2rem' borderRadius='3px' _hover={{ bgColor:'#ff0080d2', borderRadius:'3px' }}>
                  <Link to='/books' className='links'>See Books</Link>
              </Button>
              <Button bgColor='#7928CA' color='white' borderRadius='3px' p='0.5rem 2rem' _hover={{ bgColor: '#7928cac9' }}>
                  <Link to="/books/addbooks" className="links"> Add Books</Link>
              </Button>
          </Box>
          </Box>
          
       
      </div>
    </div>
  );
};

export default Home;
