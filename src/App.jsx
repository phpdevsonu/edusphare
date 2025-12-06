import React from 'react'
import Sidebar from './Components/Layouts/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Icon from 'react-bootstrap-icons'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Components/Pages/Admin'
import Students from './Components/Pages/Students'
import Layout from './Components/Layouts/Layout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/admin' element={<Layout />}>
            <Route path='/admin/profile' element={<Students />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App