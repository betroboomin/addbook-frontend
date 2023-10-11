import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import AllBooks from '../pages/AllBooks'
import Addbooks from '../modules/books/Addbooks'


const Pages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<AllBooks />} />
            <Route path='/books/addbooks' element={<Addbooks />} />
              
          \
            <Route path='/about' element={<About />} />
            
        </Routes>
    </div>
  )
}

export default Pages