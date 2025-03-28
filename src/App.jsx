import React from 'react'
import GlobalStyles from './styles/globalStyles'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'
import Settings from './pages/Settings'
import NewUsers from './pages/Users'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
<GlobalStyles/>
<BrowserRouter>
<Routes>
  <Route index  path='/' element={<Navigate to="/dashboard" replace/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/account' element={<Account/>}></Route>
  <Route path='/bookings' element={<Bookings/>}></Route>
  <Route path='/cabins' element={<Cabins/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/settings' element={<Settings/>}></Route>
  <Route path='/newuser' element={<NewUsers/>}></Route>
  <Route path='*' element={<PageNotFound/>}></Route>
</Routes>


</BrowserRouter>
    
    
    </>
  )
}

export default App