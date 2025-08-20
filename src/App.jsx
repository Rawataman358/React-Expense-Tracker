import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Transaction from './Pages/Transaction'
// import Report from './Pages/Report'
import Notfound from './Pages/Notfound'
import AddTransaction from './pages/AddTransaction'


const App = () => {
  return (

    <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
      <Route path='/transaction' element={<Transaction/>}></Route>
      {/* <Route path='/report' element={<Report/>}></Route> */}
      <Route path='/add transaction' element={<AddTransaction/>}></Route>
      <Route path='*' element={<Notfound/>}></Route> 

{/* ** means this part doesn't exist */}
      </Routes>


    </BrowserRouter>

  )
}

export default App;
