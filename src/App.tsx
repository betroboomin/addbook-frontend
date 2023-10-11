// import { useState } from 'react'

import {BrowserRouter} from 'react-router-dom';
import Pages from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  // const [count, setCount] = useState(0)
 const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <Pages />
     </BrowserRouter>

    </QueryClientProvider>
     
    </>
  )
}
// export { queryClient };
export default App
