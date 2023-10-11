import { Text, Box,  } from "@chakra-ui/react"
import Book from '../components/Book'
import { Link } from "react-router-dom"
import { bookdata } from "../Data/books"
import { useQuery } from "react-query"
import { DataItem } from "../config/types"
import  ApiService  from '../config/index'

const AllBooks = () => {

  const { data, error, isLoading } = useQuery<DataItem[], Error>('data', ApiService.fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <div  className="container h-100 p">
           <Link to='addbooks' className="lists">
           <Text
           color='white'
           bgColor='black'
           w='fit-content'
           padding='0.5rem 2rem'
           fontWeight='500'
           className="
           pointer

           "

           >
            AddBooks
           </Text>
           </Link>
           <Box display='flex' flexWrap='wrap' justifyContent='space-between' bgColor='white' p='1rem'>
            {
                bookdata.map((item,i)=>(
                    <div key={i}>

                        <Book  {...item} />
                    </div>
                ))
            }
            {
                data?.map((item,i)=>(
                    <div key={i}>

                        <Book  {...item} />
                    </div>
                ))
            }
            
           </Box>
        </div>
    </div>
  )
}

export default AllBooks