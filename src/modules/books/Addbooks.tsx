import { Box } from "@chakra-ui/react"
import Addbookform from "./Component/addbookform"
import AddBookformDesc from "./Component/AddBookformDesc"

const Addbooks = () => {
  return (
    <div style={{ backgroundImage: `url(/images/background.svg)`, backgroundSize:'cover', backgroundRepeat:'no-repeat',  height:'120vh'}}>
    <Box color='white'  p='3rem 0'  className="container" display='flex' alignItems={'center'} gap='5rem' justifyContent='space-between'>
        <Box h='100%' flex='1' pl='4rem'>
            <AddBookformDesc />
        </Box>
        <Box w='33rem'>
        <Addbookform />
        </Box>
        

    </Box>

    </div>
    
  )
}

export default Addbooks